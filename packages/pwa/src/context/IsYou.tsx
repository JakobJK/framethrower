import * as React from 'react'
import { TokenContext } from './Role'

const { useContext } = React
const IsYou = ({
  children,
  flip = false,
  id,
}: {
  children: JSX.Element | JSX.Element[]
  id: string
  flip: boolean
}) => {
  const { profileId } = useContext(TokenContext)

  if (flip) {
    return profileId === id ? null : <>{children}</>
  } else {
    return profileId === id ? <>{children}</> : null
  }
}

export default IsYou
