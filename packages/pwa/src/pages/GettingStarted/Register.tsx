import * as React from 'react'
import WithPermission from '../../context/WithPermission'
import { Link } from 'react-router-dom'

const Register = ({ currentOs }: { currentOs: string }) => {
  return (
    <div className='px-4'>
      <h3 className='text-lg p-4'>
        Create and activate your Framethrower Profile
      </h3>
      <p className='px-4'>
        Click the user icon in the upper right corner and sign up with an
        awesome username and your own awesome email. After registration login
        using your Email and Password!
      </p>
      <h3 className='text-lg p-4'>Download the Framethrower Plugin</h3>
      <p className='px-4'>
        After loggin in you can head over to your user settings{' '}
        <Link
          to='/settings/plugin'
          className='hover:underline hover:text-white text-gray-400'
        >
          Plugin.
        </Link>{' '}
        Follow the instructions on the plug in page to succesfully download the
        plugin!
      </p>
    </div>
  )
}

export default Register
