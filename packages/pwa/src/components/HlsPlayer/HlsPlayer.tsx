import React, { useEffect } from 'react'
import Hls from 'hls.js'

const { createRef } = React

function ReactHlsPlayer({
  autoplay = false,
  controls = false,
  hlsConfig = {},
  videoProps = {},
  playerRef = createRef() as React.MutableRefObject<HTMLVideoElement>,
  style = {},
  width = '100%',
  height = 'auto',
  className = '',
  url = '',
  ...props
}) {
  useEffect(() => {
    let hls = null as Hls | null

    function _initPlayer() {
      if (hls != null) {
        hls.destroy()
      }

      const newHls = new Hls({
        enableWorker: false,
        ...hlsConfig,
      })

      newHls?.attachMedia(playerRef?.current)

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(url)

        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoplay) {
            playerRef.current.play()
          }
        })
      })

      newHls.on(Hls.Events.ERROR, function(event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError()
              break
            default:
              _initPlayer()
              break
          }
        }
      })

      hls = newHls
    }

    _initPlayer()

    return () => {
      if (hls != null) {
        hls.destroy()
      }
    }
  }, [autoplay, hlsConfig, playerRef, url])
  return (
    <video
      className={className}
      style={style}
      ref={playerRef}
      controls={controls}
      width={width}
      height={height}
      {...videoProps}
      {...props}
    ></video>
  )
}

export default ReactHlsPlayer
