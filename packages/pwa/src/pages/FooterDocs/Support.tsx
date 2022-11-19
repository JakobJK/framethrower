import * as React from 'react'
import { Link } from 'react-router-dom'

import Readlayout from '../../elements/Readlayout'
import withTitle from '../../context/withTitle'

import FAQ from './FAQ'

const Support = () => {
  return (
    <Readlayout>
      <h1 className='text-lg p-8'>Support</h1>
      <p className='px-8 py-2 leading-6 tracking-wide'>
        We're always in a state of constant panic, and we can only image you are
        too! If you don't wanna be alone, feel free to reach out at{' '}
        <a
          className=' text-white text-opacity-70 hover:text-opacity-100 hover:underline'
          href='mailto:support@framethrower.io'
        >
          support@framethrower.io
        </a>{' '}
        and/or join our{' '}
        <Link
          to='/discord'
          className=' text-white text-opacity-70 hover:text-opacity-100 hover:underline'
        >
          Discord Channel
        </Link>
        .
      </p>
      <FAQ />
    </Readlayout>
  )
}

export default withTitle(Support, 'Support')
