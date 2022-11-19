const jwt = require('jsonwebtoken')

const generateToken = () => {
  const audience = 'postgraphile'
  const issuer = 'postgraphile'
  const secret = process.env.JWT_SECRET || 'QMtun45DtydABtksqN'

  const tokenObject = {
    role: 'framethrower_admin',
    id: '5a990a43-f0d8-44ba-bc25-7e9e78af8fb6',
    instructor: 'active',
    premium: 'pro',
  }

  const token = jwt.sign(tokenObject, secret, {
    audience,
    issuer,
  })
  return token
}

console.log(generateToken())
