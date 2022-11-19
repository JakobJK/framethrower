const { useTransaction } = require('../utils')
const jwt = require('jsonwebtoken')
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

async function cancelSubscription(event, context, client) {
  let decoded
  try {
    decoded = jwt.verify(event.headers.Authorization, process.env.JWT_SECRET)
    if (
      decoded.role === 'FRAMETHROWER_BANNED' ||
      decoded.role === 'FRAMETHROWER_INACTIVE'
    ) {
      return {
        statusCode: 403,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          authorized: false,
          message: 'Unfortunately you are not authorized to make a submission.',
        }),
      }
    }
  } catch (e) {
    return {
      statusCode: 403,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        authorized: false,
        message: 'Submit - Token failed authorization - Try to login again',
      }),
    }
  }

  const profileId = decoded.id

  let profileQuery
  profileQuery = await client.query(
    'select stripe_subscription_id from framethrower_public.premium where profile_id = $1',
    [profileId]
  )

  const subscriptionId = profileQuery.rows[0].stripe_subscription_id

  const subscription = await stripe.subscriptions.update(subscriptionId, {
    cancel_at_period_end: true,
  })

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}

export default useTransaction(cancelSubscription)
