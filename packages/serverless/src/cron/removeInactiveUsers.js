const { useTransaction } = require('../utils')

async function removeInactiveUsers(event, context, client) {
  try {
    await client.query(
      "delete from framethrower_public.profile where role = 'framethrower_inactive' and created_at + interval '7' day < now()"
    )
  } catch (e) {
    console.log('Error deleting inactive users\n', e)
  }
}

export default useTransaction(removeInactiveUsers)
