import * as React from 'react'
import { Link } from 'react-router-dom'
import FtAvatar from '../../elements/FtAvatar'
import UserStatus from '../../elements/UserStatus'
import moment from 'moment'
import AdminStatus from '../../elements/AdminStatus'
import Button from '../../elements/Button'

import {
  InstructorStatus,
  UserRole,
  ProfilePremium,
} from '../../graphql/generated/types'

const Header = ({ user, createdAt, expanded, setExpanded }) => {
  return (
    <div className='flex flex-row justify-between pl-2'>
      <div className='flex flex-row justify-between items-center'>
        <Link to={`/profile/${user?.username}`}>
          <FtAvatar src={user?.avatar || ''} />
        </Link>
        <div className='text-left pl-4'>
          <div>
            <Link to={`/profile/${user?.username}`}>
              <span className='font-semibold hover:underline'>
                {user?.username}
              </span>
            </Link>
            <UserStatus
              instructor={user?.isInstructor as InstructorStatus}
              role={user?.role as UserRole}
              premiumType={user?.premiumType as ProfilePremium}
            />
          </div>
          <div className='text-xs'>
            {user?.occupation && user?.occupation}
            {user?.organisation && user?.occupation && ' at '}
            {user?.organisation && user?.organisation}
          </div>
          {expanded && <AdminStatus role={user?.role as UserRole} />}
        </div>
      </div>
      <div className='flex-col flex justify-between h-full items-end justify-self-end'>
        <p className='text-xs text-gray-500'>
          {moment(createdAt).format('MMM Do YYYY')}
        </p>
        <Button
          size='small'
          className=' w-full opacity-70'
          style={{ padding: '2px', justifyContent: 'flex-end' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '▼' : '◀'}
        </Button>
      </div>
    </div>
  )
}

export default Header
