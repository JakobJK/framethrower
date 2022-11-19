import * as React from 'react'
import WithPermission from '../../context/WithPermission'
import Instructor from './Instructor'

const InstructorRoot = () => {
  return (
    <WithPermission permission='instructor' redirect='/'>
      <Instructor />
    </WithPermission>
  )
}

export default InstructorRoot
