import * as React from 'react'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear'
import Checkbox from '@material-ui/core/Checkbox'
import { useForm, Controller } from 'react-hook-form'
import ReactQuill, { Quill } from 'react-quill'
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)
import { useRegisterNewsMutation } from '../../graphql/generated/hooks'
import { createImageHandler, resizeImage, uploadImage } from '../../util'
const { useState, useRef, useMemo } = React

const NewPost = () => {
  const [createPost] = useRegisterNewsMutation()
  const [objUrl, setObjUrl] = useState(null)
  const [file, setFile] = useState(null)
  const [includeProContent, setIncludeProContent] = useState(false)
  const [uploadSuccessfull, setUploadSuccessfull] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [post, setPost] = useState('')
  const [proContent, setProContent] = useState('')
  const [postImage, setPostImage] = useState('')
  const inputFieldRef = useRef()

  const { register, handleSubmit, control, reset } = useForm()
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>
  const quillRef = useRef() as React.MutableRefObject<ReactQuill>
  const proRef = useRef() as React.MutableRefObject<ReactQuill>

  const handleVideoPick = e => {
    setFile(e.target.files[0])
    const videoUrl = URL.createObjectURL(e.target.files[0])
    setObjUrl(videoUrl)
  }

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: '1' }, { header: '2' }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      imageDropAndPaste: {
        handler: createImageHandler(quillRef, setProcessing),
      },
    }),
    []
  )

  const chooseNewProfilePicture = e => {
    e.preventDefault()
    resizeImage(e.target.files[0], canvasRef.current)
    setPostImage(canvasRef?.current.toDataURL())
  }

  const onSubmit = handleSubmit(async ({ introparagraph, title }) => {
    if (canvasRef?.current) {
      setProcessing(true)
      const body = JSON.stringify(quillRef.current.getEditor().getContents())
      const proContent = JSON.stringify(
        quillRef.current.getEditor().getContents()
      )
      const fileUrl = await uploadImage(canvasRef?.current, 'upload-post')

      const variables = {
        thumbnail: fileUrl,
        title,
        paragraph: introparagraph,
        body,
      }

      if (includeProContent) {
        const response = await fetch(`${SERVERLESS}/upload-pro-content-video`, {
          body: '',
          method: 'post',
          headers: {
            authorization: localStorage.getItem('token'),
          },
        }).then(res => res.json())

        const uploadedFile = await fetch(response.url, {
          method: 'put',
          body: file,
          headers: {
            ContentType: 'video/mp4',
          },
          redirect: 'follow',
        }).catch(e => {
          setProcessing(false)
        })

        variables['proContent'] = proContent
        variables['videoUrl'] = response.file
      }

      createPost({
        variables,
      }).then(res => {
        console.log(res)
        setProcessing(false)
      })

      reset()
    }
  })

  return (
    <div className=' px-24'>
      <canvas className='rounded' width='160' height='128' ref={canvasRef} />
      {!postImage ? (
        <Button
          variant='contained'
          component='label'
          onChange={chooseNewProfilePicture}
        >
          Select a Picture for your Post
          <input type='file' style={{ display: 'none' }} />
        </Button>
      ) : (
        <Button
          variant='contained'
          component='label'
          onClick={() => {
            const canvas = canvasRef?.current
            if (canvas) {
              canvas?.getContext('2d')?.clearRect(0, 0, 160, 128)
              setPostImage('')
            }
          }}
        >
          Remove
        </Button>
      )}

      <form onSubmit={onSubmit}>
        <Controller
          name='title'
          render={({ field }) => (
            <TextField fullWidth label='Title' {...field} />
          )}
          control={control}
        />
        <div className='py-8'>
          <Controller
            name='introparagraph'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                rows={3}
                multiline={true}
                variant='outlined'
                label='Introparagraph'
              />
            )}
          />
        </div>
        <ReactQuill
          className='border-gray-500 rounded border bg-gray-700'
          placeholder='Create a beautiful new Get PSYCHED!'
          modules={modules}
          value={post}
          onChange={setPost}
          ref={quillRef}
        />

        <div className='flex justify-between'>
          <div className='text-lg tracking-wider p-4'>
            Do you wanna include pro content?
          </div>
          <div>
            <Checkbox
              aria-label='Include Pro Content?'
              defaultChecked
              color='default'
              checked={includeProContent}
              onChange={() => {
                setIncludeProContent(!includeProContent)
              }}
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
        </div>

        <div
          className={`w-full relative rounded shadow-2xl bg-gray-700 border-blue-400 border-solid border-2 bg-opacity-25 pt-12 ${
            includeProContent ? '' : 'opacity-50'
          }`}
        >
          <h1 className='absolute top-0 left-0 bg-gray-700 p-2 w-full text-lg font-semibold'>
            <span className='text-blue-400'>PRO</span>
            <span className='text-white'>CONTENT</span>
          </h1>
          <ReactQuill
            placeholder='Add Pro Content Here!'
            readOnly={!includeProContent}
            modules={modules}
            value={proContent}
            onChange={setProContent}
            ref={proRef}
          />
        </div>

        <div>
          {objUrl ? (
            <div className='relative rounded shadow-2xl bg-gray-700 border-blue-400 border-solid border-2 bg-opacity-25 w-full p-4 my-16'>
              <div className='absolute right-0 top-0 z-50 p-8'>
                <Button
                  color='secondary'
                  variant='contained'
                  onClick={() => {
                    setObjUrl(null)
                    setFile(null)
                    inputFieldRef.current.value = ''
                  }}
                  disabled={!!!objUrl || processing}
                >
                  <ClearIcon />
                </Button>
              </div>
              <video height={720} width={1280} src={objUrl} controls />
            </div>
          ) : (
            // <form className='mx-auto py-12'>

            <div className='flex flex-row justify-between rounded shadow-2xl bg-gray-700 border-blue-400 border-solid border-2 bg-opacity-25 w-full h-40 my-16'>
              <Button
                disabled={!includeProContent}
                onChange={handleVideoPick}
                size='large'
                fullWidth
                component='label'
              >
                Upload{' '}
                <span
                  className={`text-blue-400 ${
                    !includeProContent ? 'opacity-50' : ''
                  }`}
                >
                  PRO
                </span>
                <span>VIDEO</span>
                <input
                  accept='.mp4'
                  ref={inputFieldRef}
                  hidden
                  name='youtubeurl'
                  type='file'
                />
              </Button>
            </div>
          )}
        </div>

        <Button
          fullWidth
          variant='outlined'
          type='submit'
          disabled={processing || post.length < 25}
        >
          {processing ? 'Processing...' : 'Create New Post'}
        </Button>
      </form>
    </div>
  )
}

export default NewPost
