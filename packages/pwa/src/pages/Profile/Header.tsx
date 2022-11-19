import * as React from 'react'
import {
  Profile as ProfileType,
  ProfilePremium,
  UserRole,
  InstructorStatus,
} from '../../graphql/generated/types'
import UserStatus from '../../elements/UserStatus'
const anon_avatar = require('../../static/anonAvatar.png')

const Header = ({
  user: {
    banner,
    role,
    username,
    isInstructor,
    premiumType,
    avatar,
    firstname,
    lastname,
    occupation,
    organisation,
  },
}: {
  user: ProfileType
}) => {
  return (
    <div
      className='flex rounded flex-col justify-center justify-items-center pt-8 items-center w-full h-56'
      style={{ backgroundImage: `url(${STORAGE}/${banner})` }}
    >
      <img
        aria-label='Personal Avatar'
        className='h-32 w-32 rounded-full border-4 border-gray-500'
        src={avatar ? `${STORAGE}/${avatar}` : anon_avatar}
      />
      <div className='p-2'>
        <span className='font-semibold'>{username}</span>
        <UserStatus
          instructor={isInstructor as InstructorStatus}
          role={role as UserRole}
          premiumType={premiumType as ProfilePremium}
        />
      </div>
      {(firstname || lastname) && (
        <p>
          {firstname && firstname}
          {firstname && lastname && ' ' }
          {lastname && lastname}
        </p>
      )}
      {(occupation || organisation) && (
        <p>
          {occupation && occupation}
          {occupation && organisation && ' at '}
          {organisation && organisation}
        </p>
      )}
    </div>
  )
}

export default Header
