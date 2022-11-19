import * as React from 'react'

import ReactQuill, { Quill } from 'react-quill'
import { withRouter } from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)
import { createImageHandler } from '../../util'

import HlsPlayer from '../../components/HlsPlayer'
import moment from 'moment'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import IconButton from '@material-ui/core/IconButton'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import { IsAdmin } from '../../context'
import Edited from '../../elements/Edited'

import {
  useAdminUpdatePostMutation,
  GetPostBySlugDocument,
} from '../../graphql/generated/hooks'
const { useState, useRef, useMemo } = React

const PostBody = props => {
  const {
    body,
    id,
    createdAt,
    updatedAt,
    title,
    match,
    history,
    proPost,
    videoUrl,
    proContent,
  } = props

  const { slug } = match.params

  const [processing, setProcessing] = useState(false)
  const [workingTitle, setWorkingTitle] = useState(title || '')
  const [showPopup, setShowPopup] = useState(false)
  const [post, setPost] = useState(body ? JSON.parse(body) : '')
  const [newProPost, setNewProPost] = useState(
    proPost ? JSON.parse(proPost) : ''
  )
  const [editMode, setEditMode] = useState(false)
  const quillRef = useRef() as React.MutableRefObject<ReactQuill>

  const [updatePost] = useAdminUpdatePostMutation()

  const editModeModules = useMemo(
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

  const readOnlyModules = useMemo(
    () => ({
      toolbar: false,
    }),
    []
  )

  const handleSubmit = () => {
    setProcessing(true)
    const body = JSON.stringify(quillRef.current.getEditor().getContents())
    updatePost({
      variables: {
        id,
        body,
        title: workingTitle,
      },
      refetchQueries: () => [
        { query: GetPostBySlugDocument, variables: { slug } },
      ],
    }).then(res => {
      const newSlug = res.data?.adminUpdatePost?.news?.slug ?? ''
      if (newSlug !== slug) {
        history.replace(`/post/${newSlug}`)
      }
      setEditMode(false)
      setProcessing(false)
    })
  }

  return (
    <>
      <div className='flex justify-between px-16 py-8'>
        {editMode ? (
          <TextField
            fullWidth
            onChange={e => setWorkingTitle(e.target.value)}
            value={workingTitle}
          />
        ) : (
          <h1 className='text-2xl'>{title}</h1>
        )}
        <span className='font-light'>
          {moment(createdAt).format('MMM Do - YYYY')}
        </span>
      </div>
      <div className='flex justify-end px-16 relative'>
        <IsAdmin flip={false}>
          <IconButton
            disabled={false}
            size='small'
            onClick={() => setShowPopup(true)}
          >
            <MoreHorizIcon />
          </IconButton>
        </IsAdmin>
        {showPopup && (
          <ClickAwayListener
            onClickAway={() => {
              setShowPopup(false)
            }}
          >
            <div className='absolute  z-50'>
              <ul className='bg-gray-600 my-12 w-full rounded overflow-hidden shadow'>
                <li className='w-full'>
                  <Button
                    fullWidth
                    className='text-xs whitespace-no-wrap w-full'
                    size='small'
                    onClick={() => {
                      setShowPopup(false)
                      setEditMode(true)
                    }}
                    style={{ justifyContent: 'flex-start' }}
                  >
                    Edit Post
                  </Button>
                </li>
              </ul>
            </div>
          </ClickAwayListener>
        )}
      </div>
      <div
        className={
          editMode ? 'border-gray-500 rounded border pb-8 px-8' : 'pb-8 px-8'
        }
      >
        <div className='px-8'>
          <ReactQuill
            readOnly={!editMode}
            value={post}
            ref={quillRef}
            onChange={setPost}
            modules={editMode ? editModeModules : readOnlyModules}
          />
        </div>

        {proContent && (
          <div className='w-full relative rounded shadow-2xl bg-gray-700 border-blue-400 border-solid border-2 bg-opacity-25 px-8 py-4 my-4'>
            <h1 className='absolute top-0 left-0 bg-gray-700 p-2 w-full text-lg font-semibold'>
              <span className='text-blue-400'>PRO</span>
              <span className='text-white'>CONTENT</span>
            </h1>
            {proPost ? (
              <>
                <ReactQuill
                  readOnly={!editMode}
                  value={newProPost}
                  ref={quillRef}
                  onChange={setNewProPost}
                  modules={editMode ? editModeModules : readOnlyModules}
                />{' '}
                {videoUrl && (
                  <HlsPlayer
                    className='shadow-vignette'
                    autoplay={false}
                    url={`https://stream.mux.com/${videoUrl}.m3u8`}
                    controls={true}
                  />
                )}
              </>
            ) : (
              <div className='text-center w-full px-16 pb-12 pt-20 text-lg text-gray-500'>
                You do not have access to this content
              </div>
            )}
          </div>
        )}

        <Edited createdAt={createdAt} updatedAt={updatedAt} />
      </div>
      {editMode && (
        <div className='flex justify-between p-4'>
          <Button
            fullWidth
            variant='outlined'
            onClick={() => {
              setPost(JSON.parse(body || ''))
              setWorkingTitle(title)
              setEditMode(false)
            }}
          >
            Cancel
          </Button>
          <Button fullWidth variant='outlined' onClick={handleSubmit}>
            {processing ? 'Processing...' : 'Save Changes'}
          </Button>
        </div>
      )}
    </>
  )
}

export default withRouter(PostBody)
