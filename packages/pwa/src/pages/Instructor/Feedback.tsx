import * as React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllFeedbackQuery } from '../../graphql/generated/hooks'
import FtAvatar from '../../elements/FtAvatar'
import moment from 'moment'
import FeedbackResponseLabel from '../../elements/FeedbackResponseLabel'

const Feedback = () => {
  const { data, error, loading } = useGetAllFeedbackQuery({
    variables: { offset: 0 },
  })

  if (loading) return null
  if (error) return <p>Error :(</p>

  const totalCount = data?.allVInstructorFeedbacks?.totalCount ?? 0
  const feedbacks = (data?.allVInstructorFeedbacks?.nodes ?? []).map(x => {
    return (
      <tr key={x.id}>
        <td className='p-2 w-1/5'>
          <Link to={`/profile/${x.username.toLowerCase()}`}>
            <FtAvatar src={x.avatar} />
          </Link>
        </td>
        <td className='p-2 w-1/5'>
          <Link to={`/animation/${x.animationId}/${x.submissionId}`}>
            <span className='hover:underline'>{x.title}</span>
          </Link>
        </td>
        <td className='p-2 w-1/5'>{x.shortComment}</td>
        <td className='p-2 w-1/5 text-right'>
          {moment(x.createdAt).format('MMM Do YY')}
        </td>
        <td className='p-2 w-1/5 text-right'>
          <FeedbackResponseLabel FeedbackResponse={x.status} />
        </td>
      </tr>
    )
  })

  // TODO: We need to add pagination here!

  return totalCount > 0 ? (
    <div className='w-full'>
      <div className='p-4 tracking-wider'>
        You have currently made{' '}
        <span className='underline text-lg'>{totalCount}</span> feedback
        response
        {totalCount !== 1 && 's'}
      </div>
      <table className='min-w-full spacing w-full'>
        <thead>
          <tr>
            <th className='text-left'></th>
            <th className='text-left'>Animation</th>
            <th className='text-left'>Comment</th>
            <th className='text-right'>Date</th>
            <th className='text-right'>Status</th>
          </tr>
        </thead>
        {feedbacks}
      </table>
    </div>
  ) : (
    <div className='p-12 w-full'>
      <p className='text-center text-xl font-semibold text-gray-500'>
        You haven't provided any feedback yet.
      </p>
    </div>
  )
}

export default Feedback
