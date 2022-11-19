'use strict'
const { makeClient } = require('../utils')

export default async function(event, context, callback) {
  const mudEvent = JSON.parse(event.body)
  switch (mudEvent.type) {
    case 'video.asset.ready':
      const client = await makeClient()
      let purpose

      try {
        let result = await client.query(
          'select purpose from framethrower_hidden.mux_video join framethrower_hidden.upload ON upload.id = mux_video.upload_id where mux_video.id = $1',
          [mudEvent.data.playback_ids[0].id]
        )
        purpose = result.rows[0].purpose
      } catch (e) {
        console.log('Could not find purpose: ', e)
      }
      switch (purpose) {
        case 'feedback':
          let feedback_request_id
          try {
            const req = await client.query(
              `update framethrower_public.feedback_response set status = 'processed' where link = $1 returning *`,
              [mudEvent.data.playback_ids[0].id]
            )
            feedback_request_id = req.rows[0].feedback_request_id
          } catch (e) {
            console.log('Issue getting feedback_request_id')
          }

          try {
            await client.query(
              `update framethrower_public.feedback_request set status = 'fulfilled' where id = $1`,
              [feedback_request_id]
            )
          } catch (e) {
            console.log('Issue setting the feedback request to fulfilled')
          }
          break
        case 'pro_content':
          console.log('We need to update things here!')
        default:
          console.log('No case matched the purpose: ', purpose)
      }
      await client.end()
      break

    default:
      console.log('No event matched!')
      break
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}
