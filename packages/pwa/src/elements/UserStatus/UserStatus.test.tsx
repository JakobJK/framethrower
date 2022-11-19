import * as React from 'react'

import { render } from '@testing-library/react'
import {
  UserRole,
  ProfilePremium,
  InstructorStatus,
} from '../../graphql/generated/types'
import UserStatus from './UserStatus'

test('Testing Instructor label', () => {
  const { getByText } = render(
    <UserStatus
      role={'FRAMETHROWER_USER'}
      instructor={'ACTIVE'}
      premiumType={'PRO'}
    />
  )
  getByText('Instructor')
})

test('Testing PRO label', () => {
  const { getByText } = render(
    <UserStatus
      role={'FRAMETHROWER_USER' as UserRole}
      instructor={'NOT_INSTRUCTOR' as InstructorStatus}
      premiumType={'PRO' as ProfilePremium}
    />
  )
  getByText('PRO')
})
