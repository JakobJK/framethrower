const redis = require('redis')
const client = redis.createClient({
  host: 'localhost',
  port: 6379,
  // password: 'framethrower',
})

client.on('error', err => {
  console.log('Error ' + err)
})

client.get('toood', (err, reply) => {
  if (err) throw err
  console.log(reply)
})
