import * as React from 'react'
import ReactQuill from 'react-quill'
import Button from '../../elements/Button'
import { useRegisterNewsCommentMutation } from '../../graphql/generated/hooks'

const { useState, useRef, useMemo } = React

const PostComment = ({ newsId }: { newsId: string }) => {
  const [processing, setProcessing] = useState(false)
  const [note, setNote] = useState('')

  const quillRef = useRef() as React.MutableRefObject<ReactQuill>
  const [createNewsComment] = useRegisterNewsCommentMutation()

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
    <>
      <div className='border-gray-500 rounded border p-2 my-2'>
        <ReactQuill
          placeholder='Reply to Get Psyched Post!!'
          onChange={setNote}
          modules={modules}
          value={note}
          ref={quillRef}
        />
      </div>
      <Button
        size='small'
        disabled={note.length < 1 || processing}
        variant='outlined'
        onClick={() => {
          setProcessing(true)
          const delta = JSON.stringify(
            quillRef.current.getEditor().getContents()
          )
          createNewsComment({
            variables: {
              body: delta,
              newsId,
            },
          })
            .then(response => {
              setNote('')
              setProcessing(false)
            })
            .catch(e => {
              setProcessing(false)
              console.log(e)
            })
        }}
        fullWidth
      >
        Submit
      </Button>
    </>
  )
}
export default PostComment
