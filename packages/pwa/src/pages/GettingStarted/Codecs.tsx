import * as React from 'react'
const quicktime = require('../../static/quicktime.png')

const Codecs = (props: { currentOs: string }) => {
  return (
    <div className='p-4'>
      <p className='px-4'>
        To obtain the codecs, needed for playblasting in the proper format,
        we'll install the Quicktime codecs -{' '}
        <span className='font-bold italic'>not</span> the actual Quicktime
        Player, just the codecs. To do so:
      </p>
      <ol className='list-decimal px-8'>
        <li className='my-4'>
          Download the latest Quicktime for Windows from{' '}
          <a
            className='hover:underline text-gray-400 hover:text-white'
            target='_blank'
            href='https://support.apple.com/downloads/quicktime'
          >
            support.apple.com/downloads/quicktime.
          </a>
        </li>
        <li className='my-4'>
          Start the installation. When asked choose “Custom” installation.
        </li>
      </ol>
      <p className='px-4'>
        This will allow you to <span className='font-bold italic'>only</span>{' '}
        download the “Quicktime Essentials” (leave option for this as is) and
        select “Entire feature will be unavailable” for both “Quicktime Player”
        and “Optimal Quicktime Features” (See pic).
      </p>
      <div className='flex justify-center pt-4'>
        <img arial-label='quicktime' src={quicktime} />
      </div>
    </div>
  )
}

export default Codecs
