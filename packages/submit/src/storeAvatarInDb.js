const { Client } = require('pg')

storeAvatarInDb = (req, res, next) => {
  console.log(res.locals.profileId, res.locals.saveFilename)

  const client = new Client()
  client.connect()
  client.query(
    'update framethrower_public.profile set avatar=$2 where id = $1;',
    [res.locals.profileId, res.locals.saveFilename],
    (err, response) => {
      console.log(err ? err.stack : response.rows) // Hello World!
      client.end()
      return next()
    }
  )
}
storeBannerInDb = (req, res, next) => {
  console.log(res.locals.profileId, req.file.filename)
  const client = new Client()
  client.connect()
  client.query(
    'update framethrower_public.profile set banner=$2 where id = $1;',
    [res.locals.profileId, req.file.filename],
    (err, response) => {
      console.log(err ? err.stack : response.rows) // Hello World!
      client.end()
      return next()
    }
  )
}

module.exports = { storeAvatarInDb, storeBannerInDb }
