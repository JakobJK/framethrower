import * as React from 'react'
import Collapsible from '../../elements/Collapsible'

const Settings = ({ company }) => {
  const settingCategory = ['Company', 'Logo', 'Address']

  return (
    <>
      {settingCategory.map(x => {
        return (
          <Collapsible key={x} headline={x} urlString={x.toLowerCase()}>
            Halloej!
          </Collapsible>
        )
      })}
    </>
  )
}

export default Settings
