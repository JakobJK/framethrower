import * as React from 'react'
import moment from 'moment'

const Edited = ({
  createdAt,
  updatedAt,
}: {
  createdAt: moment.MomentInput
  updatedAt: moment.MomentInput
}) => {
  return createdAt === updatedAt ? null : (
    <div className='font-light text-xs px-4 py-2'>
      * updated at {moment(updatedAt).format('MMM Do YYYY')}
    </div>
  )
}

export default Edited
