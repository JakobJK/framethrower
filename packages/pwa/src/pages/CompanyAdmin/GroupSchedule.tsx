import * as React from 'react'
import CreateMonth from './CreateMonth'
import ClearIcon from '@material-ui/icons/Clear'
import Button from '../../elements/Button'

import {
  useAllCompanyAdminMonthsQuery,
  useCompanyAdminRemoveMonthFromGroupMutation,
  AllCompanyAdminMonthsDocument,
} from '../../graphql/generated/hooks'

const GroupSchedule = ({ groupId }) => {
  const [removeGroup] = useCompanyAdminRemoveMonthFromGroupMutation()
  const { loading, error, data } = useAllCompanyAdminMonthsQuery({
    variables: { groupId },
  })

  if (loading) return null
  if (error) return <p>Error :(</p>

  const month = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Septemper',
    'October',
    'November',
    'December',
  ]

  const months = data?.allVCompanyAdminMonths?.nodes ?? []

  const handleDelete = monthId => {
    removeGroup({
      variables: { monthId },
      refetchQueries: () => [
        { query: AllCompanyAdminMonthsDocument, variables: { groupId } },
      ],
    })
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div className='w-full'>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='text-right'>Month</th>
            <th className='text-right'>Year</th>
            <th className='text-right'>Feedback Amount</th>
            <th className='text-right'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {months && months.map(x => {
            return (
              <tr key={`key_${x.id}`}>
                <td className='text-right'>{month[x?.month ?? 0]}</td>
                <td className='text-right'>{x.year}</td>
                <td className='text-right'>{x.amountFeedbacks}</td>
                <td className='text-right'>
                  <Button
                    onClick={() => {
                      handleDelete(x.id)
                    }}
                  >
                    <ClearIcon />
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <CreateMonth groupId={groupId} />
    </div>
  )
}

export default GroupSchedule
