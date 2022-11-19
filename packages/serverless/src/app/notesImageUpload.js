const AWS = require('aws-sdk')
const jwt = require('jsonwebtoken')

async function notesImageUpload(event, context, callback) {
  const { type } = await JSON.parse(event.body)

  if (!['image/png', 'image/jpeg'].includes(type)) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  }

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

  let extension = type.includes('png') ? 'png' : 'jpg'

  const myBucket = process.env.UPLOAD_BUCKET
  const newImage = `${
    Math.random()
      .toString()
      .split('.')[1]
  }.${extension}`

  const url = s3.getSignedUrl('putObject', {
    Bucket: myBucket,
    Key: newImage,
    ContentType: type,
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
      file: newImage,
    }),
  }
}

export default notesImageUpload
