const ffmpeg = require('fluent-ffmpeg')

const thumbnail = (prefix, resolution) => (req, res, next) => {
  const thumb = `${prefix}_${req.file.filename.split('.')[0]}.png`

  // size: '480x270' - Submissions Res

  ffmpeg(req.file.path).screenshots({
    timestamps: [0],
    filename: thumb,
    folder: './uploaded_files',
    size: resolution,
  })

  res.locals.thumbnailId = thumb

  return next()
}

module.exports = thumbnail
