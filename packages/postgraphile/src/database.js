import { camelCase, mapKeys } from 'lodash'
import { Pool } from 'pg'

export async function createPool(connectionString) {
  if (POOL) return POOL

  const pool = new Pool({ connectionString })
  // Attempt to connect to postgres to verify the configuration works.
  const client = await pool.connect()

  // Release the "test" connection before we return the pool.
  client.release()
  return (POOL = pool)
}

export async function execQuery(query) {
  const { rows } = await query(query)
  return rows.map(row => mapKeys(row, (_, key) => camelCase(key)))
}
