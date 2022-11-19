const AWS = require('aws-sdk')
const jwt = require('jsonwebtoken')

async function uploadBanner(event, context, callback) {
  let decoded
  try {
    decoded = jwt.verify(event.headers.Authorization, process.env.JWT_SECRET)
    if (
      decoded.role === 'framethrower_banned' ||
      decoded.role === 'framethrower_inactive'
    ) {
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

  const s3 = new AWS.S3()

  const myBucket = process.env.UPLOAD_BUCKET
  const newBanner = `${
    Math.random()
      .toString()
      .split('.')[1]
  }.jpg`

  const url = s3.getSignedUrl('putObject', {
    Bucket: myBucket,
    Key: newBanner,
    ContentType: 'image/jpeg',
    CacheControl: 'max-age=31104000',
    ACL: 'public-read',
  })

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      url,
      file: newBanner,
    }),
  }
}

export default uploadBanner
