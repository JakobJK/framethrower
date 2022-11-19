const redis = require('redis')
const client = redis.createClient()

client.on('error', function(error) {
  console.error(error)
})

client.set('key', 'value')
client.get('key', (err, reply) => {
  console.log(err, reply)
})
