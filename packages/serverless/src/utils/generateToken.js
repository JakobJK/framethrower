const jwt = require('jsonwebtoken')

export async function generateToken(tokenObject, tokenType) {
  let token

  const audience =
    tokenType === 'access_token' ? 'postgraphile' : 'ft_authenticator'
  const issuer =
    tokenType === 'access_token' ? 'postgraphile' : 'ft_authenticator'
  const secret =
    tokenType === 'access_token'
      ? process.env.JWT_SECRET
      : process.env.JWT_REFRESH_SECRET

  const expiresIn = tokenType === 'access_token' ? '1 day' : '90 days'

  try {
    token = await jwt.sign(tokenObject, secret, {
      audience,
      issuer,
      expiresIn,
    })
  } catch (e) {
    console.log('Error: ', e)
  }
  return token
}
