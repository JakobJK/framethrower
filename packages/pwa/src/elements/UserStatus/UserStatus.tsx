import * as React from 'react'
import {
  UserRole,
  ProfilePremium,
  InstructorStatus,
} from '../../graphql/generated/types'

const UserStatus = ({
  instructor,
  role,
  premiumType,
}: {
  instructor: InstructorStatus
  role: UserRole
  premiumType: ProfilePremium
}) => {
  if (instructor === 'ACTIVE') {
    return (
      <>
        <span className='text-gray-400'>{' - '}</span>
        <span className='text-orange-400'>Instructor</span>
      </>
    )
  }
  if (role === 'FRAMETHROWER_BANNED') {
    return (
      <>
        <span className='text-gray-400'>{' - '}</span>
        <span className='text-red-600 font-semibold'>Banned</span>
      </>
    )
  }
  if (role === 'FRAMETHROWER_INACTIVE') {
    return (
      <>
        <span className='text-gray-400'>{' - '}</span>
        <span className='text-red-600 font-semibold'>Inactive</span>
      </>
    )
  }
  if (premiumType === 'PRO') {
    return (
      <>
        <span className='text-gray-400'>{' - '}</span>
        <span className='text-blue-400 font-semibold'>PRO</span>
      </>
    )
  }
  if (role === 'FRAMETHROWER_USER') {
    return null
  }
  return null
}

export default UserStatus
