import * as React from 'react'
import ReactQuill, { Quill } from 'react-quill'
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)
import gql from 'graphql-tag'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Link } from 'react-router-dom'
import Button from '../../elements/Button'
import { useRegisterNoteMutation } from '../../graphql/generated/hooks'
import WithPermission from '../../context/WithPermission'
import { createImageHandler } from '../../util'
import { GetOwnNoteDocument } from '../../graphql/generated/hooks'
const { useState, useRef, useMemo } = React

const CreateNote = ({ submissionId }: { submissionId: string }) => {
  const quillRef = useRef() as React.MutableRefObject<ReactQuill>
  const [processing, setProcessing] = useState(false)
  const [posted, setPosted] = useState(false)
  const [note, setNote] = useState<ReactQuill.Value>('')
  const [postNote] = useRegisterNoteMutation()
  const modules = useMemo(
    () => ({
      toolbar: false,
      imageDropAndPaste: {
        handler: createImageHandler(quillRef, setProcessing),
      },
    }),
    []
  )

  return posted ? null : (
    <>
      <WithPermission permission='active'>
        <div>
          <div className='border-gray-500 rounded border px-2 py-4'>
            <ReactQuill
              placeholder='Write some great feedback ...'
              modules={modules}
              value={note}
              ref={quillRef}
              onChange={setNote}
            />

            {processing && <LinearProgress />}
          </div>
          <div className='py-2'>
            <Button
              disabled={note.length < 10 || processing}
              fullWidth
              variant='contained'
              onClick={() => {
                setProcessing(true)
                const delta = JSON.stringify(
                  quillRef.current.getEditor().getContents()
                )
                const paragraph = quillRef.current
                  .getEditor()
                  .getText()
                  .substring(0, 198) as string

                postNote({
                  variables: {
                    body: delta,
                    paragraph,
                    submissionId,
                  },
                  refetchQueries: [
                    {
                      query: GetOwnNoteDocument,
                      variables: {
                        submissionId,
                      },
                    },
                  ],
                  update(cache) {
                    cache.modify({
                      fields: {
                        allVOwnNotes: (allVOwnNotes, { readField }) => {
                          const newObj = { ...allVOwnNotes }
                          const newNoteRef = cache.writeFragment({
                            data: {
                              __typename: 'VOwnNote',
                              id: '0000000000000000',
                              body: delta,
                              submissionId,
                            },
                            fragment: gql`
                              fragment NewNote on allVOwnNotes {
                                id
                                body
                                submissionId
                              }
                            `,
                          })
                          const newNotes = [...allVOwnNotes.nodes, newNoteRef]
                          newObj.nodes = newNotes
                          return newObj
                        },
                      },
                    })
                  },
                }).then(response => {
                  setProcessing(false)
                  setPosted(true)
                })
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </WithPermission>
      <WithPermission permission='inactive'>
        <div className='p-8 bg-gray-800 bg-opacity-25'>
          <h1 className='font-semibold text-lg px-4'>Write a note ?</h1>
          <p className='py-4'>
            {'Your account is currently '}
            <span className='text-red-600'>Inactive</span>
            {`. You need to submit
            your first animation in order to activate your account! Check out `}
            <Link
              className='hover:underline font-semibold text-gray-400 hover:text-white'
              to='/gettingstarted'
            >
              Getting Started
            </Link>
            {' for instructions!'}
          </p>
        </div>
      </WithPermission>
      <WithPermission permission='notLoggedIn'>
        <div className='p-8 bg-gray-900 bg-opacity-25'>
          <h1 className='font-semibold text-lg px-4'>Write a note?</h1>
          <p className='py-4'>
            {`You need to be an active member of Framethrower in order to comment.
            Feel free to `}
            <Link
              className='hover:underline font-semibold text-gray-400 hover:text-white'
              to='/login'
            >
              Login
            </Link>
            {` or `}
            <Link
              className='hover:underline font-semibold text-gray-400 hover:text-white'
              to='/signup'
            >
              Create a New Account!
            </Link>
          </p>
        </div>
      </WithPermission>
    </>
  )
}

export default CreateNote
