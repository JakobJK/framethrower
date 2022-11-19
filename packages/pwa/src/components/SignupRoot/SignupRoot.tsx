import * as React from 'react'

import { useIsRegistrationOpenQuery } from '../../graphql/generated/hooks'

import Signup from './Signup'
import ClosedRegistration from './ClosedRegistration'

const SignupRoot = () => {
  const { loading, error, data } = useIsRegistrationOpenQuery()

  if (loading) return null
  if (error) return <p>Error :(</p>

  return data?.isRegistrationOpen ?? false ? <Signup /> : <ClosedRegistration />
}

export default SignupRoot
