import React, { useState, useRef } from 'react'
import Button from '../../elements/Button'
import { useRegisterNewBannerMutation } from '../../graphql/generated/hooks'
import { resizeImage, uploadImage } from '../../util'
import SuccessMessaage from '../../elements/SuccessMessage'

const ChangeBanner = ({ banner }) => {
  const [registerNewBanner] = useRegisterNewBannerMutation()
  const [processeing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [newBanner, setNewBanner] = useState<string>('')
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>

  interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget
  }

  const handleSubmission = async e => {
    setProcessing(true)
    const fileUrl = await uploadImage(canvasRef.current, 'upload-banner')
    registerNewBanner({
      variables: {
        banner: fileUrl,
      },
    }).then(() => {
      setSucceeded(true)
      setProcessing(false)
    })
  }

  return (
    <>
      <canvas
        className={`rounded ${newBanner ? '' : 'hidden'}`}
        width={1040}
        height={240}
        ref={canvasRef}
      />
      {banner && !newBanner && (
        <img
          aria-label='banner'
          className='rounded'
          src={`${STORAGE}/${banner}`}
        />
      )}
      <div className='flex justify-around px-8 py-4'>
        {!newBanner ? (
          <Button
            variant='contained'
            component='label'
            disabled={processeing}
            onChange={(e: HTMLInputEvent) => {
              setProcessing(true)
              resizeImage(e.target.files[0], canvasRef.current)
              setNewBanner(canvasRef.current.toDataURL())
              setProcessing(false)
            }}
          >
            Select Banner
            <input
              accept='.png,.jpg,.jpeg'
              type='file'
              style={{ display: 'none' }}
            />
          </Button>
        ) : (
          <>
            <form>
              <Button
                variant='contained'
                component='label'
                disabled={processeing}
                onClick={handleSubmission}
              >
                Save Your New Banner
              </Button>
              <Button
                variant='contained'
                component='label'
                onClick={() => {
                  canvasRef.current.getContext('2d').clearRect(0, 0, 1040, 240)
                  setNewBanner('')
                }}
              >
                Discard New Banner
              </Button>
            </form>
          </>
        )}
      </div>
      {succeeded && <SuccessMessaage message='Banner has been updated' />}
    </>
  )
}

export default ChangeBanner
