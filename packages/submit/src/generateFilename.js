const uniqid = require('uniqid')

module.exports = prefix => {
  return (req, res, next) => {
    const pre = `${prefix}_${res.locals.profileId.split('-')[0]}`
    res.locals.saveFilename = `${uniqid(pre)}.png`
    return next()
  }
}
