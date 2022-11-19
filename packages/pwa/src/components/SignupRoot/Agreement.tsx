import * as React from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '../../elements/Button'

const { useState } = React

const Agreement = ({ setAgreed }) => {
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='w-full mx-0	my-4	max-w-4xl	bg-gray-800 rounded shadow py-16 px-24'>
        <h1 className='py-4 px-10 text-2xl'>Welcome to Framethrower!</h1>
        <p className='p-4'>
          Please be respectful of your fellow animator. Personal attacks or
          retaliations and derogatory behavior such as racist or sexist posts or
          comments will not be tolerated.
        </p>
        <p className='p-4'>
          We will not tolerate images, links or information regarding or leading
          to explicit materials, please note that animators come in almost all
          ages from all walks of life, and avoid posting or submitting extreme
          violent, highly sexual or otherwise highly offensive content.
        </p>
        <p className='p-4'>
          Likewise do not post any images, information or material of any kind
          protected by copyright. We aim to support the animators and the
          animation industry, not undermine it.
        </p>
        <p className='p-4'>
          Please refrain from spamming and keep comments on topic. This
          community is about the members and their work on the site, it does not
          serve as a platform for alternative agendas or discussions.
        </p>
        <p className='p-4'>
          At Framethrower we aim to be an open, supportive and helpful community
          for animators, and while we welcome any criticism our members may
          have, we will want to ensure that all members have an equally
          beneficial and positive experience.
        </p>
        <div className='flex p-8'>
          <Checkbox
            checked={checked}
            color='primary'
            onChange={e => {
              setChecked(e.target.checked)
            }}
          />
          <label htmlFor='agreed_user_signup' className='pl-8 pr-16'>
            I agree to honor the Rules of Conduct, listed above and the
            Framethrower{' '}
            <Link className='underline' to='/termsofservice'>
              Terms of Conditions
            </Link>
            {` and `}
            <Link className='underline' to='/privacypolicy'>
              Privacy Policy.
            </Link>
          </label>
        </div>
        <br />
        {error && (
          <p className='p-4'>
            You have to agree to how you should behave here, you doufus
          </p>
        )}
        <p className='p-4'>
          <Button
            variant='outlined'
            onClick={() => {
              if (checked) {
                setAgreed(true)
              } else {
                setError(true)
              }
            }}
          >
            Continue To Sign up
          </Button>
        </p>
      </div>
    </div>
  )
}

export default Agreement
