import http from 'http'
import { EOL } from 'os'

import 'dotenv/config'

import config from './postgraphile_cfg'
import { createApp } from './app'
import { createPool } from './utils/database'

const {
  DATABASE_URL = 'postgres://framethrower:thisshouldwork@ft-staging-db.ciebtel4wvs4.us-east-1.rds.amazonaws.com:5432/framethrower',
  PORT = 5000,
} = process.env

if (require.main === module) {
  main().then(
    () => {
      consola.info('Server shutdown gracefully')
      process.stdout.write(EOL)
    },
    error => {
      consola.error(error)
      process.exit(1)
    }
  )
}

export default async function main() {
  const database = await createPool(DATABASE_URL)
  const server = http.createServer(
    createApp({
      database,
      config,
    })
  )

  process.stdout.write(EOL)
  process.once('SIGTERM', () => server.close())
  server.listen(PORT, () => {
    consola.info(`Server listening on port ${PORT}`)
  })

  return new Promise((resolve, reject) => {
    server.once('error', reject)
    server.once('close', () => {
      database.end().then(resolve, reject)
    })
  })
}
