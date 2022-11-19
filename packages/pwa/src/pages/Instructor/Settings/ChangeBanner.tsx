import * as React from 'react'

import Button from '../../../elements/Button'
import { Link } from 'react-router-dom'
import SuccessMessaage from '../../../elements/SuccessMessage'
import { resizeImage, uploadImage } from '../../../util'

import {
  useInstructorRegisterBannerMutation,
  GetAllVInstructorSettingsDocument,
} from '../../../graphql/generated/hooks'
const { useState, useRef } = React

const ChangeBanner = ({ banner }) => {
  const [newBanner, setNewBanner] = useState('')
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>
  const [processeing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [registerBanner] = useInstructorRegisterBannerMutation()
  const chooseNewBanner = e => {
    e.preventDefault()
    resizeImage(e.target.files[0], canvasRef.current)
    setNewBanner(canvasRef?.current.toDataURL())
  }

  const handleSubmission = async e => {
    setProcessing(true)
    const fileUrl = await uploadImage(
      canvasRef.current,
      'upload-instructor-banner'
    )
    registerBanner({
      variables: {
        banner: fileUrl,
      },

      refetchQueries: () => [{ query: GetAllVInstructorSettingsDocument }],
    }).then(() => {
      setSucceeded(true)
      setProcessing(false)
    })
  }

  return (
    <div className='p-8'>
      <canvas
        className={newBanner ? '' : 'hidden'}
        width='896'
        height='256'
        ref={canvasRef}
      />

      <p className='p-2 tracking-wider'>
        Your banner will be displayed on the{' '}
        <Link
          to='/instructors'
          className='text-orange-400 font-semibold hover:underline'
        >
          Instructor
        </Link>{' '}
        page
      </p>

      <Button
        size='small'
        variant='outlined'
        disabled={!newBanner}
        component='label'
        onClick={() => {
          setNewBanner('')
        }}
      >
        X
      </Button>
      {!newBanner && (
        <img
          className='mx-auto my-8'
          src={banner ? `${STORAGE}/${banner}` : null}
        />
      )}

      {!newBanner ? (
        <Button
          variant='contained'
          component='label'
          onChange={chooseNewBanner}
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
            {processeing ? 'Processing...' : 'Save Your New Banner'}
          </Button>
          {succeeded && <SuccessMessaage message='Banner has been updated' />}
        </>
      )}
    </div>
  )
}

export default ChangeBanner
