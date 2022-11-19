import * as React from 'react'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import moment from 'moment'
import FtAvatar from '../../elements/FtAvatar'
import Button from '../../elements/Button'
import poolEmpty from '../../static/poolEmpty.png'
import {
  useGetAllPoolQuery,
  GetClaimedPendingFeedbackDocument,
  GetAllPoolDocument,
  useClaimFeedbackMutation,
} from '../../graphql/generated/hooks'

const { useState } = React

const Pool = () => {
  const [processing, setProcessing] = useState(false)
  const { loading, error, data } = useGetAllPoolQuery({
    variables: { offset: 0 },
  })
  const [claimFeedback] = useClaimFeedbackMutation()

  const claimTheFeedback = (feedbackRequestId, submissionId) => {
    setProcessing(true)

    //TODO: Avoid using Refetch Queries! Manipulate the cache instead!
    claimFeedback({
      variables: {
        feedbackRequestId,
        submissionId,
      },
      refetchQueries: () => [
        {
          query: GetAllPoolDocument,
          variables: { offset: 0 },
        },
        {
          query: GetClaimedPendingFeedbackDocument,
        },
      ],
    }).then(response => {
      setProcessing(false)
    })
  }

  if (loading) return null
  if (error) return <p>Error :(</p>

  const { allVInstructorPools, currentInstructor: ci } = data

  const col = chroma.scale(['#339900', '#EED202', '#cc3300'])

  const animations = (allVInstructorPools?.nodes ?? []).map((x, i) => {
    const difference = moment(x.createdAt)
      .add(24, 'hour')
      .diff(moment())
    const duration = moment.duration(difference)
    const hours = duration.hours(),
      mins = duration.minutes()

    const base = col(
      Number(
        1440 + moment().diff(moment(x.createdAt).add(24, 'hours'), 'minutes')
      ) / 1440
    )

    return (
      <tr
        key={`key_${x.id}`}
        style={{ backgroundColor: base.alpha(0.6).hex() }}
      >
        <td className='p-2 w-1/12'>
          <div className='flex justify-center'>
            <Link to={`/profile/${x.username.toLowerCase()}`}>
              <FtAvatar src={x.avatar} />
            </Link>
          </div>
        </td>
        <td className='w-2/12'>
          <Link to={`/profile/${x.username.toLowerCase()}`}>
            <p className='hover:underline'>{x.username}</p>
          </Link>
        </td>
        <td className='w-3/12'>
          <Link to={`/animation/${x.animationId}/${x.submissionId}`}>
            <p className='hover:underline'>{x.title}</p>
          </Link>
        </td>
        <td className='w-3/12'>
          <p>{x.shortComment}</p>
        </td>
        <td className='2/12 text-right'>
          <span>
            {hours > 0 || mins > 0 ? `${hours} : ${mins}` : 'URGENT!'}
          </span>
        </td>
        <td className='p-2  w-1/12'>
          <Button
            disabled={ci.isTilted || ci.currentlyResponding || processing}
            size='small'
            variant='outlined'
            onClick={() => claimTheFeedback(x.id, x.submissionId)}
          >
            Claim
          </Button>
        </td>
      </tr>
    )
  })

  return (
    <div>
      {ci.currentlyResponding && (
        <div className='bg-green-700 text-white p-8 text-center rounded-lg mb-8 font-semibold'>
          You have claimed an animation to feedback. Head over to the{' '}
          <Link
            to={`/instructor/response`}
            className='hover:underline hover:text-white text-lg text-gray-200'
          >
            Submit Feedback
          </Link>{' '}
          tab to upload your video feedback!
        </div>
      )}

      {ci.isTilted && (
        <div className='bg-red-600 font-semibold text-white p-8 text-center rounded-sm mb-8'>
          You are currently not able to claim a new animation from the pool.
        </div>
      )}

      {!animations.length && (
        <div className='p-12 w-full'>
          <div className='flex flex-col items-center text-xl font-semibold text-gray-500'>
            <p className='p-2'>The pool is currently empty.</p>
            <div>
              <img className='text-center' src={poolEmpty} />
            </div>
          </div>
        </div>
      )}
      {animations.length > 0 && (
        <table className='w-full'>
          <thead>
            <tr>
              <th></th>
              <th className='text-left'>Username</th>
              <th className='text-left'>Title</th>
              <th className='text-left'>Comment</th>
              <th className='text-right'>Time left</th>
            </tr>
          </thead>

          <tbody>{animations}</tbody>
        </table>
      )}
    </div>
  )
}

export default Pool
