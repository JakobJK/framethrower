import * as React from 'react'

const Requests = ({ currentOs }: { currentOs: string }) => {
  return (
    <div className='px-8'>
      <p className='py-4'>
        With PIP installed, we’ll be able to install the requests module from
        Maya’s version of Python, using the following command in the command
        prompt, {currentOs === 'windows' ? 'again' : ''} executed from the bin
        location:
      </p>
      <p className='bg-opacity-25 bg-gray-900 p-2 my-4 rounded'>
        {currentOs === 'mac' &&
          '/Applications/Autodesk/maya2020/bin/mayapy pip install requests'}
        {currentOs === 'windows' && 'mayapy -m pip install requests'}
      </p>
    </div>
  )
}

export default Requests
