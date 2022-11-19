const { useTransaction } = require('../utils')
const jwt = require('jsonwebtoken')
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

async function retrieveSubscriptionInfo(event, context, client) {
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

  const profileId = decoded.id

  let userQuery
  userQuery = await client.query(
    'select stripe_subscription_id from framethrower_public.premium where profile_id = $1',
    [profileId]
  )

  console.log(userQuery)
  const subscriptionId = userQuery.rows[0].stripe_subscription_id

  let subscription
  subscription = await stripe.subscriptions.retrieve(subscriptionId)

  console.log(subscription)

  const returnObj = {
    collectionMethod: subscription.collection_method,
    status: subscription.status,
    cancelAtPeriodEnd: subscription.cancel_at_period_end,
    currentPeriodEnd: subscription.current_period_end,
    amount: subscription.plan.amount,
    currency: subscription.plan.currency,
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(returnObj),
  }
}

export default useTransaction(retrieveSubscriptionInfo)
