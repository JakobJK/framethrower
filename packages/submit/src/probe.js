const ffmpeg = require('fluent-ffmpeg')
// We need to verify all properties of the uploaded video here.
// If case, that it does not, we want to
// proper Framerate, codec, compression, resolution, etc.
// If it is not per Framethrowers standard we discard the video
// If it's fine, we will

module.exports = (req, res, next) => {
  ffmpeg.ffprobe(req.file.path, function(err, metadata) {
    // console.dir(metadata)
  })
  return next()
}
