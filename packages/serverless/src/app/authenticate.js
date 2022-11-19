const { useTransaction, generateToken } = require('../utils')
const authenticateSql = require('../queries/authenticate.sql')
const authenticateByUsernameSql = require('../queries/authenticate_by_username.sql')
const storeTokens = require('../queries/store_tokens.sql')

async function authenticate(event, context, client) {
  const { ORIGIN, DOMAIN } = process.env

  console.log('Here is the origin: ', ORIGIN)
  const { username, password } = JSON.parse(event.body)
  if (!username && !password) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': ORIGIN,
        'Access-Control-Allow-Credentials': 'true',
      },
    }
  }

  let result
  let loginQuery = username.includes('@')
    ? authenticateSql
    : authenticateByUsernameSql

  console.log(loginQuery, authenticateSql, authenticateByUsernameSql)

  const functionUse = username.includes('@')
    ? 'authenticate'
    : 'authenticate_by_username'

  console.log('now we here')
  try {
    result = await client.query(loginQuery, [username, password])
  } catch (e) {
    console.log('PSQL Query Error: ', e)
  }
  console.log('We got the query!')
  console.log('RESULT: ', result)
  if (result.rows[0][functionUse] === null) {
    return {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': ORIGIN,
        'Access-Control-Allow-Credentials': 'true',
        'Set-Cookie': 'refresh=false; Path=/; HttpOnly;',
      },
      statusCode: 200,
      body: JSON.stringify({
        message: 'Invalid Login Credentiels',
      }),
    }
  }

  const userString = result.rows[0][functionUse]

  const arr = userString.slice(1, -1).split(',')

  const accessTokenExpire = 24 * 60 * 60
  const refreshTokenExpire = 60 * 60 * 24 * 90

  const refreshTokenObject = {
    id: arr[1],
  }

  const accessTokenObject = {
    role: arr[0],
    id: arr[1],
    instructor: arr[2],
    has_customer_id: arr[3] === 't' ? true : false,
    premium: arr[4],
  }

  let accessToken
  let refreshToken
  const profileId = accessTokenObject.id

  try {
    accessToken = await generateToken(accessTokenObject, 'access_token')
    refreshToken = await generateToken(refreshTokenObject, 'refresh_token')
  } catch (e) {
    console.log('Error: ', e)
  }
  console.log(accessToken, refreshToken, profileId)

  const cookie = `refresh=${refreshToken}; Domain=www.framethrower.io; SameSite=None; Secure; Max-Age=${refreshTokenExpire}`

  try {
    await client.query(storeTokens, [profileId, accessToken, refreshToken])
  } catch (e) {
    console.log('PSQL Query Error Inserting new tokens to database ', e)
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': ORIGIN,
      'Access-Control-Allow-Credentials': 'true',
      'Set-Cookie': cookie,
    },
    body: JSON.stringify({
      token: accessToken,
    }),
  }
}

export default useTransaction(authenticate)
