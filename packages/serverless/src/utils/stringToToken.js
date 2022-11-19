const jwt = require('jsonwebtoken')

export const stringToToken = async str => {
  const arr = str.slice(1, -1).split(',')

  console.log(arr)

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
  try {
    accessToken = await jwt.sign(accessTokenObject, process.env.JWT_SECRET, {
      audience: 'postgraphile',
      issuer: 'postgraphile',
      expiresIn: 2 * 60 * 60,
    })
    refreshToken = await jwt.sign(
      refreshTokenObject,
      process.env.JWT_REFRESH_SECRET,
      {
        issuer: 'FT Authenticator',
        expiresIn: 60 * 60 * 24 * 90,
      }
    )
  } catch (e) {
    console.log('Error: ', e)
  }

  return accessToken ? { accessToken, refreshToken, profileId: arr[1] } : ''
}

export default stringToToken
