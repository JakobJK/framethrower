const redis = require('redis')
const client = redis.createClient({
  host: process.env.REDIS_HOST || 'redis',
  port: process.env.REDIS_PORT || 6379,
  no_ready_check: true,
})

client.on('error', err => {
  console.log('Error ' + err)
})

module.exports = function(req, res, next) {
  if (req.headers.authorization) {
    client.get(req.headers.authorization.split(' ')[1], (err, reply) => {
      if (err) console.log(err)
      if (reply !== null) {
        return res.status(401).send({ message: 'jwt expired' })
      } else {
        next()
      }
    })
  } else {
    next()
  }
}
