const { useTransaction, postToDiscord } = require('../utils')

const createTumbleWeed = async (event, context, client) => {
  let result
  try {
    result = await client.query(
      'select (r).* from  (select framethrower_public.register_tumbleweed() as r) as animation_submission'
    )
  } catch (e) {
    console.log('Issue quering the db for a tubmle weed')
  }

  if (result.rows[0].animation_id !== null) {
    try {
      await postToDiscord('tumbleweed', result.rows[0])
    } catch (e) {
      console.log('Issue posting a tumble weed to to discord')
    }
  } else {
    console.log('No tumbleweed to post')
  }
}

export default useTransaction(createTumbleWeed)
