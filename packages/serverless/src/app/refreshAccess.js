'use strict'
const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const { useTransaction, generateToken } = require('../utils')

async function decodeToken(token) {
  let verified
  try {
    verified = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
  } catch (err) {
    console.log(err)
    return false
  }
  return verified
}

async function refreshAccess(event, context, client) {
  const {
    headers: { Cookie },
  } = event

  const { ORIGIN } = process.env

  let refresh
  try {
    const { refresh: refreshToken } = cookie.parse(Cookie)
    if (!refreshToken) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': ORIGIN,
          'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({
          message: 'nocookie',
        }),
      }
    } else {
      refresh = refreshToken
    }
  } catch (e) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': ORIGIN,
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({
        message: 'nocookie',
      }),
    }
  }

  const verifiedToken = await decodeToken(refresh)

  const queryString = `select (role,
    profile_id,
    coalesce((select status from framethrower_public.instructor where instructor.profile_id = profile.id),'not_instructor')::framethrower_public.instructor_status,
    coalesce((select premium_definition.name
  from framethrower_public.premium
  join framethrower_public.premium_definition on premium_definition.id = premium.premium_definition_id
  where premium.profile_id = profile.id), 'default'))::framethrower_public.jwt_token
      from framethrower_private.profile_secrets
      join framethrower_public.profile on profile_id = id
      where profile.id = $1;`

  let result

  if (verifiedToken) {
    try {
      result = await client.query(queryString, [verifiedToken.id])
    } catch (e) {
      console.log('Error grabbing the proper thing', e)
    }
  } else {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': ORIGIN,
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({
        message: 'nocookie',
      }),
    }
  }

  if (result.rows.length === 0) {
    // We need to remove the cookie here!
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': ORIGIN,
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({
        message: 'nocookie',
      }),
    }
  }

  console.log('Here is the result: ', result)

  const userString = result.rows[0].row
  const arr = userString.slice(1, -1).split(',')

  const accessTokenExpire = 2 * 60 * 60

  const accessTokenObject = {
    role: arr[0],
    id: arr[1],
    instructor: arr[2],
    has_customer_id: arr[3] === 't' ? true : false,
    premium: arr[4],
  }

  let accessToken
  try {
    accessToken = await generateToken(
      accessTokenObject,
      'access_token',
      accessTokenExpire,
      'postgraphile',
      'postgraphile'
    )
  } catch (e) {
    console.log('Error while generating token: ', e)
  }

  try {
    await client.query(
      `insert into framethrower_hidden.issued_tokens
    (profile_id, token, token_type, expire_at)
    values
    ($1, $2, 'access_token', now() + (interval '${accessTokenExpire} seconds'))`,
      [verifiedToken.id, accessToken]
    )
  } catch (e) {
    console.log('Failed to store token: ', e)
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': ORIGIN,
      'Access-Control-Allow-Credentials': 'true',
    },
    body: JSON.stringify({
      token: accessToken,
    }),
  }
}

export default useTransaction(refreshAccess)
