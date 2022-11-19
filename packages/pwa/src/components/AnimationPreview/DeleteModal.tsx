import * as React from 'react'
import Button from '../../elements/Button'

import {
  useDeleteOwnAnimationMutation,
  GetAllAnimationDocument,
} from '../../graphql/generated/hooks'

const { useState } = React

const DeleteModal = ({ animation, setShowModal, offset }) => {
  const [processing, setProcessing] = useState(false)
  const [deleteAnimation] = useDeleteOwnAnimationMutation()

  const handleDelete = () => {
    setProcessing(true)
    deleteAnimation({
      variables: {
        animationId: animation.id,
      },
      refetchQueries: () => [
        { query: GetAllAnimationDocument, variables: { offset } },
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
      <h1 className='text-lg font-semibold'> Delete {animation.title}</h1>

      <p className='p-4'> Are you sure you want to delete your animation? </p>

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
