import React, { useState } from 'react'
import { VAdminFeedbackOverviewCollapsed } from '../../../graphql/generated/types'
import { Link } from 'react-router-dom'
import FtAvatar from '../../../elements/FtAvatar'
import Button from '../../../elements/Button'
import Details from './Details'
const Element = (props: { elem: VAdminFeedbackOverviewCollapsed }) => {
  const {
    elem: { username, count, avatar, year, month, profileId },
  } = props
  const [open, setOpen] = useState(false)
  return (
    <>
      <tr className='bg-gray-700 bg-opacity-25'>
        <td className='p-2'>
          <FtAvatar src={avatar || ''} />
        </td>
        <td className='text-right'>
          <Link to={`/profile/${username?.toLowerCase()}`}>
            <span className='hover:underline'>{username}</span>
          </Link>
        </td>
        <td className='text-right'>{count}</td>
        <td className='text-right p-2'>
          <Button size='small' onClick={() => setOpen(!open)}>
            {open ? '\u25BC' : '\u25C0'}
          </Button>
        </td>
      </tr>
      {open && (
        <Details
          variables={{ profileId, year: Number(year), month: Number(month) }}
        />
      )}
    </>
  )
}

export default Element
