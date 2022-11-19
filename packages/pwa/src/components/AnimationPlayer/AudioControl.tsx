import * as React from 'react'

import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeDown from '@material-ui/icons/VolumeDown'
import VolumeMute from '@material-ui/icons/VolumeMute'
import VolumeUp from '@material-ui/icons/VolumeUp'

import Slider from '@material-ui/core/Slider'
const { useState, forwardRef } = React

const AudioControl = ({ audio }, ref) => {
  const [volume, setVolume] = useState(audio ? 100 : 0)

  return (
    <div className='w-full flex justify-between'>
      <Slider
        id='audio'
        min={0}
        max={100}
        disabled={!audio}
        defaultValue={audio ? 100 : 0}
        onChange={(_event, n) => {
          if (ref.current) {
            ref.current.volume = Number(n) / 100
            setVolume(Number(n))
          }
        }}
      />
      <div className='px-4 w-1/6'>
        {volume === 0 && (
          <VolumeOffIcon className={audio ? '' : 'opacity-50'} />
        )}
        {volume > 0 && volume < 35 && <VolumeMute />}
        {volume > 35 && volume < 70 && <VolumeDown />}
        {volume > 70 && <VolumeUp />}
      </div>
    </div>
  )
}

export default forwardRef(AudioControl)
