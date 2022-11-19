import * as React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '../../elements/Button'

import {
  useCompanyAdminAddMonthToGroupMutation,
  AllCompanyAdminMonthsDocument,
} from '../../graphql/generated/hooks'

const { useState } = React

const CreateMonth = ({ groupId }) => {
  const [processing, setProcessing] = useState(false)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(2021)
  const [feedbackAmount, setFeedbackAmount] = useState(1)

  const [addMonthToGroup] = useCompanyAdminAddMonthToGroupMutation()

  const years = [2021, 2022].map(x => {
    return (
      <MenuItem key={x} value={x}>
        {x}
      </MenuItem>
    )
  })
  const months = [
    'Select Month',
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
  ].map((x, i) => {
    return (
      <MenuItem key={`key_${x}`} value={i} disabled={i === 0}>
        {x}
      </MenuItem>
    )
  })

  const handleSubmit = () => {
    setProcessing(true)
    addMonthToGroup({
      refetchQueries: () => {
        return [
          {
            query: AllCompanyAdminMonthsDocument,
            variables: { groupId },
          },
        ]
      },
      variables: {
        year,
        month,
        groupId,
        amountFeedbacks: feedbackAmount,
      },
    })
      .then(res => {
        console.log(res)
        setProcessing(false)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div className='w-full flex justify-between'>
      <div className='w-full p-4'>
        <Select
          value={month}
          fullWidth
          label='Month'
          onChange={event => {
            setMonth(event?.target?.value)
          }}
        >
          {months}
        </Select>
      </div>
      <div className='w-full p-4'>
        <Select
          value={year}
          fullWidth
          label='Year'
          onChange={event => {
            setYear(event?.target?.value)
          }}
        >
          {years}
        </Select>
      </div>
      <div className='w-full p-4'>
        <Select
          value={feedbackAmount}
          fullWidth
          onChange={event => {
            setFeedbackAmount(event?.target?.value)
          }}
          label='Feedback Amount'
        >
          {[1, 2, 3, 4].map(x => (
            <MenuItem key={`key_${x}`} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className='w-full p-4'>
        <Button
          fullWidth
          onClick={handleSubmit}
          disabled={month === 0 || processing}
        >
          {processing ? 'Processing...' : 'Create Month'}
        </Button>
      </div>
    </div>
  )
}

export default CreateMonth
