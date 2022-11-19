import * as React from 'react'
import qs from 'qs'
import { Link, RouteComponentProps } from 'react-router-dom'

import {
  VAdminMember,
  UserRole as UserRoleType,
} from '../../graphql/generated/types'

import {
  useGetAllMembersQuery,
  GetAllMembersDocument,
  useChangeUserRoleMutation,
  useAdminPromoteToInstructorMutation,
} from '../../graphql/generated/hooks'

import FtAvatar from '../../elements/FtAvatar'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TablePagination from '@material-ui/core/TablePagination'
import Dialog from '@material-ui/core/Dialog'
import Button from '../../elements/Button'

const { useState, useEffect } = React

const Members = (props: RouteComponentProps) => {
  const { page } = qs.parse(props.location.search.slice(1))
  const usePage = typeof page === 'string' ? page : '0'
  const [currentPage, setCurrentPage] = useState(parseInt(usePage, 10) || 1)
  const [modalOption, setModalOption] = useState<{
    open: boolean
    userId: string
    role: UserRoleType
    username: string
  }>({
    open: false,
    userId: '',
    role: 'FRAMETHROWER_USER' as UserRoleType,
    username: '',
  })
  const [latestInvitation, setLatestInvitation] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [variables, setVariables] = useState({
    variables: { first: rowsPerPage, offset: (currentPage - 1) * rowsPerPage },
  })

  const { loading, error, data } = useGetAllMembersQuery(variables)
  const [changeUserRole] = useChangeUserRoleMutation()
  const [promoteMemberToInstructor] = useAdminPromoteToInstructorMutation()

  useEffect(() => {
    setVariables({
      variables: {
        first: rowsPerPage,
        offset: (currentPage - 1) * rowsPerPage,
      },
    })
  }, [currentPage, rowsPerPage])

  const handleClose = () => {
    setModalOption({
      open: false,
      userId: '',
      role: 'FRAMETHROWER_USER' as UserRoleType,
      username: '',
    })
  }

  if (loading) return null
  if (error) return <p>Error :(</p>

  const totalCount = data?.allVAdminMembers?.totalCount ?? 0

  const handlePromoteUser = profileId => {
    promoteMemberToInstructor({
      variables: {
        profileId,
      },
      refetchQueries: () => [
        {
          query: GetAllMembersDocument,
          variables: {
            first: rowsPerPage,
            offset: (currentPage - 1) * rowsPerPage,
          },
        },
      ],
    }).then(() => {
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
  }

  const handleConfirm = () => {
    changeUserRole({
      variables: {
        role: modalOption?.role && ('FRAMETHROWER_USER' as UserRoleType),
        userId: modalOption.userId,
      },
      refetchQueries: () => [
        {
          query: GetAllMembersDocument,
          variables: {
            first: rowsPerPage,
            offset: (currentPage - 1) * rowsPerPage,
          },
        },
      ],
    }).then(response => {
      handleClose()
    })
  }

  const membersList = (
    data?.allVAdminMembers?.nodes ?? ([] as Array<VAdminMember>)
  ).map((x, i) => {
    return (
      <tr
        key={`key_${x.id}`}
        className={`bg-gray-${i % 2 === 0 ? '700' : '800'} bg-opacity-10`}
      >
        <td className='w-1/12 text-left'>
          <div className='p-2'>
            <Link to={`/admin/member/${x.username || ''.toLowerCase()}`}>
              <FtAvatar src={x.avatar || ''} />
            </Link>
          </div>
        </td>
        <td className='w-3/12 text-left'>
          <Link to={`/admin/member/${x.username || ''.toLowerCase()}`}>
            <span className='hover:underline'>{x.username}</span>
          </Link>
        </td>
        <td className='text-left w-3/12'>
          {x.firstname} {x.lastname}
        </td>
        <td className='text-right w-1/12 px-4'>
          <Select
            fullWidth
            style={{ maxHeight: '35px' }}
            variant='outlined'
            displayEmpty
            value={x.role}
            onChange={(e: React.ChangeEvent<{}>) => {
              const target = e.target as HTMLInputElement
              setModalOption({
                role: target.value as UserRoleType,
                userId: x.id,
                username: (x.username as string) || 'Unknown',
                open: true,
              })
            }}
            disabled={x.role === 'FRAMETHROWER_ADMIN'}
          >
            <MenuItem value='FRAMETHROWER_INACTIVE'>Inactive</MenuItem>
            <MenuItem value='FRAMETHROWER_USER'>User</MenuItem>
            <MenuItem value='FRAMETHROWER_BANNED'>Banned</MenuItem>
            <MenuItem value='FRAMETHROWER_MODERATOR'>Moderator</MenuItem>
            <MenuItem value='FRAMETHROWER_ADMIN'>Admin</MenuItem>
          </Select>
        </td>
        <td className='w-3/1 text-right'>
          <Button
            key={`btn_key_${x.id}`}
            disabled={x.isInstructor === 'ACTIVE'}
            onClick={() => handlePromoteUser(x.id)}
          >
            MAKE INSTRUCTOR
          </Button>
        </td>
      </tr>
    )
  })
  return (
    <div>
      <Dialog
        open={modalOption.open}
        onClose={(e: Event) => {
          setModalOption({
            open: false,
            userId: '',
            role: 'FRAMETHROWER_USER' as UserRoleType,
            username: '',
          })
        }}
      >
        <div className='p-8'>
          <h1 className='text-lg font-semibold'>User changes!</h1>
          <p className='p-4'>
            You are about the change the user role of {modalOption.username} to{' '}
            {modalOption.role}.
          </p>
          <p className='text-center'>Are you sure?</p>
          <div className='flex'>
            <Button fullWidth onClick={handleConfirm}>
              Confirm
            </Button>
            <Button fullWidth onClick={handleClose}>
              {' '}
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
      <p>
        We have <span className='text-lg underline'>{totalCount}</span> Members!
      </p>
      {latestInvitation !== '' && (
        <p>The invited ${latestInvitation} to become an instructor!</p>
      )}
      <br />
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
        <thead className=''>
          <tr>
            <th className='text-left'></th>
            <th className='text-left'></th>
            <th className='text-left'>Name</th>
            <th className=''>Role</th>
            <th className='text-right p-2'>Instructor</th>
          </tr>
        </thead>
        <tbody>{membersList}</tbody>
      </table>
    </div>
  )
}

export default Members
