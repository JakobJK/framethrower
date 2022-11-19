const AWS = require('aws-sdk')
const jwt = require('jsonwebtoken')
const shortid = require('shortid')
const { useTransaction, authClient } = require('../utils')

async function uploadProContentVideo(event, context, client) {
  let decoded
  try {
    decoded = jwt.verify(event.headers.Authorization, process.env.JWT_SECRET)
    if (decoded.role !== 'framethrower_admin') {
      return {
        statusCode: 403,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          authorized: false,
          message: 'Unfortunately you are not an active instructor.',
        }),
      }
    }
  } catch (e) {
    console.log(e, 'There was an error')
    return {
      statusCode: 403,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        authorized: false,
        message: 'Submit - Token failed authorization - Try to login again',
      }),
    }
  }

  const s3 = new AWS.S3()
  const file = `pro_content/${
    decoded.id.split('-')[1]
  }${shortid.generate()}.mp4`

  const url = s3.getSignedUrl('putObject', {
    Bucket: process.env.VIDEO_BUCKET,
    Key: file,
    ContentType: 'video/mp4',
    CacheControl: 'max-age=31104000',
    ACL: 'public-read',
  })

  await client.query(
    `insert into framethrower_hidden.upload (profile_id, file_url, purpose) values ($1, $2, 'pro_content') returning id`,
    [decoded.id, file]
  )

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      authorized: true,
      url,
      file,
    }),
  }
}

export default useTransaction(uploadProContentVideo)
