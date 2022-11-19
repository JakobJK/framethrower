const { useTransaction } = require('../utils')
const redis = require('redis')
const jwt = require('jsonwebtoken')

async function adminInvalidateJwts(event, context, client) {
  let decoded
  try {
    decoded = jwt.verify(event.headers.Authorization, process.env.JWT_SECRET)
    if (decoded.role !== 'framethrower_admin') {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 403,
      }
    }
  } catch (e) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 403,
    }
  }

  let profileId
  try {
    const object = JSON.parse(event.body)
    profileId = object.profileId
  } catch (e) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 403,
    }
  }

  let tokens
  try {
    tokens = await client.query(
      `select token from framethrower_hidden.issued_tokens where token_type='access_token' and profile_id = $1`,
      [profileId]
    )
  } catch (e) {
    console.log('Failed to get tokens')
  }

  console.log(tokens)
  let activeTokens = []
  try {
    activeTokens = tokens.rows ? tokens.rows : []
  } catch (e) {
    console.log('Did not get any tokens')
  }

  if (activeTokens.length) {
    const redis_client = redis.createClient({
      host: process.env.REDIS_HOST,
      port: 6379,
    })

    activeTokens.forEach(x => {
      redis_client.set(x.token, 'bar', 'EX', 60 * 60 * 24)
    })

    redis_client.quit()
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}

export default useTransaction(adminInvalidateJwts)
