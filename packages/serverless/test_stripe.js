const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: '2345',
  user: 'framethrower',
  password: 'framethrower',
})

const paymentMethodId = 'pm_1I6kdIGEIvqxqdl70w5GNSZF'
const profileId = 'b9fa83e4-a010-42e2-9114-bee90c545b57'

const mainFunction = async () => {
  // 1) Verify JWT
  // 2) Check if the user already has a customer ID

  await client.connect()

  const profileQuery = await client.query(
    `select email, stripe_customer_id from framethrower_public.profile join framethrower_private.profile_secrets ON profile_secrets.profile_id = profile.id left join framethrower_public.premium ON premium.profile_id = profile.id where profile.id = $1`,
    [profileId]
  )

  const { email, stripe_customer_id } = profileQuery.rows[0]

  let newCustomerId

  // If a stripe customer ID does not exists, let's create it!
  try {
    if (stripe_customer_id === null) {
      const { id } = await stripe.customers.create({
        email,
        metadata: {
          profileId,
        },
      })
      newCustomerId = id
    }
  } catch (e) {
    console.log(e)
  }

  // However, if one exists, we'll retrieve the user, and see if they are currently subscribed.

  // Lets set the active customer Id, which we'll use moving forward
  const currentCustomerId =
    stripe_customer_id !== null ? stripe_customer_id : newCustomerId

  // Set the default payment method on the Customer

  await stripe.paymentMethods.attach(paymentMethodId, {
    customer: currentCustomerId,
  })

  // Lets update the costumers default payment.
  let updateCustomerDefaultPaymentMethod = await stripe.customers.update(
    currentCustomerId,
    {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    }
  )

  // Create The Subscription
  const subscription = await stripe.subscriptions.create({
    customer: currentCustomerId,
    items: [{ price: process.env.PRO_MEMBERSHIP_PRICE_ID }],
    expand: ['latest_invoice.payment_intent', 'pending_setup_intent'],
  })

  if (newCustomerId) {
    await client.query(
      `insert into framethrower_public.premium (premium_id, profile_id, stripe_customer_id, status) values ((select id from framethrower_public.premium_definition where name = 'pro'), $1, $2, $3)`,
      [profileId, newCustomerId, subscription.status]
    )
  }

  // 4) Subscribe the user to premium
  // 5) Update the database with customer ID and stripe Status

  // 6) Report back to the user that the Subscription was successful
  // 7) Update the JWT by sending a request to GraphQL API

  await client.end()
}

mainFunction()
