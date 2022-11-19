import * as React from 'react'
const anon_avatar = require('../../static/anonAvatar.png')
import Avatar from '@material-ui/core/Avatar'

const FtAvatar = ({ src }: { src: string | null }) => {
  return (
    <Avatar
      src={src ? `${STORAGE}/${src}` : anon_avatar}
      alt={src ? 'users avatar' : 'default avatar'}
    />
  )
}
export default FtAvatar
