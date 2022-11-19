import * as React from 'react'
import Button from '../../elements/Button'
import {
  useDeleteOwnNoteMutation,
  GetOwnNoteDocument,
} from '../../graphql/generated/hooks'

const { useState } = React

const DeleteModal = ({ noteId, setShowModal, submissionId }) => {
  const [processing, setProcessing] = useState(false)
  const [deleteNote] = useDeleteOwnNoteMutation()

  const handleDelete = () => {
    setProcessing(true)
    deleteNote({
      variables: { id: noteId },
      refetchQueries: [
        {
          query: GetOwnNoteDocument,
          variables: { submissionId },
        },
      ],
    })
      .then(e => {
        setProcessing(false)
        setShowModal(false)
      })
      .catch(e => {
        setShowModal(false)
      })
  }

  return (
    <div className='p-8 text-lg'>
      <h1 className='text-lg font-semibold'> Delete Note?</h1>
      <p className='p-4'>Are you sure you want delete the note?</p>
      <div className='flex justify-between'>
        <Button className='w-1/2' onClick={handleDelete} disabled={processing}>
          Delete
        </Button>
        <Button
          className=' w-1/2'
          onClick={() => {
            setShowModal(false)
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default DeleteModal
