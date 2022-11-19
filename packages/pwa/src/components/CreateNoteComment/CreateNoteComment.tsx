import * as React from 'react'
import ReactQuill from 'react-quill'
import Button from '../../elements/Button'
import {
  GetOwnNoteDocument,
  useRegisterNoteCommentMutation,
  GetAllNoteCommentsDocument,
} from '../../graphql/generated/hooks'

const { useState, useRef, useMemo } = React

const CreateNoteComment = ({ noteId, submissionId }: { noteId: string }) => {
  const [processing, setProcessing] = useState(false)
  const [note, setNote] = useState('')

  const quillRef = useRef() as React.MutableRefObject<ReactQuill>

  const [createNoteComment] = useRegisterNoteCommentMutation()

  const modules = useMemo(
    () => ({
      toolbar: false,
      imageDropAndPaste: {
        handler: () => null,
      },
    }),
    []
  )

  return (
    <div className='py-2 px-4 mx-auto w-5/6'>
      <div className='border-gray-500 rounded border p-2'>
        <ReactQuill
          placeholder='Reply to this note'
          value={note}
          onChange={setNote}
          modules={modules}
          ref={quillRef}
        />
      </div>
      <div>
        <div className='w-3/5 mx-auto pt-2'>
          <Button
            size='small'
            fullWidth
            variant='contained'
            disabled={note.length < 1 || processing}
            onClick={() => {
              setProcessing(true)
              const delta = JSON.stringify(
                quillRef.current.getEditor().getContents()
              )
              createNoteComment({
                variables: {
                  body: delta,
                  noteId,
                },
                refetchQueries: () => [
                  {
                    query: GetOwnNoteDocument,
                    variables: {
                      submissionId,
                    },
                  },
                  {
                    query: GetAllNoteCommentsDocument,
                    variables: { noteId, offset: 0 },
                  },
                ],
              })
                .then(response => {
                  setNote('')
                  setProcessing(false)
                })
                .catch(e => {
                  console.log(e)
                })
            }}
          >
            {processing ? 'Processing...' : 'Submit Reply'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateNoteComment
