const path = require('path')
const fs = require('fs')

// Saves image

const saveImage = key => {
  return (req, res, next) => {
    console.log('res.locals.saveFilename: ', res.locals.saveFilename)
    var base64Data = req.body[key].replace(/^data:image\/png;base64,/, '')
    fs.writeFile(
      path.resolve(__dirname, '../uploaded_files/', res.locals.saveFilename),
      base64Data,
      'base64',
      err => {
        console.log(err)
      }
    )
    return next()
  }
}

module.exports = { saveImage }
