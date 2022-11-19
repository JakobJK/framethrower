import * as React from 'react'
import Slider from '@material-ui/core/Slider'
import Button from '../../elements/Button'

const Settings = ({
  displaySettings,
}: {
  displaySettings: {
    setGamma: (nr: number) => void
    gamma: number
    setBrightness: (nr: number) => void
    brightness: number
    setContrast: (nr: number) => void
    contrast: number
  }
}) => {
  const {
    gamma,
    setGamma,
    brightness,
    setBrightness,
    contrast,
    setContrast,
  } = displaySettings

  return (
    <div className='block absolute p-2 bottom-32 w-96 h-60 bg-gray-800 z-20 rounded shadow'>
      <h3>Brightness</h3>
      <Slider
        onChange={(e, v) => {
          setBrightness(v as number)
        }}
        min={0}
        step={0.01}
        max={2}
        value={brightness}
      />
      <h3>Gamma</h3>
      <Slider
        onChange={(e, v) => {
          setGamma(v as number)
        }}
        min={-100}
        step={5}
        max={100}
        value={gamma}
      />
      <h3>Contrast</h3>
      <Slider
        onChange={(e, v) => {
          setContrast(v as number)
        }}
        min={0}
        step={0.01}
        max={2}
        value={contrast}
      />
      <Button
        variant='outlined'
        onClick={() => {
          setBrightness(1)
          setContrast(1)
          setGamma(1)
        }}
      >
        Reset
      </Button>
    </div>
  )
}

export default Settings
