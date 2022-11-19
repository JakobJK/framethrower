import React from 'react'
import { getEmbedLink } from '../../util'

const EmbedVideo = ({
  link,
  width,
  height,
}: {
  link: string | null
  width: number
  height: number
}) => {
  if (!link) return null
  const url = getEmbedLink(link)
  if (url === null) return null
  if (link.includes('vimeo')) {
    return (
      <iframe
        width={width}
        height={height}
        src={url}
        frameBorder='0'
        allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    )
  }
  if (link.includes('yo')) {
    return (
      <iframe
        src={url}
        width={width}
        height={height}
        frameBorder='0'
        allow='autoplay; fullscreen'
        allowFullScreen
      />
    )
  }
  return null
}

export default EmbedVideo
