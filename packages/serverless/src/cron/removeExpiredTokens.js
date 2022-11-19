const { useTransaction } = require('../utils')

async function removeInactiveUsers(event, context, client) {
  try {
    await client.query(
      'delete from framethrower_hidden.issued_tokens where expire_at < now()'
    )
  } catch (e) {
    console.log('Error deleting existing tokens', e)
  }
}

export default useTransaction(removeInactiveUsers)
