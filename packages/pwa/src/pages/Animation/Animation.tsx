import * as React from 'react'
import AnimationPlayer from '../../components/AnimationPlayer'
import TitleComponent from '../../context/TitleComponent'
import Notes from './Notes'
import CreateNote from '../../components/CreateNote'
import SubmissionSelector from '../../components/SubmissionSelector'
import IsYou from '../../context/IsYou'
import Submission from '../../components/Submission'
import { useGetAnimationQuery } from '../../graphql/generated/hooks'
import Feedback from '../../components/Feedback'
import ScrollToTop from '../../util/ScrollToTop'
import OwnNote from './OwnNote'
import FourOhFour from '../../components/FourOhFour'

const Animation = (props: {
  animationId: string
  setSubmission: (val: string) => void
  submission: string
}) => {
  const { animationId, setSubmission, submission } = props

  const { loading, error, data } = useGetAnimationQuery({
    variables: { animationId, submissionId: submission },
  })

  if (loading) return null
  if (error) return <p>Error :(</p>

  const {
    videoUrl,
    startFrame,
    occupation,
    organisation,
    createdAt,
    updatedAt,
    endFrame,
    username,
    avatar,
    frameRate,
    profeedback,
    comment,
    audio,
    isLatest,
    title,
    profileId,
    role,
    instructor,
    premiumType,
    profeedbackStatus,
    currentProfileHasReplied,
  } = data?.allVAnimations?.nodes?.[0] ?? {}

  const user = {
    id: profileId,
    role,
    username,
    occupation,
    avatar,
    organisation,
    premiumType,
    isInstructor: instructor,
  }

  if (!videoUrl) return <FourOhFour />

  return (
    <>
      <TitleComponent title={title} />
      <ScrollToTop />
      <div className='flex items-start justify-center'>
        <div className='sticky top-0'>
          <div className='sticky top-0 items-start bg-gray-800 rounded-lg shadow-lg'>
            <div className='p-2'>
              <table className='min-w-full'>
                <tbody>
                  <tr>
                    <td className='w-1/4'>
                      <SubmissionSelector
                        setSubmission={setSubmission}
                        submission={submission}
                        animationId={animationId}
                      />
                    </td>
                    <td className='w-1/2 text-center text-lg'>{title}</td>
                    <td className='w-1/4'></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <AnimationPlayer
              frameRate={frameRate || ''}
              audio={audio || false}
              submission={submission}
              videoUrl={videoUrl || ''}
              minFrame={startFrame || 1}
              maxFrame={endFrame || 26}
            />
          </div>
        </div>
        <div className='flex-row w-full float-right max-w-xl px-4'>
          <div className='flex-col justify-between w-full'>
            <div className='w-full table'>
              <div>
                <Submission
                  user={user}
                  body={comment}
                  isLatest={isLatest}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  submissionId={submission}
                  profeedback={profeedback}
                  profeedbackStatus={profeedbackStatus}
                />
                {profeedback && <Feedback submissionId={submission} />}
                <OwnNote
                  submissionId={submission}
                  isLatest={isLatest ? true : false}
                />
                <Notes
                  profeedback={profeedback || false}
                  submissionId={submission}
                  isLatest={isLatest ? true : false}
                  currentProfileHasReplied={
                    currentProfileHasReplied ? true : false
                  }
                />
              </div>
            </div>
            {isLatest && !currentProfileHasReplied && (
              <>
                <IsYou id={profileId} flip={true}>
                  <CreateNote submissionId={submission} />
                </IsYou>
                <IsYou id={profileId} flip={false}>
                  <p className='p-8 text-center w-full font-light text-gray-500'>
                    You are not able to make notes on your own animation!
                  </p>
                </IsYou>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Animation
