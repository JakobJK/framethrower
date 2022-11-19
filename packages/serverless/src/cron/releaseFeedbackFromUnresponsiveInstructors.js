const { useTransaction } = require('../utils')

async function releaseFeedback(event, context, client) {
  try {
    await client.query(
      `update framethrower_public.feedback_response set status = 'conceded', updated_at = now() where status = 'pending' and created_at + (interval '2 hours') < now()`
    )
  } catch (e) {
    console.log('Error removing inactive users', e)
  }
}

export default useTransaction(releaseFeedback)
