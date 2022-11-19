import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
const NotFound = require('../../static/noanimations.png')

const FourOhFour = (props: RouteComponentProps) => {
  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='w-full mx-0	my-4	max-w-2xl	bg-gray-800 rounded shadow p-8'>
        <div className='flex justify-center p-4'>
          <h1>404 - Page not found</h1>
        </div>
        <div className='flex justify-center p-4'>
          <img aria-label='404 illustration' src={NotFound} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(FourOhFour)
