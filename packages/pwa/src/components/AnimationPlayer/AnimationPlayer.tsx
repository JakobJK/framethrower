import * as React from 'react'
import { GlobalHotKeys } from 'react-hotkeys'
import Button from '../../elements/Button'
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import BackspaceIcon from '@material-ui/icons/Backspace'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import BrushIcon from '@material-ui/icons/Brush'
import HelpIcon from '@material-ui/icons/Help'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Clear from '@material-ui/icons/Clear'
import FlipIcon from '@material-ui/icons/Flip'
import PauseIcon from '@material-ui/icons/Pause'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Timeline from './Timeline'
import Help from './Help'
import VideoElement from './VideoElement'
import AudioControl from './AudioControl'
import Drawing from './Drawing'
import usePrevious from '../../util/usePrevious'

const { useState, useEffect, useRef } = React

const AnimationPlayer = ({
  audio,
  frameRate: fps,
  videoUrl,
  minFrame: calcMinFrame,
  maxFrame: calcMaxFrame,
  submission,
}: {
  audio: boolean
  frameRate: string
  videoUrl: string
  minFrame: number
  maxFrame: number
  submission: string
}) => {
  const minFrame = 1
  const maxFrame = calcMaxFrame - calcMinFrame + 1
  const offset = calcMinFrame - 1
  const [isLoading, setIsLoading] = useState(true)

  const [panels, setPanels] = useState({})
  const [help, setHelp] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false)
  const [erase, setErase] = useState(false)
  const [play, setPlay] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(1)
  const [drawActive, setDrawActive] = useState(false)
  const [startFrame, setStartFrame] = useState(1)
  const [endFrame, setEndFrame] = useState(maxFrame)
  const [startTime, setStartTime] = useState(1)
  const [endTime, setEndTime] = useState(0)
  const [flipScreen, setFlipScreen] = useState(false)
  const [penColor, setPenColor] = useState('#F00')
  const [penSize, setPenSize] = useState(3)
  const [showBrushColorPopup, setShowBrushColorPopup] = useState(false)
  const [showBrushSizePopup, setShowBrushSizePopup] = useState(false)

  const requestRef = useRef() as React.MutableRefObject<number>
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>
  const animationCanvasRef = useRef() as React.MutableRefObject<
    HTMLCanvasElement
  >
  const snapShotRef = useRef() as React.MutableRefObject<HTMLCanvasElement>
  const videoRef = useRef() as React.MutableRefObject<HTMLVideoElement>

  const previousCurrentFrame = usePrevious(currentFrame)

  function isCanvasPainted(canvas) {
    const context = canvas.getContext('2d')

    const pixelBuffer = new Uint32Array(
      context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
    )

    return pixelBuffer.some(color => color !== 0)
  }

  useEffect(() => {
    videoRef.current.playbackRate = playbackSpeed
  }, [playbackSpeed])

  useEffect(() => {
    setEndFrame(maxFrame)
    setStartFrame(minFrame)
  }, [minFrame, maxFrame])

  useEffect(() => {
    setPlay(false)
  }, [submission])

  useEffect(() => {
    if (isCanvasPainted(canvasRef.current)) {
      const newPanels = { ...panels }
      newPanels[previousCurrentFrame || 0] = canvasRef?.current?.toDataURL()
      setPanels(newPanels)
      const sspCtx = canvasRef.current.getContext('2d')
      sspCtx?.clearRect(0, 0, 1280, 720)
    } else {
      if (panels.hasOwnProperty(currentFrame)) {
        const newPanels = { ...panels }
        delete newPanels[currentFrame]
        setPanels(newPanels)
      }
    }

    if (panels.hasOwnProperty(currentFrame)) {
      const snapShotPanel = canvasRef.current
      const sspCtx = snapShotPanel.getContext('2d')
      const newImg = new Image()
      newImg.src = panels[currentFrame]
      sspCtx.drawImage(newImg, 0, 0)
    }

    if (videoRef.current !== undefined) {
      videoRef.current.currentTime = (
        (currentFrame - 1) / eval(fps) +
        0.0001
      ).toFixed(6)
    }
  }, [currentFrame])

  useEffect(() => {
    setPlay(false)
    const newTime = Number(((startFrame - 1) / eval(fps)).toFixed(6))
    if (videoRef.current !== undefined) {
      if (videoRef.current.currentTime < newTime) setCurrentFrame(startFrame)
      setStartTime(newTime)
    }
  }, [startFrame])

  useEffect(() => {
    setPlay(false)
    const newTime = Number((endFrame / eval(fps)).toFixed(6))
    if (videoRef.current !== undefined) {
      if (videoRef.current.currentTime > newTime) setCurrentFrame(endFrame)
    }
    setEndTime(newTime)
  }, [endFrame])

  useEffect(() => {
    if (drawActive || erase) {
      setPlay(false)
      const ctx = canvasRef?.current?.getContext('2d')
      if (ctx) {
        ctx.globalCompositeOperation = erase ? 'destination-out' : 'source-over'
        ctx.lineWidth = penSize * 2
        ctx.strokeStyle = penColor
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
      }
    }
  }, [drawActive, penColor, penSize, erase])

  const animate = (time: number) => {
    if (
      videoRef.current.currentTime > endTime ||
      videoRef.current.currentTime < startTime
    ) {
      videoRef.current.currentTime = startTime
    }
    requestRef.current = requestAnimationFrame(animate)
  }

  const clearPaintingCanvas = () => {
    if (panels.hasOwnProperty(currentFrame)) {
      const newPanels = { ...panels }
      delete newPanels[currentFrame]
      setPanels(newPanels)
    }
    const snapShotPanel = canvasRef.current
    const sspCtx = snapShotPanel.getContext('2d')
    sspCtx.clearRect(0, 0, 1280, 720)
  }

  const snapShot = () => {
    if (drawActive) {
      const snapShotPanel = snapShotRef.current
      const sspCtx = snapShotPanel.getContext('2d')
      sspCtx.drawImage(videoRef.current, 0, 0)
      sspCtx.globalCompositeOperation = 'source-over'
      sspCtx.drawImage(canvasRef.current, 0, 0)
      snapShotPanel.toBlob(blob => {
        const item = new ClipboardItem({ 'image/png': blob })
        navigator.clipboard.write([item])
      })
      sspCtx.clearRect(0, 0, 1280, 720)
    }
  }

  useEffect(() => {
    const player = videoRef.current
    if (videoRef.current !== undefined) {
      if (play) {
        if (isCanvasPainted(canvasRef.current)) {
          const newPanels = { ...panels }
          newPanels[previousCurrentFrame || 0] = canvasRef?.current?.toDataURL()
          setPanels(newPanels)
          clearPaintingCanvas()
        }
        requestRef.current = requestAnimationFrame(animate)
        videoRef.current.play()
      } else {
        cancelAnimationFrame(requestRef.current)
        let frame = Math.ceil(player.currentTime * eval(fps))
        if (frame === 0) frame = 1
        frame > endFrame ? setCurrentFrame(startFrame) : setCurrentFrame(frame)
        videoRef.current.pause()
        const ctx = animationCanvasRef?.current?.getContext('2d')
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0)
        }
      }
    }
  }, [play])

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d')
    const sspCtx = snapShotRef?.current?.getContext('2d')
    if (ctx && sspCtx) {
      sspCtx.translate(1280, 0)
      sspCtx.scale(-1, 1)
      sspCtx.drawImage(canvasRef.current, 0, 0)
      ctx.clearRect(0, 0, 1280, 720)
      ctx.drawImage(snapShotRef.current, 0, 0)
      sspCtx.clearRect(0, 0, 1280, 720)
      sspCtx.translate(1280, 0)
      sspCtx.scale(-1, 1)
    }
  }, [flipScreen])

  const previousFrame = () => {
    if (play) setPlay(false)
    currentFrame <= startFrame
      ? setCurrentFrame(endFrame)
      : setCurrentFrame(currentFrame - 1)
  }
  const nextFrame = () => {
    if (play) setPlay(false)
    currentFrame >= endFrame
      ? setCurrentFrame(startFrame)
      : setCurrentFrame(currentFrame + 1)
  }
  const toggleDraw = () => {
    if (!drawActive) {
      setErase(false)
    }

    setDrawActive(!drawActive)
  }

  const toggleErase = () => {
    if (!erase) {
      setDrawActive(false)
    }
    setErase(!erase)
  }

  const togglePlay = () => {
    setPlay(!play)
  }
  const flip = () => {
    setFlipScreen(!flipScreen)
  }

  const constraintMinFrame = () => {
    if (startFrame === minFrame) {
      setStartFrame(currentFrame)
    } else {
      setStartFrame(minFrame)
    }
  }

  const constraintMaxFrame = () => {
    if (endFrame === maxFrame) {
      setEndFrame(currentFrame)
    } else {
      setEndFrame(maxFrame)
    }
  }

  const keyMap = {
    nextFrame: '.',
    previousFrame: ',',
    toggleHelp: 'h',
    toggleDraw: 'b',
    toggleErase: 'e',
    togglePlay: 'space',
    clearCanvas: 'del',
    flip: 'm',
    constraintMaxFrame: ']',
    constraintMinFrame: '[',
  }

  const handlers = {
    nextFrame: () => {
      if (play) return
      nextFrame()
    },
    previousFrame: () => {
      if (play) return
      previousFrame()
    },
    toggleDraw: () => {
      if (play) return
      toggleDraw()
    },
    toggleErase: () => {
      if (play) return
      toggleErase()
    },
    togglePlay: e => {
      e.preventDefault()
      if (isLoading) return
      togglePlay()
    },
    flip: () => flip(),
    constraintMaxFrame: () => {
      if (play) return
      constraintMaxFrame()
    },
    constraintMinFrame: () => {
      if (play) return
      constraintMinFrame()
    },
    clearCanvas: () => {
      clearPaintingCanvas()
    },
    toggleHelp: () => {
      setHelp(!help)
    },
  }

  return (
    <GlobalHotKeys
      keyMap={keyMap}
      handlers={handlers}
      className='focus:outline-none'
      allowChanges={true}
    >
      <div className='shadow rounded bg-gray-800 flex flex-col justify-between w-full'>
        <div className='m-auto w-screen-xl h-screen-xl flex' id='view'>
          <VideoElement
            setIsLoading={setIsLoading}
            ref={videoRef}
            url={videoUrl}
            setEndTime={setEndTime}
            setDuration={setDuration}
            flipScreen={flipScreen}
          />
          <canvas
            className='absolute z-10'
            width='1280'
            height='720'
            ref={snapShotRef}
          />
          <Drawing drawActive={drawActive} ref={canvasRef} erase={erase} />
        </div>
        <Timeline
          play={play}
          panels={panels}
          setPlay={setPlay}
          duration={duration}
          fps={fps}
          offset={offset}
          setCurrentFrame={setCurrentFrame}
          currentFrame={currentFrame}
          maxFrame={maxFrame}
          minFrame={minFrame}
          startFrame={startFrame}
          setStartFrame={setStartFrame}
          videoRef={videoRef}
          endFrame={endFrame}
          setEndFrame={setEndFrame}
        />
        <div className='w-full p-4'>
          <form>
            <table className='w-full'>
              <tbody>
                <tr>
                  <td>
                    <Button
                      id='help'
                      onMouseDown={e => e.preventDefault()}
                      variant={help ? 'contained' : 'outlined'}
                      onClick={() => setHelp(!help)}
                    >
                      <HelpIcon />
                    </Button>
                    {help && (
                      <ClickAwayListener
                        onClickAway={() => {
                          setHelp(false)
                        }}
                      >
                        <div>
                          <Help />
                        </div>
                      </ClickAwayListener>
                    )}
                  </td>
                  <td>
                    <Button
                      id='play'
                      disabled={isLoading}
                      title='Play (Shortcut: space)'
                      onMouseDown={e => e.preventDefault()}
                      onClick={e => {
                        e.preventDefault()
                        togglePlay()
                      }}
                    >
                      {play ? <PauseIcon /> : <PlayArrowIcon />}
                    </Button>
                  </td>
                  <td>
                    <ButtonGroup>
                      <Button
                        id='capStart'
                        disabled={play}
                        title='Set Minimum Frame (Shortcut: "[" )'
                        variant={startFrame === minFrame ? 'text' : 'contained'}
                        onClick={constraintMinFrame}
                        onMouseDown={e => e.preventDefault()}
                      >
                        [
                      </Button>
                      <Button
                        id='capEnd'
                        disabled={play}
                        title='Set Maximum Frame (Shortcut: "]" )'
                        variant={endFrame === maxFrame ? 'text' : 'contained'}
                        onClick={constraintMaxFrame}
                        onMouseDown={e => e.preventDefault()}
                      >
                        ]
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td>
                    <ButtonGroup>
                      <Button
                        id='previousFrame'
                        disabled={play}
                        onClick={previousFrame}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <SkipPreviousIcon />
                      </Button>
                      <Button
                        id='nextFrame'
                        disabled={play}
                        onClick={nextFrame}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <SkipNextIcon />
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td>
                    <ButtonGroup>
                      <Button
                        id='brush'
                        disabled={play}
                        onMouseDown={e => e.preventDefault()}
                        variant={drawActive ? 'contained' : 'outlined'}
                        onClick={toggleDraw}
                      >
                        <BrushIcon />
                      </Button>
                      <Button
                        id='erase'
                        variant={erase ? 'contained' : 'outlined'}
                        disabled={play}
                        onMouseDown={e => e.preventDefault()}
                        onClick={toggleErase}
                      >
                        <svg
                          height='20'
                          width='20'
                          className={play ? 'opacity-50' : ''}
                        >
                          <Clear />
                        </svg>
                      </Button>
                      {showBrushSizePopup && (
                        <ClickAwayListener
                          onClickAway={() => {
                            setShowBrushSizePopup(false)
                          }}
                        >
                          <div className='relative'>
                            <div className='block absolute bottom-0 mb-40 h-44 w-16 bg-gray-800 shadoe rounded z-40'>
                              {[1, 3, 6, 10].map(x => (
                                <Button
                                  key={`size_${x}`}
                                  onClick={() => {
                                    setPenSize(x)
                                    setShowBrushSizePopup(false)
                                  }}
                                >
                                  <svg height='30' width='30'>
                                    <circle
                                      cx='15'
                                      cy='15'
                                      r={x}
                                      fill='#E0E0E0'
                                    />
                                  </svg>
                                </Button>
                              ))}
                            </div>
                          </div>
                        </ClickAwayListener>
                      )}
                      <Button
                        id='showBrushSize'
                        disabled={play}
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => {
                          setShowBrushSizePopup(!showBrushSizePopup)
                        }}
                      >
                        <svg
                          height='20'
                          width='20'
                          className={play ? 'opacity-50' : ''}
                        >
                          <circle cx='10' cy='10' r={penSize} fill='#E0E0E0' />
                        </svg>
                      </Button>
                      {showBrushColorPopup && (
                        <ClickAwayListener
                          onClickAway={() => {
                            setShowBrushColorPopup(false)
                          }}
                        >
                          <div className='relative'>
                            <div className='bottom-32 absolute bottom-0 mb-40 w-32 bg-gray-800 shadow rounded z-40'>
                              {[
                                { name: 'red', hex: 'red' },
                                { name: 'green', hex: 'green' },
                                { name: 'blue', hex: 'blue' },
                                { name: 'violet', hex: 'violet' },
                                { name: 'black', hex: 'black' },
                                { name: 'white', hex: 'white' },
                                { name: 'yellow', hex: 'yellow' },
                                { name: 'purple', hex: 'purple' },
                              ].map(x => {
                                return (
                                  <Button
                                    key={`color_${x.name}`}
                                    onClick={() => {
                                      setPenColor(x.hex)
                                      setShowBrushColorPopup(false)
                                    }}
                                  >
                                    <div
                                      className={`h-8 w-8 border-none rounded`}
                                      style={{ backgroundColor: x.hex }}
                                    />
                                  </Button>
                                )
                              })}
                            </div>
                          </div>
                        </ClickAwayListener>
                      )}
                      <Button
                        disabled={play}
                        id='showBrushColor'
                        onMouseDown={e => e.preventDefault()}
                        variant={showBrushColorPopup ? 'contained' : 'outlined'}
                        onClick={() =>
                          setShowBrushColorPopup(!showBrushColorPopup)
                        }
                      >
                        <div
                          className={` h-6 w-6 border-solid border-gray-500 m-auto border rounded ${
                            play ? 'opacity-50' : ''
                          }`}
                          style={{ backgroundColor: penColor }}
                        >
                          {' '}
                        </div>
                      </Button>

                      <Button
                        id='snapshot'
                        onMouseDown={e => e.preventDefault()}
                        disabled={play}
                        onClick={e => {
                          snapShot()
                        }}
                      >
                        <AssignmentReturnedIcon />
                      </Button>
                      <Button
                        id='clear'
                        disabled={play}
                        onMouseDown={e => e.preventDefault()}
                        variant='outlined'
                        onClick={clearPaintingCanvas}
                      >
                        <BackspaceIcon />
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td>
                    <img
                      src={panels[currentFrame]}
                      width={100}
                      height={100}
                      className=' hidden'
                    />
                    <ButtonGroup>
                      <Button
                        onClick={flip}
                        id='flipscreen'
                        variant={flipScreen ? 'contained' : 'outlined'}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <FlipIcon />
                      </Button>
                      {showPlaybackSpeed && (
                        <ClickAwayListener
                          onClickAway={() => {
                            setShowPlaybackSpeed(false)
                          }}
                        >
                          <div className='relative'>
                            <div className='bottom-32 absolute bottom-0 mb-40 w-20 bg-gray-800 shadow rounded z-40'>
                              {[0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0]
                                .map(x => {
                                  return (
                                    <Button
                                      fullWidth
                                      key={`playbackspeed_${x}`}
                                      onClick={() => {
                                        setPlaybackSpeed(x)
                                        setShowPlaybackSpeed(false)
                                      }}
                                    >
                                      <div className='px-2 flex justify-between w-full items-end'>
                                        <span className=' text-xs font-semibold text-gray-400 justify-items-end'>
                                          x
                                        </span>
                                        <span>
                                          {x < 1
                                            ? x.toPrecision(2).toString()
                                            : x.toPrecision(3).toString()}
                                        </span>
                                      </div>
                                    </Button>
                                  )
                                })
                                .reverse()}
                            </div>
                          </div>
                        </ClickAwayListener>
                      )}
                      <Button
                        id='playbackspeed'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => {
                          setShowPlaybackSpeed(!showPlaybackSpeed)
                        }}
                      >
                        <div className='flex justify-between w-12 items-end'>
                          <span className='text-xs font-semibold text-gray-400'>
                            x
                          </span>
                          <span>
                            {playbackSpeed < 1
                              ? playbackSpeed.toPrecision(2).toString()
                              : playbackSpeed.toPrecision(3).toString()}
                          </span>
                        </div>
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className='text-right'>
                    <div className='flex justify-between items-center'>
                      <div className='px-4'>
                        <div className='flex w-32'>
                          <AudioControl audio={audio} ref={videoRef} />
                        </div>
                      </div>
                      <button
                        id='fullscreen'
                        onMouseDown={e => e.preventDefault()}
                        onClick={e => {
                          e.preventDefault()
                          const view = document.getElementById('view')
                          if (view) view.requestFullscreen()
                        }}
                      >
                        <FullscreenIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </GlobalHotKeys>
  )
}

export default AnimationPlayer
