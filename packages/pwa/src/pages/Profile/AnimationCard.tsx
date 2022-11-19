import * as React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import NoteIcon from '@material-ui/icons/Note'
import { Submission, Animation } from '../../graphql/generated/types'

const AnimationCard = (props: {
  submission: Submission
  animation: Animation
  submissionCount: number
  noteCount: number
}) => {
  const {
    submission: {
      thumbnailUrl,
      createdAt,
      id: submissionId,
      endFrame,
      startFrame,
    },
    animation: { title, id: animationId },
    submissionCount,
    noteCount,
  } = props

  return (
    <Link to={`/animation/${animationId}/${submissionId}`}>
      <div className='flex flex-col bg-gray-900 bg-opacity-25 rounded-sm shadow'>
        <div className='flex justify-between p-2'>
          <div className='font-bold'>{title}</div>
          <div className='font-light'>{moment(createdAt).format('L')}</div>
        </div>
        <div>
          <img className='w-64 h-36' src={`${STORAGE}/${thumbnailUrl}`} />
        </div>
        <div className='flex place-content-between px-2 pt-2'>
          <div className='flex justify-between w-full'>
            <div>Vers. {('0' + submissionCount).slice(-2)}</div>
            <div className='px-4'>
              <NoteIcon /> {noteCount} note{noteCount !== 1 && 's'}
            </div>
          </div>
        </div>
        <div className='flex justify-between p-2'>
          <div>Frame range:</div>
          <div> {startFrame + ' - ' + endFrame}</div>
        </div>
      </div>
    </Link>
  )
}

export default AnimationCard
