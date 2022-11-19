import React, { useState, useEffect } from 'react'
import qs from 'qs'

import TablePagination from '@material-ui/core/TablePagination'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Profile } from '../../graphql/generated/types'
import {
  useGetAllAdminInstructorsQuery,
  useAdminChangeInstructorStatusMutation,
  GetAllAdminInstructorsDocument,
} from '../../graphql/generated/hooks'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const Instructors = (props: RouteComponentProps) => {
  const { page, rows } = qs.parse(props.location.search.slice(1))

  const useRows = typeof rows === 'string' ? rows : '0'
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)
  const [rowsPerPage, setRowsPerPage] = useState(parseInt(useRows, 10) || 50)
  const [variables, setVariables] = useState({
    variables: { first: rowsPerPage, offset: (currentPage - 1) * rowsPerPage },
  })
  const { loading, error, data } = useGetAllAdminInstructorsQuery(variables)
  const [changeInstructorStatus] = useAdminChangeInstructorStatusMutation()

  useEffect(() => {
    setVariables({
      variables: {
        first: rowsPerPage,
        offset: (currentPage - 1) * rowsPerPage,
      },
    })
    props.history.push(
      props.location.pathname +
        '?' +
        qs.stringify({ page: currentPage, rows: rowsPerPage })
    )
  }, [currentPage, rowsPerPage])

  if (loading) return null
  if (error) return <p>Error :(</p>
  const totalCount = data?.allVAdminInstructors?.totalCount ?? 0

  const instructorsList = data?.allVAdminInstructors?.nodes ?? []

  const availabilityColors = {
    AVAILABLE: 'green',
    BUSY: 'yellow',
    UNAVAILABLE: 'red',
  }

  const handleInstructorChange = (profileId, instructorStatus) => {
    changeInstructorStatus({
      variables: {
        profileId,
        instructorStatus,
      },
      refetchQueries: () => [
        {
          query: GetAllAdminInstructorsDocument,
          variables: {
            first: rowsPerPage,
            offset: (currentPage - 1) * rowsPerPage,
          },
        },
      ],
    })
      .then(res => {
        fetch(`${SERVERLESS}/invalidate-jwts`, {
          body: JSON.stringify({
            profileId,
          }),
          method: 'post',
          headers: {
            authorization: localStorage.getItem('token'),
          },
        })
      })
      .catch(e => {
        console.log('oh no. major issue. ', e)
      })
  }

  return (
    <div>
      <p>{`${totalCount} instructors!`}</p>
      <TablePagination
        component='div'
        count={totalCount}
        page={currentPage - 1}
        onChangePage={(_event, value: number) => setCurrentPage(value + 1)}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={event => {
          setRowsPerPage(parseInt(event.target.value, 10))
          setCurrentPage(1)
        }}
      />
      <table className='w-full'>
        <thead>
          <tr>
            <th className='text-left p-2'>Status</th>
            <th className='text-left p-2'>Availibility</th>
            <th className='text-right'>User</th>
            <th className='text-right'>Name</th>
            <th className='text-right p-2'>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {instructorsList.map((x, i) => {
            const profile = x?.profileByProfileId as Profile
            const {
              username,
              firstname,
              lastname,
              avatar,
              organisation,
              occupation,
              id,
            } = profile
            return (
              <tr
                key={`key_${id}`}
                className={`bg-gray-${
                  i % 2 === 0 ? '700' : '600'
                } bg-opacity-10`}
              >
                <td className='w-1/12 items-center py-4 '>
                  <Select
                    fullWidth
                    style={{ maxHeight: '35px' }}
                    variant='outlined'
                    displayEmpty
                    value={x.status}
                    onChange={e => handleInstructorChange(id, e.target.value)}
                  >
                    <MenuItem value='INACTIVE'>Inactive</MenuItem>
                    <MenuItem value='ACTIVE'>Active</MenuItem>
                  </Select>
                </td>
                <td className='w-1/12 items-center py-4 '>
                  <div
                    className={`h-4 w-4 bg-${
                      availabilityColors[x.availability]
                    }-600 rounded-full m-auto`}
                  />
                </td>
                <td className='text-right w-3/12'>
                  <Link to={`/admin/instructor/${username.toLowerCase()}`}>
                    <span className='hover:underline'>{username}</span>
                  </Link>
                </td>
                <td className='text-right  w-3/12'>
                  {firstname} {lastname}
                </td>
                <td className='text-right  w-4/12'>
                  {occupation} {occupation && organisation && ' at '}{' '}
                  {organisation}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Instructors
