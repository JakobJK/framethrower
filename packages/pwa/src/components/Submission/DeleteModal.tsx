import * as React from 'react'
import Button from '../../elements/Button'
import { withRouter } from 'react-router-dom'
import {
  useDeleteOwnSubmissionMutation,
  GetAllAnimationDocument,
} from '../../graphql/generated/hooks'

const { useState } = React

const DeleteModal = ({ submissionId, setShowModal, history }) => {
  const [processing, setProcessing] = useState(false)
  const [deleteSubmission] = useDeleteOwnSubmissionMutation()

  const handleDelete = () => {
    setProcessing(true)
    deleteSubmission({
      variables: { submissionId },
      refetchQueries: [
        {
          query: GetAllAnimationDocument,
          variables: {
            offset: 0,
          },
        },
      ],
    })
      .then(e => {
        setProcessing(false)
        history.replace('/')
        setShowModal(false)
      })
      .catch(e => {
        setShowModal(false)
      })
  }

  return (
    <div className='p-8 text-lg'>
      <h1 className='text-lg font-semibold'> Delete current Submission?</h1>
      <p className='p-4'>Are you sure you want to the current submission?</p>
      <p className='p-4 text-sm'>
        Deleting the last submission within an animation will also delete the
        animation
      </p>
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

export default withRouter(DeleteModal)
