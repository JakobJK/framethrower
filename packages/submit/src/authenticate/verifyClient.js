const jwt = require('jsonwebtoken')

const verifyClient = permission => (req, res, next) => {
  try {
    jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (permission === 'instructor') {
          if (decoded.instructor === 'not_instructor')
            return res.sendStatus(403)
        }
        res.locals.profileId = decoded.id
        return next()
      }
    )
  } catch (err) {
    throw err
  }
}

module.exports = verifyClient
