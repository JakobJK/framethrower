const jwt = require('jsonwebtoken')
const AWS = require('aws-sdk')
const ses = new AWS.SES({ region: 'us-east-1' })
const { useTransaction, buildEmailParameters } = require('../utils')

const forgotPassword = async (event, context, client) => {
  let email

  try {
    const parsedBody = JSON.parse(event.body)
    email = parsedBody.email
  } catch (e) {
    console.log(e)
  }

  let result

  try {
    result = await client.query(
      `select username, profile_id, email from framethrower_private.profile_secrets
    join framethrower_public.profile ON profile.id = profile_secrets.profile_id
    where email=$1 limit 1;`,
      [email]
    )
  } catch (e) {
    console.log(e)
  }

  let signedJwt

  try {
    signedJwt = jwt.sign(
      {
        id: result.rows[0].profile_id,
      },
      process.env.JWT_SECRET,
      {}
    )
  } catch (e) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  }

  const params = buildEmailParameters({
    emails: [email],
    subject: 'Reset Password Requested!',
    body: 'WOoohooo!',
  })

  try {
    await ses.sendEmail(params).promise()
  } catch (error) {
    console.log(error)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}

export default useTransaction(forgotPassword)
