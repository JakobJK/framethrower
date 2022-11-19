import * as React from 'react'
import { useGetCurrentProfileQuery } from '../../graphql/generated/hooks'

import Settings from './Settings'
import WithPermission from '../../context/WithPermission'

const SettingsRoot = () => {
  const { loading, error, data } = useGetCurrentProfileQuery()

  if (loading) return null
  if (error) return <p>Error :(</p>

  return (
    <WithPermission permission='loggedIn' redirect='/'>
      <Settings profile={data.currentProfile} />
    </WithPermission>
  )
}

export default SettingsRoot
