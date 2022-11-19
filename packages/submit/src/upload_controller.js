const multer = require('multer')
const path = require('path')
const uniqid = require('uniqid')

const fileUpload = prefix => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '../uploaded_files'))
    },
    filename(req, file, cb) {
      const fileArr = file.originalname.split('.')
      const fileName = `${prefix}_${uniqid()}.${fileArr[fileArr.length - 1]}`
      cb(null, fileName)
    },
  })
  return multer({ storage })
}

module.exports = fileUpload
