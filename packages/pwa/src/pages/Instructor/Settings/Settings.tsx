import * as React from 'react'
import ChangeBio from './ChangeBio'
import ChangeBanner from './ChangeBanner'
import ChangeAvailability from './ChangeAvailability'
import Collapsible from '../../../elements/Collapsible'

import { useGetAllVInstructorSettingsQuery } from '../../../graphql/generated/hooks'

const Settings = () => {
  const { loading, error, data } = useGetAllVInstructorSettingsQuery()

  if (loading) return null
  if (error) return null

  const settings = data?.allVInstructorSettings?.nodes?.[0] ?? {}

  return (
    <>
      <Collapsible headline='Availability' urlString='availability'>
        <ChangeAvailability status={settings.availability} />
      </Collapsible>
      <Collapsible headline='Banner' urlString='banner'>
        <ChangeBanner banner={settings.banner} />
      </Collapsible>
      <Collapsible headline='Biography' urlString='bio'>
        <ChangeBio biography={settings.biography} />
      </Collapsible>
    </>
  )
}
export default Settings
