import * as React from 'react'

const registrationClosed = require('../../static/registrationClosed.png')

const ClosedRegistration = () => {
  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='w-full	max-w-4xl	bg-gray-800 rounded shadow py-16 px-24'>
        <div className='flex flex-col justify-center items-center '>
          <div>
            <img
              aria-label='Registration closed'
              src={registrationClosed}
              className=''
            />
          </div>
          <h1 className='p-4 text-lg font-semibold'>
            Registration is currently closed
          </h1>
          <div className='px-4 py-2'>
            We close registration for various reasons. Mostly to make sure we
            grow at a pace we're comfortable with! You can always join our
            discord channel to stay in direct touch with our community! We
            encourage you to check back soon, as we do our best to keep
            registration open!
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClosedRegistration
