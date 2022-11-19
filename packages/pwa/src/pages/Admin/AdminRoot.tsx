import * as React from 'react'
import WithPermission from '../../context/WithPermission'
import Admin from './Admin'

const AdminRoot = () => {
  return (
    <WithPermission permission='admin' redirect='/'>
      <Admin />
    </WithPermission>
  )
}

export default AdminRoot
