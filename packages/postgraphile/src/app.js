const express = require('express')
const { postgraphile } = require('postgraphile')
const ConnectionFilterPlugin = require('postgraphile-plugin-connection-filter')
const jwtInvalidation = require('./jwtInvalidation')

const cors = require('cors')

const {
  JWT_SECRET,
  PGPORT,
  PGHOST,
  PGPASSWORD,
  PGUSER,
  PGDATABASE,
} = process.env

const isProduction = process.env.NODE_ENV === 'production'
const options = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '5000',

  appendPlugins: [ConnectionFilterPlugin],
  dynamicJSON: true,
  enableQueryBatching: true,
  graphiql: true,
  enhanceGraphiql: !isProduction,
  allowExplain: req => {
    return true
  },

  showErrorStack: true,
  jwtSecret: JWT_SECRET,
  jwtTokenIdentifier: 'framethrower_public.jwt_token',
  jwtPgTypeIdentifier: '"framethrower_public".jwt_token',
  pgDefaultRole: 'framethrower_anonymous',
  disableDefaultMutations: true,
  ignoreRBAC: false,
  setofFunctionsContainNulls: false,

  graphileBuildOptions: {
    connectionFilterAllowEmptyObjectInput: true, // default: false
  },

  disableQueryLog: isProduction,
  extendedErrors: isProduction
    ? []
    : [
        'severity',
        'code',
        'detail',
        'hint',
        'position',
        'internalPosition',
        'internalQuery',
        'where',
        'schema',
        'table',
        'column',
        'dataType',
        'constraint',
        'file',
        'line',
        'routine',
      ],
  showErrorStack: !isProduction,
}

const app = express()
app.use(cors())

app.get('/healthcheck', (req, res) => res.sendStatus(200))

app.use(
  jwtInvalidation,
  postgraphile(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
    'framethrower_public',
    options
  )
)

app.listen(process.env.PORT || 5000)
