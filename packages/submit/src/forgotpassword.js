const nodemailer = require('nodemailer')
const { Client } = require('pg')
const jwt = require('jsonwebtoken')

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.FRAMEMAIL,
    pass: process.env.FRAMEPW,
  },
})

const exp = {}

exp.sendMail = (req, res, next) => {
  const mailOptions = {
    from: process.env.FRAMEMAIL,
    to: res.locals.email,
    subject: 'Request to reset password',
    html: `Yooo ${res.locals.username}.. \n Here it is! Yo Your link to password stuffs! <a href=${req.headers.host}/resetpassword?jwt=${res.locals.token}>Coookie!!</a>`,
  }
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('error in sendMail', error)
    }
    req.headers.host
    return next()
  })
}

exp.findUser = (req, res, next) => {
  const { email } = req.body
  const client = new Client()
  client.connect()
  client.query(
    `select username, profile_id, email from framethrower_private.profile_secrets
    join framethrower_public.profile ON profile.id = profile_secrets.profile_id
    where email =$1 limit 1;`,
    [email],
    (err, response) => {
      if (err) {
        client.end()
        next(err)
      } else {
        console.log(response.rows[0])
        res.locals.profileId = response.rows[0].profile_id
        res.locals.username = response.rows[0].username
        res.locals.email = response.rows[0].email
        client.end()
        return next()
      }
    }
  )
}

exp.signForgotJwt = (req, res, next) => {
  const { profileId } = res.locals
  const token = jwt.sign(
    {
      profileId,
    },
    process.env.PASSWORD_RECOVER_JWT_SECRET,
    { expiresIn: '24h' }
  )
  res.locals.token = token
  return next()
}

exp.verifyForgotJwt = (req, res, next) => {
  const token = req.params.jwt || req.headers.authorization
  try {
    const result = jwt.verify(token, process.env.PASSWORD_RECOVER_JWT_SECRET)
    res.locals.profileId = result.profileId
  } catch {
    return res.status(401).send({ error: 'Invalid token' })
  }
  return next()
}

exp.updatePassword = (req, res, next) => {
  const { password, repeatPassword } = req.body.data
  if (password !== repeatPassword)
    return res.send({ error: 'Passwords are not the same input' })

  const client = new Client()
  client.connect()
  client.query(
    `update framethrower_private.profile_secrets set password_hash = crypt($1, gen_salt('bf')) where profile_id = $2`,
    [password, res.locals.profileId],
    (err, response) => {
      if (err) {
        client.end()
        next(err)
      } else {
        client.end()
        return next()
      }
    }
  )
}

module.exports = exp
