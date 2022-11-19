import * as React from 'react'
import { Link } from 'react-router-dom'
import FtAvatar from '../../elements/FtAvatar'
import moment from 'moment'
import Button from '../../elements/Button'

const Header = ({ user, createdAt, expanded, setExpanded }) => {
  return (
    <div className='flex flex-row justify-between p-2'>
      <div className='flex flex-row justify-between items-center px-2'>
        <Link to={`/profile/${user?.username}`}>
          <FtAvatar src={user?.avatar || ''} />
        </Link>
        <div className='text-left pl-4'>
          <Link to={`/profile/${user?.username}`}>
            <span className='font-semibold hover:underline'>
              {user?.username}
            </span>
          </Link>
          <div className='inline-block font-semibold pl-2'>
            {' - '}
            <span className='text-blue-400 '>PRO</span>FEEDBACK
          </div>
        </div>
      </div>
      <div className='flex-col flex justify-between h-full items-end justify-self-end'>
        <p className='text-xs text-gray-500'>
          {moment(createdAt).format('MMM Do YYYY')}
        </p>
        <Button
          size='small'
          className=' w-full opacity-70'
          style={{ padding: '2px', justifyContent: 'flex-end' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '▼' : '◀'}
        </Button>
      </div>
    </div>
  )
}

export default Header
