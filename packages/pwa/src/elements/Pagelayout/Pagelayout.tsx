import * as React from 'react'

const Pagelayout = ({ children }) => {
  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div className='w-full mx-0	my-4	max-w-4xl	bg-gray-800 rounded shadow p-8 leading-5'>
        {children}
      </div>
    </div>
  )
}

export default Pagelayout
