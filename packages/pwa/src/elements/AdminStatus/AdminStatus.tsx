import * as React from 'react'
import { UserRole } from '../../graphql/generated/types'
const AdminStatus = ({ role }: { role: UserRole }) => {
  if (role === 'FRAMETHROWER_ADMIN') {
    return (
      <div className='text-xs font-semibold text-teal-100 opacity-30'>
        Admin
      </div>
    )
  }
  // if (role === 'FRAMETHROWER_MODERATOR') {
  //   return (
  //     <>
  //       <br />
  //       <span>Moderator</span>
  //     </>
  //   )
  // }
  return null
}

export default AdminStatus
