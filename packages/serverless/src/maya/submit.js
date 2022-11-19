const AWS = require('aws-sdk')
const jwt = require('jsonwebtoken')
const shortid = require('shortid')
const { useTransaction } = require('../utils')

async function submit(event, context, client) {
  let decoded

  try {
    decoded = jwt.verify(event.headers.token, process.env.MAYA_JWT_SECRET)
    if (decoded.canSubmit === false) {
      return {
        statusCode: 403,
        body: JSON.stringify({
          authorized: false,
          message: 'Unfortunately you are not authorized to make a submission.',
        }),
      }
    }
  } catch (e) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        authorized: false,
        message: 'Submit - Token failed authorization - Try to login again',
      }),
    }
  }

  const s3 = new AWS.S3()
  const file = `${decoded.profileId.split('-')[1]}${shortid.generate()}.mov`

  const res = await client.query(
    `insert into framethrower_hidden.upload (profile_id, file_url, purpose) values ($1, $2, 'submission') returning id`,
    [decoded.profileId, file]
  )

  const url = s3.getSignedUrl('putObject', {
    Bucket: process.env.UPLOAD_BUCKET,
    Key: file,
    ContentType: 'video/quicktime',
    CacheControl: 'max-age=31104000',
    ACL: 'public-read',
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      authorized: true,
      message: 'Proceed',
      url,
      uploadId: res.rows[0].id,
    }),
  }
}

export default useTransaction(submit)
