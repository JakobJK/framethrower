import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Element from './Element'
import { VAdminFeedbackOverviewCollapsed } from '../../../graphql/generated/types'
import { useGetFeedbackMonthlyOverviewQuery } from '../../../graphql/generated/hooks'

import TablePagination from '@material-ui/core/TablePagination'

const FeedbackOverview = (props: RouteComponentProps) => {
  const thisMonth = new Date().getMonth() + 1
  const { page, yr, mn } = qs.parse(props.location.search.slice(1))
  const [currentPage, setCurrentPage] = useState(
    parseInt((page || '')?.toString(), 10) - 1 || 1
  )
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [year, setYear] = useState(
    parseInt(yr?.toString() || new Date().getFullYear().toString(), 10)
  )
  const [month, setMonth] = useState(
    parseInt(mn?.toString() || thisMonth.toString(), 10)
  )
  const [variables, setVariables] = useState({
    variables: {
      offset: (currentPage - 1) * rowsPerPage,
      month,
      year,
    },
  })

  const { loading, error, data } = useGetFeedbackMonthlyOverviewQuery(variables)

  useEffect(() => {
    setVariables({
      variables: {
        offset: (currentPage - 1) * rowsPerPage,
        year,
        month,
      },
    })
  }, [currentPage, rowsPerPage, month, year])

  const handleChangePage = (
    event: React.ChangeEvent<HTMLInputElement>,
    page: number
  ) => {
    setCurrentPage(page + 1)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setCurrentPage(1)
  }

  if (loading) return null
  if (error) return <p>error... :(</p>

  const totalInstructors = data?.allVAdminFeedbackOverviewCollapseds?.totalCount
  const totalFeedbacks = data?.allVAdminFeedbackOverviews?.totalCount

  const months = [
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
  const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027]

  return (
    <div>
      <Select
        label='Month'
        labelId='monthSelectLabel'
        id='monthSelect'
        value={month}
        onChange={e => {
          setMonth(e.target.value as number)
        }}
      >
        {months.map((x, i) => {
          return (
            <MenuItem key={`months_key_${x}`} value={i + 1}>
              {x}
            </MenuItem>
          )
        })}
      </Select>
      <Select
        label='Year'
        labelId='monthSelectLabel'
        id='monthSelect'
        value={year}
        onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
          setYear(e.target.value as number)
        }}
      >
        {years.map(x => (
          <MenuItem key={`years_key_${x}`} value={x}>
            {x}
          </MenuItem>
        ))}
      </Select>

      <TablePagination
        component='div'
        count={totalInstructors || 0}
        page={currentPage - 1}
        onChangePage={(event, page) => {
          setCurrentPage(page + 1)
        }}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <h4>
        {`${totalInstructors} instructor${totalInstructors !== 1 ? 's' : ''} `}
        <br />
        {`${totalFeedbacks} Pro Feedback Video${
          totalFeedbacks !== 1 ? 's' : ''
        }`}
        <br />
        {months[month - 1]}/{year}
      </h4>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='text-left p-2'>
              <p />
            </th>
            <th className='text-right'>Instructor</th>
            <th className='text-right'>Feedbacks</th>
            <th className='text-right p-2'>Expand</th>
          </tr>
        </thead>
        <tbody>
          {(data?.allVAdminFeedbackOverviewCollapseds?.nodes ?? []).map(
            (x: VAdminFeedbackOverviewCollapsed) => (
              <Element key={`key_${x?.username}`} elem={x} />
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default FeedbackOverview
