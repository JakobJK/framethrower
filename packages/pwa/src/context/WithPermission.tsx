import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { TokenContext } from './Role'
import FourOhFour from '../components/FourOhFour'
import {
  UserRole,
  InstructorStatus,
  ProfilePremium,
} from '../graphql/generated/types'

const { useContext } = React

interface ISection {
  permission: string
  redirect?: string
  message?: string
  fourohfour?: boolean
}

const WithPermission: React.FunctionComponent<ISection &
  RouteComponentProps> = ({
  children,
  permission,
  redirect,
  history,
  fourohfour,
  message,
}) => {
  const { role, instructor, premiumType, adminCompany } = useContext(
    TokenContext
  )

  const anonymous = 'FRAMETHROWER_ANONYMOUS' as UserRole
  const inactive = 'FRAMETHROWER_INACTIVE' as UserRole
  const banned = 'FRAMETHROWER_BANNED' as UserRole
  const pro = 'PRO' as ProfilePremium
  const admin = 'FRAMETHROWER_ADMIN' as UserRole
  const active = 'ACTIVE' as InstructorStatus

  switch (permission) {
    case undefined:
      return null
    case 'active':
      if (role === inactive || role === anonymous || role === banned) {
        if (redirect !== undefined) {
          history.replace(redirect)
        }
        if (fourohfour) return <FourOhFour />
        return null
      } else {
        return <>{children}</>
      }
    case 'inactive':
      if (role === inactive) {
        return <>{children}</>
      } else {
        if (fourohfour) return <FourOhFour />
        return null
      }
    case 'banned':
      if (role === banned) {
        return <>{children}</>
      } else {
        if (fourohfour) return <FourOhFour />
        return null
      }
    case 'notLoggedIn':
      if (role === anonymous) {
        return <>{children}</>
      } else {
        if (fourohfour) return <FourOhFour />
        return null
      }
    case 'pro':
      if (premiumType === pro) {
        return <>{children}</>
      }
      if (fourohfour) return <FourOhFour />
      return null
    case 'company':
      return adminCompany !== '' ? <>{children}</> : null
    case 'loggedIn':
      if (role === anonymous) {
        if (redirect) {
          message
            ? history.replace({
                pathname: redirect,
                state: { mainMessage: message, goback: '/premiumsignup' },
              })
            : history.replace(redirect)
          return null
        }
        if (fourohfour) return <FourOhFour />
        return null
      } else {
        return <>{children}</>
      }
    case 'admin':
      if (role === admin) {
        return <>{children}</>
      } else {
        if (redirect !== undefined) {
          history.replace(redirect)
          return null
        }
        if (fourohfour) return <FourOhFour />
        return null
      }
    case 'instructor':
      if (permission === 'instructor') {
        if (instructor === active) {
          return <>{children}</>
        }
        if (redirect !== undefined) {
          history.replace(redirect)
          return null
        }
        if (fourohfour) return <FourOhFour />
        return null
      }
    default:
      return null
  }
}

export default withRouter(WithPermission)
