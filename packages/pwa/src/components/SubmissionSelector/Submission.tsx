import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Submission as SubmissionType } from '../../graphql/generated/types'
import ReactQuill from 'react-quill'
import moment from 'moment'

const Submission = (
  props: RouteComponentProps & {
    subs: SubmissionType
    animationId: string
    setSubmission: (val: string) => void
    setOpen: (val: boolean) => void
    version: string
  }
) => {
  const {
    subs: {
      id: submissionId,
      startFrame,
      endFrame,
      createdAt,
      shortComment,
      hasProFeedback,
      thumbnailUrl,
    },
    animationId,
    setSubmission,
    setOpen,
    version,
    history,
  } = props

  const onSubmit = () => {
    setSubmission(submissionId)
    history.push(`/animation/${animationId}/${submissionId}`)
    setOpen(false)
  }

  return (
    <div className='py-2 pl-2'>
      <div
        className='h-24 flex cursor-pointer hover:bg-gray-700 hover:bg-opacity-25'
        onClick={onSubmit}
        key={`key_${submissionId}`}
      >
        <img
          style={{ width: '10.667rem', height: '6rem' }}
          src={`${STORAGE}/${thumbnailUrl}`}
        />
        <div className='w-full h-full px-2'>
          <div className='w-full h-full flex justify-between flex-col'>
            <div className='flex justify-between'>
              <div className='text-xs font-bold'>Vers. {version}</div>
              <div className='font-light text-gray-500'>
                {moment(createdAt).format('MMM Do YYYY')}
              </div>
            </div>
            <div>{shortComment}</div>
            <div>
              <div className='flex justify-between'>
                <span className='font-light text-opacity-75'>
                  {startFrame} - {endFrame}
                </span>
                {hasProFeedback && (
                  <div className='text-xs font-semibold'>
                    <span className='text-blue-400'>PRO</span>
                    <span className='text-white'>FEEDBACK</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Submission)
