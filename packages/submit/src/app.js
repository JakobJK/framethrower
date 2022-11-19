const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const { Client } = require('pg')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = express()
const cors = require('cors')
const verifyClient = require('./authenticate/verifyClient')
const { saveImage } = require('./saveImage')
const fileUpload = require('./upload_controller')
const { storeAvatarInDb, storeBannerInDb } = require('./storeAvatarInDb')
const port = process.env.port || 4000
const findSerialKey = require('./findSerialKey')
const { createCustomer, createSubscription } = require('./stripe/main')
const {
  verifyJwt,
  verifyUser,
  newVerifyUser,
  newGetAnimations,
  signJwt,
  activateUser,
} = require('./verify')
const thumbnail = require('./thumbnail')

const {
  saveNewCustomerToDb,
  retrieveEmail,
  retrieveCustomerId,
} = require('./db')
const { submitFileToDatabase, confirmToDatabase } = require('./submit')
const {
  findUser,
  sendMail,
  signForgotJwt,
  verifyForgotJwt,
  updatePassword,
} = require('./forgotpassword')
const probe = require('./probe')
const generateFilename = require('./generateFilename')

app.use(cors())
// app.use(bodyParser.json())
/*#####################################################
        Framethrower for Maya Animation API
#######################################################*/

// Login from Maya and receive jwt, and profile info

const client = new Client()
app.post('/submit/test', async (req, res) => {
  client.connect()
  console.log('Hello!')
  const time = await client.query('SELECT NOW()')
  client.end()
  console.log('Lets try to connect')
  res.send(time)
})

app.post(
  '/submit/mlogin',
  newVerifyUser,
  newGetAnimations,
  signJwt,
  (req, res) => {
    const { user, projects, token } = res.locals
    res.json({
      token,
      user,
      projects,
    })
  }
)

// Route for uploading your Animation
app.post(
  '/submit/upload',
  verifyJwt,
  activateUser,
  fileUpload('sub').single('upload_file'),
  probe,
  thumbnail('thb', '480x270'),
  submitFileToDatabase,
  (req, res) => {
    res.json({
      videoId: res.locals.videoId,
      thumbnailId: res.locals.thumbnailId,
    })
  }
)

// Handshake to confirm the upload
app.post('/submit/confirm', verifyJwt, confirmToDatabase, (req, res) => {
  const { animationId } = res.locals
  res.json({ animationId })
})

/*#####################################################
        Stripe API
#######################################################*/

app.post(
  '/submit/create_user',
  verifyClient(),
  retrieveEmail,
  createCustomer,
  saveNewCustomerToDb,
  (req, res) => {
    res.send({ penis: res.locals.profileId })
  }
)

app.post(
  '/submit/create-subscription',
  verifyClient,
  retrieveCustomerId,
  createSubscription
)

/*#####################################################
        Forgot Password API
#######################################################*/

app.post(
  '/submit/forgotpassword',
  findUser,
  signForgotJwt,
  sendMail,
  (req, res) => {
    res.send({ res: res.locals })
  }
)

app.get('/submit/verifyForgotJwt/:jwt', verifyForgotJwt, (req, res) => {
  res.sendStatus(200)
})

// Route to verify JWT!
app.post(
  '/submit/resetpassword',
  verifyForgotJwt,
  updatePassword,
  (req, res) => {
    res.sendStatus(200)
  }
)

/*#####################################################
        PWA - Uploads
#######################################################*/

// Upload your Avatar
app.post(
  '/submit/upload_avatar',
  verifyClient(),
  generateFilename('ava'),
  saveImage('newAvatar'),
  storeAvatarInDb,
  (req, res) => {
    res.sendStatus(200)
  }
)

app.post(
  '/submit/upload_banner',
  verifyClient(),
  fileUpload('ban').single('banner'),
  storeBannerInDb,
  (req, res) => {
    res.send({ path: `/uploaded_files/${req.file.filename}` })
  }
)

app.post(
  '/submit/upload_headline',
  // verifyClient(),
  fileUpload('hd').single('headline'),
  (req, res) => {
    res.send({ path: `/uploaded_files/${req.file.filename}` })
  }
)

// Route to upload image to update news
app.post('/submit/news_image_upload', (req, res) => {
  res.sendStatus(200)
})

app.post(
  '/submit/feedback',
  verifyClient('instructor'),
  fileUpload('feed').single('upload'),
  thumbnail('thb', '480x270'),
  (req, res) => {
    res.json({
      videoId: req.file.filename,
      thumbnailId: res.locals.thumbnailId,
    })
  }
)

// Route to actually change the passwor
// Webhook handler for asynchronous events.
app.post(
  '/hooks',
  bodyParser.raw({ type: 'application/json' }),
  async (req, res) => {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event

    console.log('Hello!')
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers['stripe-signature'],
        'whsec_5bKmv2xxmFktKVVQt4H5o2gixSpGCHEW'
      )
    } catch (err) {
      console.log(err)
      console.log(`⚠️  Webhook signature verification failed.`)
      console.log(
        `⚠️  Check the env file and enter the correct webhook secret.`
      )
      return res.sendStatus(400)
    }
    // Extract the object from the event.

    // console.log(event)
    const dataObject = event.data.object

    // Handle the event
    // Review important events for Billing webhooks
    // https://stripe.com/docs/billing/webhooks
    // Remove comment to see the various objects sent for this sample
    const { period_end, customer } = dataObject

    switch (event.type) {
      case 'invoice.paid':
        // query = [period_end, customer]

        // client.query(`update framethrower_public.premium set status = 'active', period_end = $1,  where customer_id = $2`, [period_end, customer]])

        // 1)

        // Invoice as been paid
        // Used to provision services after the trial has ended.
        // The status of the invoice will show up as paid. Store the status in your
        // database to reference when a user accesses your service to avoid hitting rate limits.
        break
      case 'invoice.payment_failed':
        // We should Email the user, and update their status

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
      // Unexpected event type
    }
    res.sendStatus(200)
  }
)

// Here is the route for downloading the plugin.
app.post(
  '/submit/download_plugin',
  verifyClient(),
  findSerialKey,
  (req, res) => {
    fs.readFile(
      path.resolve(__dirname, '../../maya/framethrower_UI.py'),
      'utf-8',
      function(err, data) {
        if (err) throw err
        var output = data
          .replace(
            /00000000-0000-0000-0000-000000000000/g,
            res.locals.serial_key
          )
          .replace(/THISISTHEURL/g, req.headers.host)
          .replace(/CACHEPATH/g, req.body.path)

        res.setHeader(
          'Content-disposition',
          'attachment; filename=framethrower_UI.py'
        )
        res.setHeader('Content-type', 'text/plain')
        res.charset = 'UTF-8'
        res.write(output)
        res.end()
      }
    )
  }
)

app.use('/uploaded_files', express.static('uploaded_files'))
app.listen(port, () => console.log(`running on ${port}`))
