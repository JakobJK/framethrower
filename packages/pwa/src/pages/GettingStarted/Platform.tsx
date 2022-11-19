import * as React from 'react'
const mac = require('../../static/apple.svg')
const windows = require('../../static/windows.svg')
const linux = require('../../static/linux.svg')

const Platform = ({
  currentOs,
  setCurrentOs,
}: {
  currentOs: string
  setCurrentOs: (os: string) => void
}) => {
  const handleChange = os => {
    setCurrentOs(os)
  }

  return (
    <div className='flex justify-around p-8'>
      <div
        className={
          currentOs === 'windows'
            ? 'opacity-100'
            : 'opacity-50 hover:opacity-100'
        }
      >
        <button onClick={() => handleChange('windows')}>
          <img aria-label='windows' src={windows} />
        </button>
      </div>
      <div
        className={
          currentOs === 'mac' ? 'opacity-100' : 'opacity-50 hover:opacity-100'
        }
      >
        <button onClick={() => handleChange('mac')}>
          <img arlia-label='mac' src={mac} />
        </button>
      </div>
      <div
        className={
          currentOs === 'linux' ? 'opacity-100' : 'opacity-50 hover:opacity-100'
        }
      >
        <button onClick={() => handleChange('linux')}>
          <img arial-label='linux' src={linux} />
        </button>
      </div>
    </div>
  )
}

export default Platform
