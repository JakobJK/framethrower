const { useTransaction } = require('../utils')
const jwt = require('jsonwebtoken')
const { getUserForPremium, storePremiumUser } = require('./queries')
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

async function createSubscription(event, context, client) {
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
    console.log(e)
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

  console.log('Decoded JWT')
  const profileId = decoded.id
  const body = JSON.parse(event.body)
  const paymentMethodId = body.paymentMethodId

  let profileQuery
  profileQuery = await client.query(getUserForPremium, [profileId])
  console.log('Ran a query!')
  const email = profileQuery.rows[0].email
  const stripeCustomerId = profileQuery.rows[0].stripe_customer_id
  const stripeSubscriptionId = profileQuery.rows[0].stripe_subscription_id

  let newCustomerId

  console.log(email, stripeCustomerId, stripeSubscriptionId)

  try {
    if (stripeCustomerId === null) {
      const newCustomerCreated = await stripe.customers.create({
        email,
        metadata: {
          profileId,
        },
      })
      newCustomerId = newCustomerCreated.id
    }
  } catch (e) {
    console.log(e)
  }

  const currentCustomerId =
    stripeCustomerId === null ? newCustomerId : stripeCustomerId

  // Attach the payment method to the Customer
  await stripe.paymentMethods.attach(paymentMethodId, {
    customer: currentCustomerId,
  })

  // We need to update the customers default payment method.
  let updateCustomerDefaultPaymentMethod
  updateCustomerDefaultPaymentMethod = await stripe.customers.update(
    currentCustomerId,
    {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    }
  )

  console.log(updateCustomerDefaultPaymentMethod)

  let subscription
  subscription = await stripe.subscriptions.create({
    customer: currentCustomerId,
    items: [{ price: process.env.PRO_MEMBERSHIP_PRICE_ID }],
    expand: ['latest_invoice.payment_intent', 'pending_setup_intent'],
  })

  console.log(newCustomerId, subscription.id, subscription.status, subscription)

  await client.query(storePremiumUser, [
    profileId,
    newCustomerId,
    subscription.id,
    subscription.status,
    subscription.current_period_end,
  ])

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}

export default useTransaction(createSubscription)
