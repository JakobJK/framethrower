import * as React from 'react'
import Button from '../../elements/Button'
import ClearIcon from '@material-ui/icons/Clear'
import { useGetClaimedPendingFeedbackQuery } from '../../graphql/generated/hooks'
import AnimationPlayer from '../../components/AnimationPlayer'
const { useState, useRef } = React

const Submit = () => {
  const [objUrl, setObjUrl] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [uploadSuccessfull, setUploadSuccessfull] = useState(false)
  const [file, setFile] = useState(null)
  const [submissionFinish, setSubmissionFinish] = useState(false)
  const { loading, error, data } = useGetClaimedPendingFeedbackQuery()
  const inputFieldRef = useRef()
  const webcamStream = useRef()
  if (loading) return null
  if (error) return <p>Error :(</p>

  const { getClaimedPendingFeedback: fb } = data

  const handleVideoPick = e => {
    setFile(e.target.files[0])
    const videoUrl = URL.createObjectURL(e.target.files[0])
    setObjUrl(videoUrl)
  }

  const handleVideoSubmit = async e => {
    setProcessing(true)

    const response = await fetch(`${SERVERLESS}/upload-video`, {
      body: '',
      method: 'post',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    }).then(res => res.json())

    const uploadedFile = await fetch(response.url, {
      method: 'put',
      body: file,
      headers: {
        ContentType: 'video/mp4',
      },
      redirect: 'follow',
    })
      .then(() => {
        setUploadSuccessfull(true)
        setObjUrl(null)
        setFile(null)
        inputFieldRef.current.value = ''
        setProcessing(false)
      })
      .catch(e => {
        setProcessing(false)
      })
  }

  const submission =
    data?.getClaimedPendingFeedback?.submissionBySubmissionId ?? {}

  const animPreview = {
    submissionId: submission?.id ?? '',
    id: submission.animationId ?? '',
    shortComment: submission?.shortComment ?? '',
    thumbnailUrl: submission?.thumbnailUrl ?? '',
    updatedAt: submission?.updatedAt ?? '',
    startFrame: submission?.startFrame ?? '',
    endFrame: submission?.endFrame ?? '',
    minFrame: submission?.startFrame ?? '',
    maxFrame: submission?.endFrame ?? '',
    videoUrl: submission?.videoUrl ?? '',
    frameRate: submission?.frameRate ?? '',
    audio: submission?.audio ?? false,
    title: submission?.animationByAnimationId?.title ?? '',
    notes: submission?.notesBySubmissionId?.totalCount ?? 0,
    submissions:
      submission?.animationByAnimationId?.submissionsByAnimationId
        ?.totalCount ?? 0,
    profileByProfileId:
      submission?.animationByAnimationId?.profileByProfileId ?? {},
  }

  return (
    <div className='mx-auto'>
      {fb ? (
        <>
          <div className='flex'>
            <div
              style={{
                width: '1921px',
                height: '1081px',
                maxHeight: '1080px',
                maxWidth: '1920px',
              }}
              className='border-gray-400 border'
            >
              <div className='flex p-8 justify-center'>
                <div className=' relative  '>
                  <AnimationPlayer {...animPreview} />
                </div>
                <div className='flex flex-col w-full max-w-2xl'>
                  <div className='overflow-hidden relative max-w-2xl h-full p-4'>
                    <video
                      ref={webcamStream}
                      autoPlay
                      id='videoElement'
                      className='right-0 bottom-0 object-cover absolute min-h-full h-auto w-auto overflow-hidden'
                    />
                  </div>

                  <div className=' bg-gray-600 max-w-2xl'>
                    <Button
                      fullWidth
                      onClick={() => {
                        if (navigator.mediaDevices.getUserMedia) {
                          navigator.mediaDevices
                            .getUserMedia({
                              video: {
                                width: { min: 1280 },
                                height: { min: 720 },
                              },
                            })
                            .then(function(stream) {
                              webcamStream.current.srcObject = stream
                            })
                            .catch(function(e) {
                              console.log('Something went wrong! ', e)
                            })
                        }
                      }}
                    >
                      Active
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='p-4 max-w-4xl mx-auto flex relative justify-between items-center rounded shadow-2xl bg-gray-700 border-blue-400 border-solid border-2 bg-opacity-25'>
            {objUrl ? (
              <>
                <div className='absolute right-0 top-0 z-50 p-8'>
                  <Button
                    color='secondary'
                    variant='contained'
                    onClick={() => {
                      setObjUrl(null)
                      setFile(null)
                      inputFieldRef.current.value = ''
                    }}
                    disabled={!!!objUrl || processing}
                  >
                    <ClearIcon />
                  </Button>
                </div>
                <video height={720} width={1280} src={objUrl} controls />
              </>
            ) : (
              <form className='mx-auto py-12'>
                <Button
                  onChange={handleVideoPick}
                  size='large'
                  component='label'
                >
                  Submit Feedback
                  <input
                    accept='.mp4'
                    ref={inputFieldRef}
                    hidden
                    name='youtubeurl'
                    type='file'
                  />
                </Button>
              </form>
            )}
          </div>
          <br />
          {objUrl && (
            <div className='flex justify-between py-4 px-32'>
              <p className='w-full font-semibold bg-green-300 bg-opacity-40 text-gray-300 p-4'>
                Please verify the is what you expect before hitting submit! :)
              </p>
            </div>
          )}
          {uploadSuccessfull ? (
            <div className='w-full bg-green-600 text-white font-bold text-center'>
              File uploaded successfull!
              <br />
              We are now busy converting the file, for an optimal viewing
              experience for our animators! Thank you so much! When this is
              done, our webhook will notify our Discord Channel!
            </div>
          ) : (
            <div className='py-4 px-32 max-w-4xl mx-auto '>
              <Button
                variant='contained'
                fullWidth
                onClick={handleVideoSubmit}
                disabled={!!!objUrl || processing}
              >
                {processing ? 'Processing...' : 'Submit your feedback'}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className='p-12 max-w-4xl'>
          <p className='text-center text-xl font-semibold text-gray-500'>
            <p>You currently do not have claimed request pending feedback</p>
          </p>
        </div>
      )}
    </div>
  )
}

export default Submit
