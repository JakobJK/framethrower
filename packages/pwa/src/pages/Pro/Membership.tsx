import * as React from 'react'
import moment from 'moment'

const Membership = ({
  builtInFeedback,
  username,
  companyName,
  link,
  premiumName,
  status,
  createdAt,
  updatedAt,
  companyProGroupByCompanyProGroupId: group,
}) => {
  const groupName = group?.groupName ?? null
  const st = moment(updatedAt)
  const thYear = st.format('YYYY')
  const thMonth = st.format('MMMM')

  return (
    <div className='w-full'>
      <p className='px-12 py-4 leading-4 tracking-wider'>Hi {username}!</p>

      <table className='mx-auto w-4/5 font-semibold p-8'>
        <tr>
          <td className='p-2 text-gray-400'>Organization</td>
          <td className='text-right p-2'>
            <a
              href={link}
              target='_blank'
              className='text-gray-300 hover:text-gray-200 hover:underline'
            >
              {companyName.toUpperCase()}
            </a>
          </td>
        </tr>
        <tr>
          <td className='p-2 text-gray-400'>Status</td>
          <td className='text-right p-2 text-green-600'>
            {status.toUpperCase()}
          </td>
        </tr>
        <tr>
          <td className='p-2 text-gray-400'>Group</td>
          <td className={`text-right p-2 ${groupName ? '' : 'text-gray-700'}`}>
            {(groupName || 'None').toUpperCase()}
          </td>
        </tr>
      </table>

      {builtInFeedback > 0 ? (
        <p className='p-6 leading-4 tracking-wider text-center w-full'>
          You have <span className='underline text-lg'>{builtInFeedback}</span>{' '}
          feedback requests left of {thMonth} - {thYear}
        </p>
      ) : (
        <p className='p-6 leading-4 tracking-wider'>
          You have <span className='underline text-lg'>{builtInFeedback}</span>{' '}
          feedback requests left {thMonth} - {thYear}
        </p>
      )}

      {!groupName && (
        <div className='w-full opacity-30 rounded-lg flex justify-around  items-center py-4 px-8'>
          <p>
            You are currently not in a group. This mean you are currently not
            scheduled to receieve another round of feedback requests. If you
            believe you should be within a group, double check with
            support@framethrower.io{' '}
          </p>
        </div>
      )}
    </div>
  )
}

export default Membership
