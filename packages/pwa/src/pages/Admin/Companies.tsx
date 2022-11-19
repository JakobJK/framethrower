import * as React from 'react'
import qs from 'qs'
import { Link, RouteComponentProps } from 'react-router-dom'
import TablePagination from '@material-ui/core/TablePagination'

import { useGetAllCompaniesQuery } from '../../graphql/generated/hooks'

import { Company } from '../../graphql/generated/types'

const { useState, useEffect } = React

const Companies = (props: RouteComponentProps) => {
  const { page } = qs.parse(props.location.search.slice(1))
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [variables, setVariables] = useState({
    variables: { first: rowsPerPage, offset: (currentPage - 1) * rowsPerPage },
  })

  const { loading, error, data } = useGetAllCompaniesQuery(variables)

  useEffect(() => {
    setVariables({
      variables: {
        first: rowsPerPage,
        offset: (currentPage - 1) * rowsPerPage,
      },
    })
  }, [currentPage, rowsPerPage])

  if (loading) return null
  if (error) return null

  const totalCount = data?.allCompanies?.totalCount ?? 0
  const companiesList = (
    data?.allCompanies?.nodes ?? ([] as Array<Company>)
  ).map((x, i) => {
    return (
      <tr
        key={`key_${x.id}`}
        className={
          i % 2 === 0
            ? 'bg-gray-700 bg-opacity-25'
            : 'bg-gray-600 bg-opacity-25'
        }
      >
        <td className='w-1/3'>
          {x.logo && <img arial-label={`${x.name} logo`} src={x.logo} />}
        </td>
        <td className='w-1/3'>
          <Link to={`/admin/company/${x.nameUrlSafe}`}>{x.name}</Link>
        </td>
        <td className='w-1/3'>
          {x.link ? (
            <a target='_blank' href={x.link}>
              {x.link}
            </a>
          ) : (
            'N/A'
          )}
        </td>
      </tr>
    )
  })

  return (
    <div>
      <p>We have {totalCount} beautiful companies signed up!</p>
      <TablePagination
        component='div'
        count={totalCount}
        page={currentPage - 1}
        onChangePage={(_event, value) => {
          setCurrentPage(value + 1)
        }}
        rowsPerPage={100}
      />
      <table className='w-full'>
        <thead className='bg-gray-900 w-full'>
          <tr>
            <th className='text-left'></th>
            <th className='text-right'>Company</th>
            <th className='text-right'>Website</th>
          </tr>
        </thead>
        <tbody>{companiesList}</tbody>
      </table>
    </div>
  )
}

export default Companies
