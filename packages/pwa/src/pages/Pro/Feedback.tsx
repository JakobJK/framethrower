import * as React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import FtAvatar from '../../elements/FtAvatar'
import { useGetAllOwnProFeedbackQuery } from '../../graphql/generated/hooks'
import FeedbackResponseLabel from '../../elements/FeedbackResponseLabel'
const Feedback = () => {
  const { loading, error, data } = useGetAllOwnProFeedbackQuery()

  if (error) return null
  if (loading) return null

  const feedback = data?.allVProOwnFeedbacks?.nodes ?? []

  return feedback.length === 0 ? (
    <div className='w-full flex justify-around h-24 text-gray-600 text-lg items-center'>
      <p>You have not receieved any feedback yet</p>
    </div>
  ) : (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='w-2/5 text-left'>Animation</th>
          <th className=' w-2/5 text-left'>Instructor</th>
          <th className='w-1/5 text-left'>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {feedback.map(x => {
          return (
            <tr key={x.id}>
              <td>
                <Link
                  className='hover:underline text-gray-400 hover:text-white '
                  to={`/animation/${x.animationId}/${
                    x.submissionId ? x.submissionId : x.latestSubmissionId
                  }`}
                >
                  {x.title}
                </Link>
              </td>
              <td>
                {x.username ? (
                  <div className='flex items-center'>
                    <Link to={`/profile/${x.username?.toLowerCase()}`}>
                      <FtAvatar src={x.avatar} />
                    </Link>
                    <Link
                      className='px-4 opacity-80 hover:opacity-100 text-orange-400 hover:underline'
                      to={`/profile/${x.username?.toLowerCase()}`}
                    >
                      {x.username}
                    </Link>
                  </div>
                ) : (
                  <span className='text-gray-700'>No Instructor Assigned</span>
                )}
              </td>
              <td>
                <FeedbackResponseLabel FeedbackResponse={x?.responseStatus} />
              </td>
              <td className='whitespace-no-wrap text-xs text-gray-500'>
                {moment(x.createdAt).format('MMM Do YY')}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Feedback
