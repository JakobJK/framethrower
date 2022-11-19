const jwt = require('jsonwebtoken')
const { pluginVersion } = require('./pluginVersion')
const { useTransaction } = require('../utils')
const loginProjectQuery = require('../queries/login_projects_query.sql')
const loginUserQuery = require('../queries/login_user_query.sql')
async function login(event, context, client) {
  const { serial_key, version_string } = await JSON.parse(event.body)

  if (version_string !== pluginVersion[0].string) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
      }),
    }
  }

  let projectResults
  let userResult
  let user

  try {
    userResult = await client.query(loginUserQuery, [serial_key])
    user = userResult.rows[0]
  } catch (e) {
    console.log('Issue getting user')
  }

  let projects

  try {
    projectResults = await client.query(loginProjectQuery, [
      user.profile_id,
      user.concurrent_projects,
    ])
    projects = projectResults.rows
  } catch (e) {
    console.log('Issue getting projects')
  }

  const token = jwt.sign(
    {
      profileId: user.profile_id,
      role: user.role,
      maxFrames: user.max_frames,
      isInstructor: user.is_instructor,
      canSubmit: user.can_submit,
      maxFrames: user.max_frames,
      premiumType: user.premium_type,
    },
    process.env.MAYA_JWT_SECRET,
    { expiresIn: '24h' }
  )

  return {
    statusCode: 200,
    body: JSON.stringify({
      projects,
      user,
      token,
    }),
  }
}

export default useTransaction(login)
