import React, { useState, useRef } from 'react'
import { useRegisterHeadlineMutation } from '../../graphql/generated/hooks'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import { resizeImage, uploadImage } from '../../util'

const NewHeadline = () => {
  const [createHeadline] = useRegisterHeadlineMutation()
  const [headline, setHeadline] = useState(false)
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>

  const handleSubmission = async (e: React.MouseEvent<HTMLLabelElement>) => {
    const fileUrl = await uploadImage(canvasRef?.current, 'upload-headline')
    createHeadline({
      variables: {
        link,
        title,
        thumbnail: fileUrl,
      },
    }).then(response => {
      console.log('done')
    })
  }

  return (
    <>
      <div>
        <h3>Create New Headline!</h3>
        <canvas className='rounded' width='200' height='200' ref={canvasRef} />
        {title && (
          <div className='p-4 bg-gray-900 font-bold text-center bg-opacity-50'>
            {title}
          </div>
        )}
        <div style={{ width: '200', height: '200', display: 'none' }}>
          <div className='absolute w-full' style={{ width: 240, height: 200 }}>
            {title}
          </div>
        </div>
      </div>
      <TextField
        label='Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <TextField
        label='Link'
        value={link}
        onChange={e => setLink(e.target.value)}
      />
      {!headline ? (
        <form>
          <Button
            variant='contained'
            component='label'
            onChange={(event: any) => {
              event.preventDefault()
              if (event?.target?.files?.[0]) {
                resizeImage(event?.target?.files[0], canvasRef?.current)
                setHeadline(true)
              }
            }}
          >
            Select Image for new Headline
            <input
              accept='.png,.jpg,.jpeg'
              type='file'
              style={{ display: 'none' }}
            />
          </Button>
        </form>
      ) : (
        <form>
          <Button
            variant='contained'
            component='label'
            onClick={handleSubmission}
          >
            Publish Headline!
          </Button>
          <Button
            variant='contained'
            component='label'
            onClick={() => {
              canvasRef?.current?.getContext('2d')?.clearRect(0, 0, 200, 200)
              setHeadline(false)
            }}
          >
            Remove
          </Button>
        </form>
      )}
    </>
  )
}

export default NewHeadline
