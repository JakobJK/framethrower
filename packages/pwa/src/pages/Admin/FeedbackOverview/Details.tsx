import * as React from 'react'
import { Link } from 'react-router-dom'
import FtAvatar from '../../../elements/FtAvatar'
import moment from 'moment'

import { useGetFeedbackMonthlyDetailsQuery } from '../../../graphql/generated/hooks'

import { VAdminFeedbackOverview } from '../../../graphql/generated/types'

const Details = ({
  variables,
}: {
  variables: { month: number; year: number; profileId: string }
}) => {
  const { loading, error, data } = useGetFeedbackMonthlyDetailsQuery({
    variables,
  })

  if (loading) return null
  if (error) return <p>Oh shit. Error</p>

  return (
    <tr>
      <td colSpan={4}>
        <table className='w-full box-border bg-gray-900 bg-opacity-25'>
          <tbody>
            {(
              data?.allVAdminFeedbackOverviews?.nodes ??
              ([] as Array<VAdminFeedbackOverview>)
            ).map((x, i) => {
              return (
                <tr
                  key={`subs_key_${x.animationId}`}
                  className={`${
                    i % 2 === 0 ? 'bg-opacity-25' : 'bg-opacity-50'
                  } bg-gray-900`}
                >
                  <td className='p-2'>
                    <FtAvatar src={x.avatar || ''} />
                  </td>
                  <td className='text-right'>
                    <Link to={`/profile/${(x.username || '').toLowerCase()}`}>
                      <span className='hover:underline'>{x.username}</span>
                    </Link>
                  </td>
                  <td className='text-right'>
                    <Link to={`/animation/${x.animationId}/${x.submissionId}`}>
                      <span className='hover:underline'>{x.title}</span>
                    </Link>
                  </td>
                  <td className='text-right p-2'>
                    {moment(x.createdAt).format('MMMM Do YYYY, h:mm A')}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </td>
    </tr>
  )
}

export default Details
