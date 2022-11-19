import * as React from 'react'

import FtAvatar from '../../elements/FtAvatar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SettingsIcon from '@material-ui/icons/Settings'
import PersonIcon from '@material-ui/icons/Person'
import MovieIcon from '@material-ui/icons/Movie'
import AnnouncementIcon from '@material-ui/icons/Announcement'

import { Link, withRouter } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { TokenContext as AuthContext } from '../../context/Authenticated'
import { TokenContext } from '../../context/Role'
import UserStatus from '../../elements/UserStatus'
import AdminStatus from '../../elements/AdminStatus'
import WithPermission from '../../context/WithPermission'

const { useContext, useState } = React

const UserMenu = props => {
  const ctx = useContext(AuthContext)
  const context = useContext(TokenContext)

  const {
    avatar,
    username,
    role,
    premiumType,
    instructor,
    adminCompany,
  } = context
  const [anchorEl, setAnchorEl] = useState(null)

  return !username ? (
    <Link
      to={{
        pathname: '/login',
        state: { goback: props.history.location.pathname },
      }}
    >
      <IconButton>
        <AccountCircle />
      </IconButton>
    </Link>
  ) : (
    <>
      <IconButton
        aria-controls='simple-menu'
        aria-haspopup='true'
        size='small'
        onClick={event => {
          setAnchorEl(event.currentTarget)
        }}
      >
        <FtAvatar src={avatar} />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null)
        }}
      >
        <div className='block text-white text-opacity-50 uppercase px-4 py-2'>
          {username}
          <UserStatus
            instructor={instructor}
            role={role}
            premiumType={premiumType}
          />
          <AdminStatus role={role} />
        </div>
        <hr className='border-t opacity-25 border-b-0' />
        <Link to={`/profile/${username}`}>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <PersonIcon />
            <span className='pl-2'>Profile</span>
          </MenuItem>
        </Link>
        <Link to={`/settings`}>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <SettingsIcon />
            <span className='pl-2'>Settings</span>
          </MenuItem>
        </Link>

        <MenuItem
          onClick={() => {
            ctx.handleLogout()
            props.history.replace('/')
          }}
        >
          <ExitToAppIcon />
          <span className='pl-2'>Logout</span>
        </MenuItem>
      </Menu>
    </>
  )
}

export default withRouter(UserMenu)
