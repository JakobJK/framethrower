import React, { useState, useRef } from 'react'
import Button from '../../elements/Button'
const avatar_anon = require('../../static/anonAvatar.png')
import SuccessMessaage from '../../elements/SuccessMessage'

import { useRegisterAvatarMutation } from '../../graphql/generated/hooks'
import { resizeImage, uploadImage } from '../../util'

const ChangeAvatar = ({ avatar }) => {
  const [registerNewAvatar] = useRegisterAvatarMutation()
  const [processeing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [newAvatar, setNewAvatar] = useState('')
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>

  const chooseNewAvatar = e => {
    e.preventDefault()
    resizeImage(e.target.files[0], canvasRef.current)
    setNewAvatar(canvasRef?.current.toDataURL())
  }

  const handleSubmission = async e => {
    setProcessing(true)
    const fileUrl = await uploadImage(canvasRef.current, 'upload-avatar')
    registerNewAvatar({
      variables: {
        avatar: fileUrl,
      },
    }).then(() => {
      setSucceeded(true)
      setProcessing(false)
    })
  }

  return (
    <div className='flex justify-center'>
      <div className='relative'>
        <div className='absolute flex justify-end'>
          <Button
            size='small'
            variant='outlined'
            disabled={!newAvatar}
            component='label'
            onClick={() => {
              setNewAvatar('')
            }}
          >
            X
          </Button>
        </div>

        {!newAvatar && (
          <img
            width='125'
            height='125'
            className='rounded-full border-8 border-gray-700 mx-auto my-8'
            src={avatar ? `${STORAGE}/${avatar}` : avatar_anon}
          />
        )}
        <canvas
          className={
            newAvatar
              ? 'rounded-full border-8 border-gray-700 mx-auto my-8'
              : 'hidden'
          }
          width='125'
          height='125'
          ref={canvasRef}
        />
        {!newAvatar ? (
          <Button
            variant='contained'
            component='label'
            onChange={chooseNewAvatar}
          >
            Select Profile Picture
            <input
              type='file'
              accept='.png,.jpg,.jpeg'
              style={{ display: 'none' }}
            />
          </Button>
        ) : (
          <>
            <Button
              variant='contained'
              component='label'
              onClick={handleSubmission}
              disabled={processeing}
            >
              {processeing ? 'Processing...' : 'Save Your New Avatar'}
            </Button>
            {succeeded && <SuccessMessaage message='Avatar has been updated' />}
          </>
        )}
      </div>
    </div>
  )
}

export default ChangeAvatar
