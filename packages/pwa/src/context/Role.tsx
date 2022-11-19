import * as React from 'react'
import {
  InstructorStatus,
  UserRole,
  Profile,
  ProfilePremium,
} from '../graphql/generated/types'
import { useGetRoleQuery } from '../graphql/generated/hooks'

const { createContext } = React

export const TokenContext = createContext({
  profileId: null,
  username: '',
  role: 'FRAMETHROWER_ANONYMOUS' as UserRole,
  premiumType: 'DEFAULT' as ProfilePremium,
  avatar: '',
  instructor: 'NOT_INSTRUCTOR' as InstructorStatus,
  adminCompany: '',
})

const Role = ({ children }: { children: React.ReactChildren }) => {
  const { loading, error, data } = useGetRoleQuery()

  if (loading) return null
  if (error) return <p>Error :(</p>

  const prof = data?.currentProfile ?? ({} as Profile)

  return (
    <TokenContext.Provider
      value={{
        profileId: prof?.id ?? null,
        role: prof?.role ?? ('FRAMETHROWER_ANONYMOUS' as UserRole),
        username: prof?.username ?? '',
        adminCompany: prof?.getAdminCompany ?? '',
        premiumType:
          (prof?.premiumType as ProfilePremium) ??
          ('DEFAULT' as ProfilePremium),
        avatar: prof?.avatar ?? '',
        instructor:
          (prof?.isInstructor as InstructorStatus) ??
          ('NOT_INSTRUCTOR' as InstructorStatus),
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}

export default Role
