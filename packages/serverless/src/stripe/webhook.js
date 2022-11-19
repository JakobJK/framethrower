const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const { useTransaction } = require('../utils')

async function webhook(event, context, client) {
  let stripeEvent
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      event.headers['Stripe-Signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.log(err)
    console.log(`Webhook signature verification failed.`)
    return {
      statusCode: 502,
    }
  }
  // Extract the object from the event.

  // console.log(event)
  const dataObject = stripeEvent.data.object
  const { customer, period_end } = dataObject

  console.log('The Event: ', stripeEvent.type)
  console.log('Here is our amazing customer and stuff:\n', dataObject)

  switch (stripeEvent.type) {
    case 'invoice.paid':
      // query = [period_end, customer]
      // Simply Updating the Customer and resetting their pro feedback to 1!
      try {
        result = await client.query(
          `update framethrower_public.premium set status = 'active', built_in_feedback = 1, current_period_end = $1 where stripe_customer_id = $2`,
          [period_end, customer]
        )
      } catch (err) {
        console.log(err)
      }
      // 1)
      // Invoice as been paid
      // Used to provision services after the trial has ended.
      // The status of the invoice will show up as paid. Store the status in your
      // database to reference when a user accesses your service to avoid hitting rate limits.
      break
    case 'invoice.payment_failed':
      // We should Email the user, and update their status
      await client.query(
        `update framethrower_public.premium set status = 'active' where customer_id = $1`,
        [customer]
      )
      //
      break
    case 'invoice.finalized':
      // If you want to manually send out invoices to your customers
      // or store them locally to reference to avoid hitting Stripe rate limits.
      break
    case 'customer.subscription.deleted':
      if (event.request != null) {
        // handle a subscription cancelled by your request
        // from above.
      } else {
        // handle subscription cancelled automatically based
        // upon your subscription settings.
      }
      break
    case 'customer.subscription.trial_will_end':
      // Send notification to your user that the trial will end
      break
    default:
      console.log('Unexpected event from Stripe')
  }
  return {
    statusCode: 200,
  }
}

export default useTransaction(webhook)
