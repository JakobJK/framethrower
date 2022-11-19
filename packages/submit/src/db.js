const { Client } = require('pg')

const checkDb = (req, res, next) => {
  const client = new Client()
  client.connect()
  client.query(
    'SELECT * from framethrower_public.profile limit 3',
    (err, response) => {
      console.log(err ? err.stack : response.rows) // Hello World!
      client.end()
      return next()
    }
  )
}

const saveNewCustomerToDb = (req, res, next) => {
  console.log([res.locals.profileId, res.locals.costumerId])
  const client = new Client()
  client.connect()
  client.query(
    `insert into framethrower_public.premium (premium_id, profile_id, stripe_costumer_id) values ((select id from framethrower_public.premium_definition where name = 'default'), $1, $2)`,
    [res.locals.profileId, res.locals.costumerId],
    (err, response) => {
      console.log(err ? err.stack : response.rows) // Hello World!
      client.end()
      return next()
    }
  )
}

const retrieveEmail = async (req, res, next) => {
  const client = new Client()
  client.connect()
  client.query(
    `select email from framethrower_private.profile_secrets where profile_id = $1`,
    [res.locals.profileId],
    (err, response) => {
      res.locals.email = response.rows[0].email
      client.end()
      return next()
    }
  )
}

const retrieveCustomerId = (req, res, next) => {
  const client = new Client()
  client.connect()
  client.query(
    `select stripe_customer_id from framethrower_public.premium where profile_id = $1`,
    [res.locals.profileId],
    (err, response) => {
      console.log(response.rows[0].stripe_customer_id)
      res.locals.customerId = response.rows[0].stripe_customer_id
      client.end()
      return next()
    }
  )
}

const concedeFeedback = (req, res, next) => {
  const client = new Client()
  client.connect()
  client.query(
    `update framethrower_public.feedback_response set status = 'conceded' where status = 'pending' and created_at + interval '25 minutes' < NOW() `,
    (err, response) => {
      console.log(err ? err.stack : response.rows) // Hello World!
      client.end()
      return next()
    }
  )
}

module.exports = {
  checkDb,
  concedeFeedback,
  saveNewCustomerToDb,
  retrieveEmail,
  retrieveCustomerId,
}
