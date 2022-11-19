import * as React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import ReactQuill from 'react-quill'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import IconButton from '@material-ui/core/IconButton'
import DeleteModal from './DeleteModal'
import Button from '../../elements/Button'
import Dialog from '@material-ui/core/Dialog'
import { StoreObject } from '@apollo/client'
import Header from './Header'
import { useUpdateOwnSubmissionCommentMutation } from '../../graphql/generated/hooks'

import { IsYou } from '../../context'
import Edited from '../../elements/Edited'

const { useState, useRef } = React

const Submission = ({
  body,
  isLatest,
  user,
  createdAt,
  updatedAt: inUpdatedAt,
  submissionId,
  profeedbackStatus,
  profeedback,
}) => {
  let noteStart

  try {
    noteStart = JSON.parse(body)
  } catch (e) {
    noteStart = body
  }

  const [defaultDelta, setDefaultDelta] = useState(noteStart)
  const [note, setNote] = useState(noteStart)
  const [editMode, setEditMode] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [updatedAt, setUpdatedAt] = useState(inUpdatedAt)
  const [showPopup, setShowPopup] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const quillRef = useRef() as React.MutableRefObject<ReactQuill>
  const [processing, setProcessing] = useState(false)

  const [updateOwnSubmissionComment] = useUpdateOwnSubmissionCommentMutation()

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

    updateOwnSubmissionComment({
      variables: {
        comment: delta || '',
        shortComment: text || '',
        id: submissionId || '',
      },
      update: (cache, { data }) => {
        const cacheId = cache.identify(
          data?.updateOwnSubmissionComment?.submission as StoreObject
        )
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
      setUpdatedAt(
        res?.data?.updateOwnSubmissionComment?.submission?.updatedAt &&
          Date.now()
      )
      setEditMode(false)
      setProcessing(false)
    })
  }

  return (
    <div className='w-full block bg-gray-700 bg-opacity-30 border-1 border-gray-400 rounded shadow p-2 mb-4 mx-auto'>
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
                  modules={{
                    toolbar: false,
                  }}
                />
              ) : (
                <p className='text-gray-500 w-full text-center p-4'>
                  {user.username} did not make a comment with his submission
                </p>
              )}
            </div>
          </div>
          <Edited createdAt={createdAt} updatedAt={updatedAt} />
          <div className='w-full flex justify-between items-center'>
            {!editMode && (
              <p className='opacity-50'>
                {profeedbackStatus === 'REQUESTED' && (
                  <>
                    <span className='text-blue-400 font-semibold'>PRO</span>
                    <span className='font-semibold'>FEEDBACK REQUESTED</span>
                  </>
                )}
              </p>
            )}
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
                  submissionId={submissionId}
                />
              </Dialog>
              <div className='relative w-full'>
                {showPopup && (
                  <ClickAwayListener
                    onClickAway={() => {
                      setShowPopup(false)
                    }}
                  >
                    <div className='absolute bottom-0 right-0 p-4'>
                      <ul className='bg-gray-600 w-full  rounded overflow-hidden shadow'>
                        <li>
                          <Button
                            disabled={!isLatest || profeedback}
                            fullWidth
                            className='text-xs whitespace-no-wrap w-full'
                            size='small'
                            style={{ justifyContent: 'flex-start' }}
                          >
                            <div>
                              <span>Request </span>
                              <span className='text-blue-400 font-semibold'>
                                {' '}
                                PRO
                              </span>
                              <span className='font-semibold'>FEEDBACK</span>
                            </div>
                          </Button>
                        </li>
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
                            Edit Comment
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
                            Delete Submission
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
        </>
      )}
    </div>
  )
}

export default Submission
