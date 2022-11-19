import * as React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

const { useState, forwardRef, useEffect } = React

const VideoElement = (
  { setIsLoading, isLoading, url, setEndTime, setDuration, flipScreen },
  ref
) => {
  const [style, setStyle] = useState({
    transform: flipScreen ? 'scaleX(-1)' : 'scaleX(1)',
  })

  useEffect(() => {
    setStyle({ transform: flipScreen ? 'scaleX(-1)' : 'scaleX(1)' })
  }, [flipScreen])

  return (
    <>
      {isLoading && (
        <div className='w-full flex items-center justify-center z-50'>
          <CircularProgress />
        </div>
      )}
      <video
        onLoadedMetadata={e => {
          setDuration(e.currentTarget.duration)
        }}
        onLoadStart={() => {
          setEndTime(ref.current.duration)
        }}
        crossOrigin='anonymous'
        className='video-container video-container-overlay w-screen-xl h-screen-xl absolute z-20'
        ref={ref}
        style={style}
        onCanPlayThrough={() => setIsLoading(false)}
        typeof='video/mp4'
        loop
        src={`${STORAGE}/${url}`}
      />
    </>
  )
}

export default forwardRef(VideoElement)
