import * as React from 'react'

const changedirectory = require('../../static/changedirectory.png')

const InstallPip = ({ currentOs }: { currentOs: string }) => {
  return (
    <div className='px-8 py-4'>
      <p>
        To enable the Framethrower plugin to upload playblasts to our servers,
        we’ll need the python module requests for connecting with servers.
        However, in order to install external modules, PIP (python package
        manager) is needed, so we'll start by installing PIP.
      </p>
      <ol className='list-decimal p-8'>
        <li className='py-4'>
          Save get-pip.py, by right clicking and choosing save as on the
          following link:
          <div className='p-4'>
            <a
              className='hover:underline text-gray-400 hover:text-white'
              href='https://bootstrap.pypa.io/pip/2.7/get-pip.py'
            >
              bootstrap.pypa.io/pip/2.7/get-pip.py
            </a>
          </div>
        </li>
        <li className='py-4'>
          Move the downloaded get-pip.py file to your maya bin directory,
          usually located at:
          <p className='bg-opacity-25 bg-gray-900 p-2 my-2 rounded'>
            C:\Program Files\Autodesk\Maya2020\bin
          </p>
        </li>
        <li className='py-4'>
          <p className='pb-4'>
            In a Windows command prompt, navigate to the bin folder and execute
            the downloaded get-pip.py from there with the following command:
          </p>
          <p className='bg-opacity-25 bg-gray-900 p-2 py-2 rounded'>
            mayapy.exe get-pip.py
          </p>
          <p className='py-4 text-sm font-light'>
            Hint: use the change directory command{' '}
            <span className='font-bold'>“cd”</span> to navigate to the bin
            folder. (Use <span className='font-bold'>"cd .."</span> to navigate
            one directory up. See pic)
          </p>
          <img
            aria-label='Change directory'
            className='w-full h-auto px-4 pt-4'
            src={changedirectory}
          />
        </li>
      </ol>
    </div>
  )
}

export default InstallPip
