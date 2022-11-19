const { Client } = require('pg')

findSerialKey = async (req, res, next) => {
  const client = new Client()
  client.connect()
  client.query(
    'select framethrower_serial_key from framethrower_private.profile_secrets where profile_id = $1;',
    [res.locals.profileId],
    (err, response) => {
      res.locals.serial_key = response.rows[0].framethrower_serial_key
      client.end()
      return next()
    }
  )
}

module.exports = findSerialKey
