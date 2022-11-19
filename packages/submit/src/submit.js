const axios = require('axios')
const graphql = require('graphql')
const gql = require('graphql-tag')
const { get } = require('lodash')
const { Client } = require('pg')

// Used if animation already exist and only need a new submission
const CREATE_SUBMISSION = gql`
  mutation registerSubmission(
    $comment: String!
    $animationId: String!
    $proFeedback: Boolean!
    $videoId: UUID!
    $authorId: UUID!
    $thumbnailUrl: String!
  ) {
    __typename
    registerSubmission(
      input: {
        _thumbnailUrl: $thumbnailUrl
        _comment: $comment
        _uploadId: $videoId
        _animationId: $animationId
        _profileId: $authorId
        _proFeedback: $proFeedback
      }
    ) {
      animationByAnimationId {
        id
      }
    }
  }
`

// Used if animation
const CREATE_ANIMATION = gql`
  mutation registerAnimation(
    $title: String!
    $startFrame: Int!
    $endFrame: Int!
    $thumbnailUrl: String!
    $comment: String!
    $videoId: UUID!
    $authorId: UUID!
    $proFeedback: Boolean!
  ) {
    __typename
    registerAnimation(
      input: {
        _title: $title
        _startFrame: $startFrame
        _endFrame: $endFrame
        _thumbnailUrl: $thumbnailUrl
        _comment: $comment
        _uploadId: $videoId
        _profileId: $authorId
        _proFeedback: $proFeedback
      }
    ) {
      animation {
        id
      }
    }
  }
`

module.exports = {
  confirmToDatabase: (req, res, next) => {
    const {
      videoId,
      thumbnailId,
      title,
      startFrame,
      endFrame,
      newProject,
      animationId,
      comment,
      proFeedback,
    } = req.body

    const authorId = res.locals.profileId

    const commonOptions = {
      comment,
      videoId,
      authorId,
      proFeedback,
      thumbnailUrl: thumbnailId,
    }
    const newSubmissionsOptions = { ...commonOptions, animationId }
    const newAnimationsOptions = {
      ...commonOptions,
      startFrame,
      endFrame,
      title,
      authorId,
    }
    const useOptions = newProject ? newAnimationsOptions : newSubmissionsOptions
    const useQuery = newProject ? CREATE_ANIMATION : CREATE_SUBMISSION

    console.log(useOptions)

    axios({
      url: 'http://postgraphile:5000/graphql',
      method: 'post',
      data: {
        query: graphql.print(useQuery),
        variables: { ...useOptions },
      },
    })
      .then(result => {
        const animationId = newProject
          ? get(result, 'data.data.registerAnimation.animation.id', null)
          : get(
              result,
              'data.data.registerSubmission.animationByAnimationId.id',
              null
            )
        if (animationId === null) return res.sendStatus(500)
        res.locals.animationId = animationId
        return next()
      })
      .catch(e => console.log('Error: ', e))
  },

  submitFileToDatabase: async (req, res, next) => {
    const client = new Client()
    await client.connect()

    sqlQuery =
      'insert into framethrower_hidden.upload (profile_id, file_url, purpose) values ($1, $2, $3) returning id;'

    const response = await client.query(sqlQuery, [
      res.locals.profileId,
      req.file.filename,
      'submission',
    ])

    res.locals.videoId = response.rows[0].id
    await client.end()
    return next()
  },
}
