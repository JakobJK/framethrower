import * as React from 'react'
import { Profile } from '../../graphql/generated/types'
const About = ({ user }: { user: Profile }) => {
  return user?.about && null ? (
    <div className='w-full mx-0	my-4	max-w-4xl	bg-gray-800 rounded shadow p-8'>
      <h4>About</h4>
      <p>{user?.about}</p>
    </div>
  ) : null
}

export default About
