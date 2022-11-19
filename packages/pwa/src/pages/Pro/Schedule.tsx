import * as React from 'react'
import moment from 'moment'

const Schedule = ({ groupMonths }) => {
  return groupMonths.length > 0 ? (
    <table className='w-full'>
      <thead>
        <tr className='font-semibold'>
          <th className='text-left'>Month</th>
          <th className='text-left'>Year</th>
          <th className='text-right'>Feedbacks</th>
          <th className='text-right'>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {groupMonths.map(x => {
          return (
            <tr key={`${x.year}_${x.month}`}>
              <td>{moment(x.month, 'M').format('MMMM')}</td>
              <td>{x.year}</td>
              <td className='text-right'>{x.amountFeedbacks}</td>
              <td className='text-right'>
                {moment(x.updatedAt).format('MMM Do YY')}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  ) : (
    <div className='w-full flex justify-around h-24 text-gray-600 text-lg items-center'>
      <p>No schedules with feedbacks are currently planned! :(</p>
    </div>
  )
}

export default Schedule
