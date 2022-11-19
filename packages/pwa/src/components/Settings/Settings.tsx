import * as React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import UserSettings from './UserSettings'
import ChangeAvatar from './ChangeAvatar'
import ChangeBanner from './ChangeBanner'
import ChangePassword from './ChangePassword'
import PluginSettings from './PluginSettings'
import Social from './Social'
import Reel from './Reel'
import WithPermission from '../../context/WithPermission'
import withTitle from '../../context/withTitle'

const Settings = props => {
  const { profile } = props

  const menuItems = [
    {
      url: '/settings',
      display: 'Settings',
    },
    {
      url: '/settings/social',
      display: 'Social',
    },
    {
      url: '/settings/avatar',
      display: 'Avatar',
    },
    {
      url: '/settings/banner',
      display: 'Banner',
    },
    {
      url: '/settings/password',
      display: 'Password',
    },
    {
      url: '/settings/plugin',
      display: 'Plugin',
    },
    {
      url: '/settings/reel',
      display: 'Reel',
    },
  ].map(x => (
    <Link to={x.url} key={`id_${x.url}`}>
      <div
        className={`text-center rounded-t rounded-b-none pb-0 pt-4 pl-4 pr-4 hover:underline ${
          props.location.pathname === x.url
            ? 'text-white bg-gray-800'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        {x.display}
      </div>
    </Link>
  ))

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='flex'>{menuItems}</div>
      <div className='w-full mx-0	max-w-4xl	bg-gray-800 rounded p-8'>
        <WithPermission permission='inactive'>
          <div className='font-semibold text-white p-8 text-center rounded mb-8 bg-red-700 shadow'>
            You are currently an unactive user! Submit your First Animation in
            order to become active and being able to write notes, and comments!
          </div>
        </WithPermission>
        <Route
          path='/settings'
          exact={true}
          render={props => <UserSettings profile={profile} />}
        />
        <Route
          path='/settings/avatar'
          render={() => <ChangeAvatar avatar={profile.avatar} />}
        />
        <Route
          path='/settings/social'
          render={() => (
            <Social
              social={profile.profileSocialByProfileId || { social: null }}
            />
          )}
        />
        <Route path='/settings/password' component={ChangePassword} />
        <Route path='/settings/plugin' component={PluginSettings} />
        <Route
          path='/settings/banner'
          render={() => <ChangeBanner banner={profile.banner} />}
        />
        <Route
          path='/settings/reel'
          render={() => <Reel profile={profile} />}
        />
      </div>
    </div>
  )
}
export default withRouter(withTitle(Settings, 'Settings'))
