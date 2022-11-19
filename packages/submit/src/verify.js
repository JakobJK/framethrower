const axios = require('axios')
const jwt = require('jsonwebtoken')
const graphql = require('graphql')
const gql = require('graphql-tag')
const { get } = require('lodash')
const { Client } = require('pg')

module.exports = {
  newGetAnimations: (req, res, next) => {
    const {
      profile_id: profileId,
      concurrent_projects: concurrentProjects,
    } = res.locals.user
    const client = new Client()
    client.connect()
    client.query(
      `select
      framethrower_public.animation_get_submission_amounts(animation.*) as totalCount,
      framethrower_public.animation_pending_feedback(animation.*) as pending_feedback,
      id,
      title,
      start_frame,
      end_frame
      from framethrower_public.animation where animation.profile_id = $1 limit $2 ;`,
      [profileId, concurrentProjects],
      (err, response) => {
        client.end()
        res.locals.projects = response.rows
        return next()
      }
    )
  },

  newVerifyUser: (req, res, next) => {
    const invalid_id = { error: 'Not a Valid Framethrower Serial Key' }
    const { serial_key: serialKey, clientID } = req.body
    // Need to add confirmation regarding version
    const client = new Client()
    client.connect()
    client.query(
      `select
        framethrower_public.profile_premium_type(profile.*) as premium_type,
        premium_definition.max_frames,
        premium_definition.daily_posts,
        framethrower_public.profile_can_submit(profile.*) as can_submit,
        premium_definition.concurrent_projects,
        framethrower_public.profile_get_built_in_feedback(profile.*) as built_in_feedback,
        framethrower_public.profile_has_costumer_id(profile.*) as has_costumer_id,
        framethrower_public.profile_is_instructor(profile.*) as is_instructor,
        profile.username,
        profile.role,
        profile_id from framethrower_public.profile
        join framethrower_private.profile_secrets ON profile_secrets.profile_id = profile.id
        join framethrower_public.premium_definition ON premium_definition.name = framethrower_public.profile_premium_type(profile.*)
        where profile_secrets.framethrower_serial_key = $1`,
      [serialKey],
      (err, response) => {
        client.end()

        res.locals.user = response.rows[0]

        return next()
      }
    )
  },

  verifyUser: (req, res, next) => {
    console.log('Verifying user...')

    const invalid_id = { error: 'Not a Valid Framethrower Serial Key' }
    const serialKey = req.body.serial_key
    const clientVersion = req.body.version
    if (serialKey === undefined) return res.status(401).send(invalid_id)
    if (typeof serialKey !== 'string') return res.status(401).send(invalid_id)

    if (
      serialKey.length !== 36 ||
      serialKey[8] !== '-' ||
      serialKey[13] !== '-' ||
      serialKey[18] !== '-' ||
      serialKey[23] !== '-'
    )
      return res.status(401).send(invalid_id)

    const GET_USER_FROM_SERIAL_KEY = gql`
      mutation getUserFromSerialKey($serialKey: String!) {
        __typename
        profileFromSerialKey(input: { serialKey: $serialKey }) {
          profile {
            id
            role
            username
            hasCostumerId
            animationsByProfileId {
              nodes {
                startFrame
                endFrame
                title
                id
                submissionsByAnimationId {
                  totalCount
                }
              }
            }
          }
        }
      }
    `
    axios({
      url: 'http://postgraphile:5000/graphql',
      method: 'post',
      data: {
        query: graphql.print(GET_USER_FROM_SERIAL_KEY),
        variables: {
          serialKey,
        },
      },
    })
      .then(result => {
        const profileId = get(
          result,
          'data.data.profileFromSerialKey.profile.id',
          null
        )
        if (profileId === null) return res.status(401).send(invalid_id)
        const { username, role, hasCostumerId } = get(
          result,
          'data.data.profileFrom  SerialKey.profile',
          null
        )
        const allProjects = get(
          result,
          'data.data.profileFromSerialKey.profile.animationsByProfileId.nodes',
          []
        )

        const projects = allProjects.map(x => {
          return {
            title: x.title,
            endFrame: x.endFrame,
            startFrame: x.startFrame,
            totalCount: x.submissionsByAnimationId.totalCount,
            animationId: x.animationId,
            id: x.id,
          }
        })
        res.locals.profileId = profileId
        res.locals.projects = projects
        res.locals.username = username
        res.locals.role = role
        res.locals.isCostumer = isCostumer

        return next()
      })
      .catch(e => console.log(e))
  },

  verifyJwt: (req, res, next) => {
    const { token } = req.headers

    try {
      const result = jwt.verify(token, process.env.MAYA_JWT_SECRET)
      res.locals.profileId = result.profileId
      res.locals.role = result.role
    } catch {
      return res.status(401).send({ error: 'Invalid token' })
    }
    return next()
  },

  signJwt: (req, res, next) => {
    const { profile_id: profileId, role } = res.locals.user

    const token = jwt.sign(
      {
        profileId,
        role,
      },
      process.env.MAYA_JWT_SECRET,
      { expiresIn: '24h' }
    )
    res.locals.token = token
    return next()
  },

  activateUser: (req, res, next) => {
    const { role, profileId } = res.locals
    if (role === 'FRAMETHROWER_INACTIVE') {
      const client = new Client()
      client.connect()
      client.query(
        `update framethrower_public.profile set role='framethrower_user' where id = $1;`,
        [profileId],
        (err, response) => {
          console.log(err ? err.stack : response.rows) // Hello World!
          client.end()
          return next()
        }
      )
    }
    return next()
  },
}
