import * as React from 'react'
import { WithPermission } from '../../context'
import Company from './CompanyAdmin'

const CompanyAdmin = () => {
  return (
    <WithPermission permission='company'>
      <Company />
    </WithPermission>
  )
}

export default CompanyAdmin
