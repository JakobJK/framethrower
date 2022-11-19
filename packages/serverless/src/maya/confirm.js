const AWS = require('aws-sdk')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const { useTransaction, postToDiscord, getVideoInfo } = require('../utils')
const { readFileSync, writeFileSync, unlinkSync } = require('fs')
const { spawnSync } = require('child_process')
const redis = require('redis')

const s3 = new AWS.S3()

async function confirm(event, context, client) {
  try {
    let decoded
    const bucket = process.env.UPLOAD_BUCKET
    try {
      decoded = jwt.verify(event.headers.token, process.env.MAYA_JWT_SECRET)
      if (decoded.canSubmit === false) {
        return {
          statusCode: 403,
          body: JSON.stringify({
            authorized: false,
            message:
              'Unfortunately you are not authorized to make a submission.',
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

    // Validate
    const object = JSON.parse(event.body)
    const uploadId = object.uploadId
    const title = object.title
    const startFrame = object.startFrame
    const endFrame = object.endFrame
    const newProject = object.newProject
    const animationId = object.animationId
    const comment = object.comment
    const proFeedback = object.proFeedback
    const profileId = decoded.profileId
    const role = decoded.role

    try {
      if (endFrame - startFrame + 1 > decoded.maxFrames) {
        return {
          statusCode: 403,
          body: JSON.stringify({
            authorized: false,
            message: 'Submit - Token failed authorization - Try to login again',
          }),
        }
      }
    } catch (e) {
      console.log('Very weird!')
    }

    let uploadedFile

    uploadedFile = await client.query(
      `select file_url, username, avatar from framethrower_hidden.upload join framethrower_public.profile ON profile.id = upload.profile_id where upload.id = $1`,
      [uploadId]
    )

    const { file_url, username, avatar } = uploadedFile.rows[0]

    console.log(`Found file_url: ${file_url}`)

    const s3Object = await s3
      .getObject({
        Bucket: bucket,
        Key: file_url,
      })
      .promise()

    writeFileSync(`/tmp/${file_url}`, s3Object.Body)

    let videoInfo
    try {
      videoInfo = await getVideoInfo(`/tmp/${file_url}`)
    } catch (e) {
      console.log('Error getting video meta info: ', e)
    }

    try {
      if (
        videoInfo.frames !== endFrame - startFrame + 1 ||
        videoInfo.width !== 1280 ||
        videoInfo.height !== 720 ||
        videoInfo.codec_name !== 'h264'
      ) {
        // TODO: client.query('Insert shit into things why things went wrong')
        return {
          statusCode: 403,
          body: JSON.stringify({
            message: 'Inconsicenty between video file and submitted data',
          }),
        }
      }
    } catch (e) {
      console.log('Oh no')
    }

    const { fps, audio } = videoInfo
    console.log(videoInfo)

    const generatedPNG = `${file_url.split('.')[0]}.png`

    console.log('Created new png file to disc')
    //TODO: We could probably use fluent-ffmpeg here to make things a little nicer!

    // await generateThumbnail(`/tmp/${file_url}`, generatedPNG)
    spawnSync(
      '/opt/ffmpeg/ffmpeg',
      [
        '-i',
        `/tmp/${file_url}`,
        '-ss',
        '00:00:01',
        '-y',
        '-s',
        '480x270',
        '-frames:v',
        '1',
        `/tmp/${generatedPNG}`,
      ],
      { stdio: 'inherit' }
    )

    const pngFile = readFileSync(`/tmp/${generatedPNG}`)

    console.log('Deleting the generated PNG')
    unlinkSync(`/tmp/${generatedPNG}`)
    console.log('Deleting the movie file')
    unlinkSync(`/tmp/${file_url}`)

    console.log('Putting png into s3')
    await s3
      .putObject({
        Bucket: bucket,
        Key: generatedPNG,
        Body: pngFile,
        ACL: 'public-read',
      })
      .promise()

    console.log('Done putting into s3 ')

    const registerAnimation =
      'select (r).* FROM (select framethrower_public.register_animation($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) as r) as animation_submission'
    const regAnimationArr = [
      title,
      startFrame,
      endFrame,
      generatedPNG,
      comment,
      uploadId,
      profileId,
      proFeedback,
      fps,
      audio,
    ]

    if (role === 'framethrower_inactive') {
      try {
        await client.query(
          `update framethrower_public.profile set role='framethrower_user' where id = $1 and role='framethrower_inactive'`,
          [profileId]
        )
      } catch (e) {
        console.log('Error activating the animator: ', e)
      }

      let tokens
      try {
        tokens = await client.query(
          `select token from framethrower_hidden.issued_tokens where token_type='access_token' and profile_id = $1`,
          [profileId]
        )
      } catch (e) {
        console.log('Failed to get tokens')
      }

      console.log(tokens)
      let activeTokens = []
      try {
        activeTokens = tokens.rows ? tokens.rows : []
      } catch (e) {
        console.log('Did not get any tokens')
      }

      if (activeTokens.length) {
        const redis_client = redis.createClient({
          host: process.env.REDIS_HOST,
          port: 6379,
        })

        activeTokens.forEach(x => {
          redis_client.set(x.token, 'bar', 'EX', 60 * 60 * 24)
        })

        redis_client.quit()
      }
    }

    const registerSubmission = `select (r).* FROM (select framethrower_public.register_submission($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) as r) as animation_submission`

    const regSubmissionArr = [
      generatedPNG,
      comment,
      uploadId,
      animationId,
      profileId,
      proFeedback,
      startFrame,
      endFrame,
      fps,
      audio,
    ]

    let queryResult
    let query
    let arr

    if (newProject === true) {
      query = registerAnimation
      arr = regAnimationArr
    } else {
      query = registerSubmission
      arr = regSubmissionArr
    }

    console.log('This is the query, and this is the Arr: \n', query, arr)
    try {
      queryResult = await client.query(query, arr)
    } catch (e) {
      console.log(e)
    }

    try {
      await postToDiscord('submission', {
        ...queryResult.rows[0],
        username,
        avatar,
      })
    } catch (e) {
      console.log('Error posting to Discord\n', e)
    }

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          animationId: queryResult.rows[0].animation_id,
          submissionId: queryResult.rows[0].submission_id,
        },
        null,
        2
      ),
    }
  } catch (e) {
    console.error(e)
    throw new createError.InternalServerError(e)
  }
}

export default useTransaction(confirm)
