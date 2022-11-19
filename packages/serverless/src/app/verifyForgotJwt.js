'use strict'
const jwt = require('jsonwebtoken')

export default async function(event, context, callback) {
  let parsedJwt
  try {
    const parsedBody = JSON.parse(event.body)
    parsedJwt = jwt.verify(parsedBody.authorization, process.env.JWT_SECRET)
  } catch (e) {
    console.log('Failed to verify JWT')
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: 'Failed to parse JWT',
      }),
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}
