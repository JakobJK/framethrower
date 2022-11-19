import * as React from 'react'
import { TokenContext } from './Role'
import { UserRole } from '../graphql/generated/types'

const { useContext } = React
const IsAdmin = ({
  children,
  flip = false,
}: {
  children: JSX.Element | JSX.Element[]
  flip: boolean
}) => {
  const { role } = useContext(TokenContext)
  if (flip) {
    return role === ('FRAMETHROWER_ADMIN' as UserRole) ? null : <>{children}</>
  } else {
    return role === ('FRAMETHROWER_ADMIN' as UserRole) ? <>{children}</> : null
  }
}

export default IsAdmin
