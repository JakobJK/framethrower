import * as React from 'react'
const { useState, useEffect, useRef } = React

const Timeline = (props: {
  play: boolean
  setPlay: (val: boolean) => void
  fps: string
  videoRef: React.MutableRefObject<HTMLVideoElement>
  drag: boolean
  currentFrame: number
  setDrag: (val: boolean) => void
  setCurrentFrame: (val: number) => void
  minFrame: number
  maxFrame: number
  startFrame: number
  offset: number
  setStartFrame: (val: number) => void
  endFrame: number
  setEndFrame: (val: number) => void
}) => {
  const {
    play,
    setPlay,
    fps,
    videoRef,
    currentFrame,
    setCurrentFrame,
    minFrame,
    maxFrame,
    startFrame,
    setStartFrame,
    endFrame,
    panels,
    offset,
    setEndFrame,
  } = props

  const [position, setPosition] = useState('0px')
  const [localCurrentFrame, setLocalCurrentFrame] = useState(currentFrame)
  const [scrubbing, setScrubbing] = useState(false)
  const [toChangeCurrentFrame, setToChangeCurrentFrame] = useState(currentFrame)
  const [localMaxFrame, setLocalMaxFrame] = useState(maxFrame)
  const [localMinFrame, setLocalMinFrame] = useState(minFrame)
  const requestRef = useRef() as React.MutableRefObject<number>
  const clientX = useRef(0)
  const needForRAF = useRef(true)

  const frameCounter = () => {
    const frame = Math.floor(videoRef.current.currentTime * eval(fps)) + 1
    setLocalCurrentFrame(frame)
    setPosition(`${(((frame - 1) / maxFrame) * 100).toPrecision(6)}%`)
    if (play) {
      requestRef.current = requestAnimationFrame(frameCounter)
    }
  }

  const updateFrame = () => {
    needForRAF.current = true
    setCurrentFrame(Math.floor((clientX.current / 1280) * maxFrame))
  }

  useEffect(() => {
    setLocalMinFrame(startFrame)
  }, [startFrame])

  useEffect(() => {
    setLocalMaxFrame(endFrame)
  }, [endFrame])

  useEffect(() => {
    setLocalCurrentFrame(currentFrame)
    setToChangeCurrentFrame(currentFrame)
    setPosition(`${(((currentFrame - 1) / maxFrame) * 100).toPrecision(6)}%`)
  }, [currentFrame])

  useEffect(() => {
    if (play) {
      requestRef.current = requestAnimationFrame(frameCounter)
    } else {
      cancelAnimationFrame(requestRef.current)
    }
  }, [play])

  return (
    <>
      {panels[localCurrentFrame] && (
        <img
          className='absolute z-20'
          src={panels[localCurrentFrame]}
          width='1280'
          height='720'
        />
      )}
      <div>
        <div
          className='absolute h-8 w-full z-50'
          onMouseDown={() => {
            if (play) {
              setPlay(false)
            }
            setScrubbing(true)
          }}
          onMouseMove={e => {
            if (scrubbing) {
              clientX.current = e.nativeEvent.offsetX
              if (needForRAF.current === true) {
                requestAnimationFrame(updateFrame)
                needForRAF.current = false
              }
            }
          }}
          onMouseUp={e => {
            setScrubbing(false)
          }}
          onMouseLeave={e => {
            setScrubbing(false)
          }}
        />

        {Object.keys(panels).map(x => {
          const pos = `${(((parseInt(x) - 1) / maxFrame) * 100).toPrecision(
            6
          )}%`
          return (
            <div
              className='absolute bg-red-600 h-8 z-30'
              style={{
                left: pos,
                width: `${(1280 / maxFrame).toPrecision(6)}px`,
              }}
            />
          )
        })}

        <div
          className='absolute h-8 z-30 bg-orange-500'
          style={{
            left: position,
            width: `${(1280 / maxFrame).toPrecision(6)}px`,
          }}
        ></div>
      </div>
      <div className='flex w-full bg-green-400 h-8'>
        <div
          className='grid w-full bg-gray-800'
          style={{
            gridTemplateColumns: `${((startFrame - minFrame) / maxFrame) *
              100}% ${((endFrame - startFrame + 1) / maxFrame) *
              100}% ${((maxFrame - endFrame) / maxFrame) * 100}%`,
          }}
        >
          <div className='bg-gray-800' />
          <div className='bg-gray-600' />
          <div className='bg-gray-800' />
        </div>
      </div>
      <div className='flex h-8 justify-between bg-gray-800'>
        <input
          disabled={play}
          className='bg-gray-700 w-20 pl-4 no-arrow'
          type='number'
          min={minFrame}
          max={maxFrame - 1}
          step='1'
          value={localMinFrame + offset}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              const target = e.target as HTMLElement
              target.blur()
            }
          }}
          onBlur={e => {
            const newVal = Number(e.target.value)
            if (newVal > endFrame + offset) {
              setStartFrame(endFrame - 1)
              setLocalMinFrame(endFrame - 1)
            } else {
              setStartFrame(newVal - offset)
            }
          }}
          onChange={e => {
            setLocalMinFrame(Number(e.target.value) - offset)
          }}
        />

        <div className='flex justify-end items-center'>
          {play ? (
            <input
              id='displayCurrentFrame'
              disabled={true}
              className=' bg-gray-700 text-center w-20 pr-2 bg-opacity-0 border-gray-600 rounded border'
              max={maxFrame + offset}
              min={minFrame + offset}
              value={localCurrentFrame + offset}
            />
          ) : (
            <input
              id='editCurrentFrame'
              disabled={play}
              className=' bg-gray-700 text-center w-20 pr-2 bg-opacity-0 border-gray-600 rounded border'
              max={maxFrame + offset}
              min={minFrame + offset}
              value={toChangeCurrentFrame + offset}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  const target = e.target as HTMLElement
                  target.blur()
                }
              }}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (Number(e.target.value) > localMaxFrame + offset) {
                  setCurrentFrame(localMaxFrame)
                } else if (Number(e.target.value) < localMinFrame + offset) {
                  setCurrentFrame(localMinFrame)
                } else {
                  setCurrentFrame(Number(e.target.value) - offset)
                }
              }}
              onChange={e =>
                setToChangeCurrentFrame(Number(e.target.value) - offset)
              }
            />
          )}
        </div>
        <input
          disabled={play}
          className='bg-gray-700 text-right w-20 pr-2'
          type='number'
          min={minFrame + 1}
          max={maxFrame - minFrame}
          step='1'
          value={localMaxFrame + offset}
          onKeyPress={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
              const target = e.target as HTMLElement
              target.blur()
            }
          }}
          onBlur={e => {
            const newVal = Number(e.target.value)
            if (newVal < startFrame + offset) {
              setEndFrame(startFrame + 1)
              setLocalMaxFrame(startFrame + 1)
            } else if (newVal > endFrame + offset) {
              setEndFrame(maxFrame)
              setLocalMaxFrame(maxFrame)
            } else {
              setEndFrame(newVal - offset)
            }
          }}
          onChange={e => setLocalMaxFrame(Number(e.target.value) - offset)}
        />
      </div>
    </>
  )
}

export default Timeline
