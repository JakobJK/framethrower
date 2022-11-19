const { Client } = require('pg')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const sql2 = require('pg-sql2')

export const makeClient = async () => {
  const client = new Client()
  await client.connect()
  return client
}

export async function transaction(client, func) {
  try {
    let result = undefined
    await client.query('begin')
    console.log('transaction: begin')
    result = await func(client)
    await client.query('commit')
    console.log('transaction: commit')
    return result
  } catch (error) {
    await client.query('rollback')
    console.log('transaction: rollback')
    console.error(error)
    throw new createError.InternalServerError(error)
  }
}

export function useTransaction(fn) {
  return async (event, context) => {
    const client = await makeClient()

    try {
      return await transaction(client, () => fn(event, context, client))
    } finally {
      await client.end()
    }
  }
}

export async function authClient(lambdaEvent, client) {
  const compileAndRun = async query => {
    const { text, values } = sql2.compile(query)
    console.log({ text, values })
    return await client.query(text, values)
  }
  const { role, ...claims } = jwt.verify(
    lambdaEvent.headers.Authorization || lambdaEvent.headers.authorization,
    process.env.JWT_SECRET
  )

  console.log('authClient: setting role')
  await client.query(`set role ${String(role)}`)

  console.log('authClient: compiling jwt config')
  await compileAndRun(
    sql2.query`select ${sql2.join(
      Object.entries(claims).map(([key, value]) => {
        const preparedValue =
          typeof value === 'object' ? JSON.stringify(value) : String(value)
        const configKey = `jwt.claims.${key}`
        return sql2.fragment`set_config(${sql2.value(configKey)}, ${sql2.value(
          preparedValue
        )}, true)`
      }),
      ', '
    )}`
  )
  console.log('authClient: ALL DONE')

  return client
}
