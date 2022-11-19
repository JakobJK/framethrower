const ffmpeg = require('fluent-ffmpeg')

export const getVideoInfo = async inputPath => {
  return new Promise((resolve, reject) => {
    return ffmpeg.ffprobe(inputPath, (error, videoInfo) => {
      console.log(videoInfo)
      const {
        codec_name,
        width,
        height,
        nb_frames: frames,
        r_frame_rate: fps,
      } = videoInfo.streams[0] || {}

      const { codec_type } = videoInfo.streams[1] || {}
      if (error) {
        return reject(error)
      }
      return resolve({
        codec_name,
        width,
        height,
        frames,
        audio: codec_type === 'audio',
        fps,
      })
    })
  })
}
