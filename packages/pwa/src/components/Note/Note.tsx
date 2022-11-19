import * as React from 'react'
import ReactQuill, { Quill } from 'react-quill'
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import IconButton from '@material-ui/core/IconButton'
import Button from '../../elements/Button'
import CreateNoteComment from '../CreateNoteComment'
import NoteComments from '../NoteComments'
import DeleteModal from './DeleteModal'
import Dialog from '@material-ui/core/Dialog'
import WithPermission from '../../context/WithPermission'
import Header from './Header'
import { createImageHandler } from '../../util'
import Edited from '../../elements/Edited'
import { useUpdateOwnNoteMutation } from '../../graphql/generated/hooks'
import { VNote as VNoteType } from '../../graphql/generated/types'
import { IsYou } from '../../context'
import { StoreObject } from '@apollo/client'
import { TokenContext } from '../../context/Role'
const { useState, useRef, useMemo, useContext } = React

const Note = ({
  note: {
    body,
    profileByProfileId: user,
    createdAt,
    id,
    noteComments: replyCount,
    updatedAt: inUpdatedAt,
  },
  isLatest,
  submissionId,
}: {
  note: VNoteType
  isLatest: boolean
}) => {
  const { role } = useContext(TokenContext)
  const [defaultDelta, setDefaultDelta] = useState(JSON.parse(body || ''))
  const [processing, setProcessing] = useState(false)
  const [note, setNote] = useState(JSON.parse(body || ''))
  const quillRef = useRef() as React.MutableRefObject<ReactQuill>
  const [displayComment, setDisplayComment] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [updatedAt, setUpdatedAt] = useState(inUpdatedAt)
  const [showPopup, setShowPopup] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [updateOwnNote] = useUpdateOwnNoteMutation()

  const modules = useMemo(
    () => ({
      toolbar: false,
      imageDropAndPaste: {
        handler: createImageHandler(quillRef, setProcessing),
      },
    }),
    []
  )

  const handleSubmit = () => {
    setProcessing(true)
    if (note === defaultDelta) {
      setEditMode(false)
      setProcessing(false)
      return
    }
    setDefaultDelta(note)
    const delta = JSON.stringify(quillRef.current.getEditor().getContents())
    const text = quillRef.current.getEditor().getText()
    updateOwnNote({
      variables: {
        paragraph: text || '',
        body: delta || '',
        id: id || '',
      },
      update: (cache, { data }) => {
        const cacheId = cache.identify(data?.updateOwnNote?.note as StoreObject)
        cache.modify({
          id: cacheId,
          fields: {
            body(cachedBody) {
              return delta
            },
            updatedAt(cachedUpdatedAt) {
              return Date.now()
            },
          },
        })
      },
    }).then(res => {
      setUpdatedAt(res?.data?.updateOwnNote?.note?.updatedAt)
      setEditMode(false)
      setProcessing(false)
    })
  }

  return (
    <div className='w-full block bg-gray-600 bg-opacity-50 border-1 border-gray-400 rounded shadow p-2 mb-4 mx-auto'>
      <Header
        user={user}
        createdAt={createdAt}
        expanded={expanded}
        setExpanded={setExpanded}
      />

      {expanded && (
        <>
          <div className='text-left p-2'>
            <div
              className={editMode ? 'border-gray-500 rounded border p-2' : ''}
            >
              {note ? (
                <ReactQuill
                  readOnly={!editMode}
                  value={note}
                  ref={quillRef}
                  onChange={setNote}
                  modules={modules}
                />
              ) : (
                <p className='text-gray-500 w-full text-center p-4'>
                  {user.username} did not make a comment with his submission
                </p>
              )}
            </div>
          </div>
          <Edited createdAt={createdAt} updatedAt={updatedAt} />
          <div className='w-full flex justify-end'>
            {editMode && (
              <div className='flex justify-around w-full'>
                <Button
                  size='small'
                  onClick={() => {
                    setEditMode(false)
                    setNote(defaultDelta)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size='small'
                  disabled={processing}
                  onClick={handleSubmit}
                >
                  {processing ? 'Processing...' : 'Save Changes'}
                </Button>
              </div>
            )}
            <IsYou id={user?.id || ''} flip={false}>
              <Dialog
                open={showDeleteModal}
                onClose={(e: Event) => {
                  setShowDeleteModal(false)
                }}
              >
                <DeleteModal
                  setShowModal={setShowDeleteModal}
                  noteId={id}
                  submissionId={submissionId}
                />
              </Dialog>
              <div className='relative'>
                {showPopup && (
                  <ClickAwayListener
                    onClickAway={() => {
                      setShowPopup(false)
                    }}
                  >
                    <div className='absolute bottom-0 right-0 p-4'>
                      <ul className='bg-gray-600 w-full rounded overflow-hidden shadow'>
                        <li className='w-full'>
                          <Button
                            fullWidth
                            className='text-xs whitespace-no-wrap w-full'
                            size='small'
                            onClick={() => {
                              setEditMode(true)
                              setShowPopup(false)
                            }}
                            style={{ justifyContent: 'flex-start' }}
                          >
                            Edit Note
                          </Button>
                        </li>
                        <li>
                          <Button
                            fullWidth
                            size='small'
                            className='text-xs whitespace-no-wrap w-full'
                            style={{ justifyContent: 'flex-start' }}
                            onClick={() => {
                              setShowDeleteModal(true)
                            }}
                          >
                            Delete Note
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </ClickAwayListener>
                )}
              </div>
              <IconButton size='small' onClick={() => setShowPopup(true)}>
                <MoreHorizIcon />
              </IconButton>
            </IsYou>
            <IsYou id={user?.id || ''} flip={true}>
              <IconButton disabled={true} size='small'>
                <MoreHorizIcon />
              </IconButton>
            </IsYou>
          </div>
          <div className='bg-gray-600 bg-opacity-60 rounded-sm overflow-hidden mt-2'>
            <Button
              fullWidth
              onMouseDown={e => e.preventDefault()}
              disabled={
                (replyCount < 1 && role === 'FRAMETHROWER_INACTIVE') ||
                (replyCount < 1 && role === 'FRAMETHROWER_ANONYMOUS') ||
                (replyCount < 1 && role === 'FRAMETHROWER_BANNED')
              }
              size='small'
              onClick={() => {
                setDisplayComment(!displayComment)
              }}
            >
              <div className='px-4 w-full'>
                <span className='text-xs pr-4 text-left'>
                  {displayComment ? '▼' : '▶'}
                </span>
                <span>{`Comments (${replyCount})`}</span>
              </div>
            </Button>
          </div>
          {displayComment && replyCount > 0 && <NoteComments id={id || ''} />}
          {displayComment && (
            <WithPermission permission='loggedIn'>
              <CreateNoteComment
                noteId={id || ''}
                submissionId={submissionId}
              />
            </WithPermission>
          )}
        </>
      )}
    </div>
  )
}

export default Note
