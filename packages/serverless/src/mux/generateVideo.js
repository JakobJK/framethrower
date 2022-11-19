'use strict'
const Mux = require('@mux/mux-node')
const { useTransaction } = require('../utils')

async function generateVideo(event, context, client) {
  const srcKey = decodeURIComponent(event.Records[0].s3.object.key).replace(
    /\+/g,
    ' '
  )
  const bucket = event.Records[0].s3.bucket.name

  const { Video } = new Mux()

  const asset = await Video.Assets.create({
    input: `https://${bucket}.s3.amazonaws.com/${srcKey}`,
    playback_policy: 'public',
  })

  let purpose

  try {
    let result = await client.query(
      'select purpose from framethrower_hidden.upload where file_url = $1',
      [srcKey]
    )
    purpose = result.rows[0].purpose
  } catch (e) {
    console.log('Failed to get the purpose of the upload')
  }

  try {
    await client.query(
      'insert into framethrower_hidden.mux_video (id, upload_id, playback_id) select $1, id, $1 from framethrower_hidden.upload where file_url = $2',
      [asset.playback_ids[0].id, srcKey]
    )
  } catch (e) {
    console.log('Issue storing the mux details in the mux table')
  }

  switch (purpose) {
    case 'feedback':
      await client.query(
        `update framethrower_public.feedback_response set link=$1 where link=$2`,
        [asset.playback_ids[0].id, srcKey]
      )
      break
    case 'pro_content':
      await client.query(
        `update framethrower_hidden.news_pro_content set video_url=$1 where video_url=$2`,
        [asset.playback_ids[0].id, srcKey]
      )
      break
    default:
      console.log('No purpose matched')
  }
}

export default useTransaction(generateVideo)
