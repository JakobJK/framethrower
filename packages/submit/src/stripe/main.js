const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const createCustomer = async (req, res, next) => {
  const { id } = await stripe.customers.create({
    email: res.locals.email,
    metadata: {
      profileId: res.locals.profileId,
    },
  })
  res.locals.costumerId = id
  return next()
}

const createSubscription = async (req, res, next) => {
  try {
    await stripe.paymentMethods.attach(req.body.paymentMethodId, {
      customer: res.locals.customerId,
    })
  } catch (error) {
    return res.status('402').send({ error: { message: error.message } })
  }

  await stripe.customers.update(res.locals.customerId, {
    invoice_settings: {
      default_payment_method: req.body.paymentMethodId,
    },
  })

  const subscription = await stripe.subscriptions.create({
    customer: res.locals.customerId,
    items: [{ price: 'price_1HDYMpGEIvqxqdl72e2VQ3Qt' }],
    expand: ['latest_invoice.payment_intent'],
  })
  console.log(subscription)
  res.send(subscription)
}

module.exports = { createCustomer, createSubscription }
