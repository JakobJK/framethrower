import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useGetFullProfileQuery } from '../../graphql/generated/hooks'
import TitleComponent from '../../context/TitleComponent'
import {
  Profile as ProfileType,
  Note as NoteType,
  Animation as AnimationType,
  ProfileSocial as ProfileSocialType,
} from '../../graphql/generated/types'
import FourOhFour from '../../components/FourOhFour'
import Social from './Social'
import Notes from './Notes'
import Animations from './Animations'
import Reel from './Reel'
import Header from './Header'
import About from './About'

const Profile = (props: RouteComponentProps<{ username: string }>) => {
  const { username } = props.match.params
  const { loading, error, data } = useGetFullProfileQuery({
    variables: { username: username.toLowerCase() },
  })

  if (loading) return null
  if (error) return <p>Error :(</p>

  const user = data?.getProfileByUsername ?? null

  if (user === null) {
    return <FourOhFour />
  }

  const social =
    user?.profileSocialsByProfileId?.nodes?.[0] ?? ({} as ProfileSocialType)
  const animations =
    user?.animationsByProfileId?.nodes ?? ([] as Array<AnimationType>)
  const notes = user?.notesByProfileId?.nodes ?? ([] as Array<NoteType>)

  return (
    <div className='flex flex-col mx-auto max-w-4xl justify-items-center'>
      <TitleComponent title={user.username} />
      <Header user={user as ProfileType} />
      <About user={user as ProfileType} />
      <Reel user={user as ProfileType} />
      <Animations animations={animations as Array<AnimationType>} />
      <Notes notes={notes as Array<NoteType>} />
      <Social social={social as ProfileSocialType} />
    </div>
  )
}

export default Profile
