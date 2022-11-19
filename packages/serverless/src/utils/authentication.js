const jwt = require('jsonwebtoken')

const authentication = (lambdaFunc, permission) => (
  event,
  context,
  callback
) => {
  const { token } = event.header

  try {
    jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    console.error(error)
  }

  switch (permission) {
    case 'moderator':
      return lambdaFunc(event, context, callback)
    case 'admin':
    case 'instructor':
    case 'active':
    case 'inactive':
    case 'premium':
    case 'loggedIn':

    default:
      return callback(null, 'Is not logged in')
  }
}
