import * as React from 'react'
const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className='bg-green-600 text-white p-8 w-full flex justify-center'>
      {message}
    </div>
  )
}

export default SuccessMessage
