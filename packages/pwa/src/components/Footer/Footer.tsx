import * as React from 'react'
import { Link } from 'react-router-dom'

const date = new Date()

const Footer = () => (
  <div className='w-full text-center pt-8 pb-4'>
    <span className='text-gray-400 text-opacity-50'>
      Copyright &copy; {date.getFullYear()} Framethrower
    </span>
    {[
      { display: 'About', url: 'about' },
      { display: 'Community Guidelines', url: 'guidelines' },
      { display: 'Support', url: 'support' },
      { display: 'Terms of Service', url: 'termsofservice' },
      { display: 'Privacy Policy', url: 'privacypolicy' },
    ].map(x => {
      return (
        <div className='inline-block' key={x.url}>
          <span className='text-gray-400 px-4 text-opacity-60'> | </span>
          <Link
            to={`/${x.url}`}
            className='text-gray-400 text-opacity-50 hover:text-opacity-80 hover:underline'
          >
            {x.display}
          </Link>
        </div>
      )
    })}
  </div>
)
export default Footer
