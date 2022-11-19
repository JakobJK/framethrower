const { useTransaction } = require('../utils')
const framethrower_UI = require('../../../maya/framethrower_UI.py')
const { pluginVersion } = require('../maya/pluginVersion')
const framethrowerSerialkey = require('../queries/framethrower_serialkey.sql')
const jwt = require('jsonwebtoken')

async function downloadPlugin(event, context, client) {
  const { JWT_SECRET, ORIGIN, SERVERLESS } = process.env
  let decoded
  let serial_key
  let result

  try {
    decoded = jwt.verify(event.headers.Authorization, JWT_SECRET)
    if (decoded.role === 'framethrower_banned') {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 403,
      }
    }
  } catch (e) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 403,
    }
  }

  try {
    result = await client.query(framethrowerSerialkey, [decoded.id])
    if (result.rows.length > 0) {
      serial_key = result.rows[0].framethrower_serial_key
    }
  } catch (e) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 500,
    }
  }

  if (!serial_key) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 500,
    }
  }

  const object = JSON.parse(event.body)
  const cachefolder = object.path

  const personalizedFramethrowerUI = framethrower_UI
    .replace(
      /00000000-0000-0000-0000-000000000000/g,
      result.rows[0].framethrower_serial_key
    )
    .replace(/THISISTHEORIGIN/g, ORIGIN)
    .replace(/THISISTHEURL/g, SERVERLESS)
    .replace(/CACHEPATH/g, cachefolder)
    .replace(/VERSIONSTRING/g, pluginVersion[0].string)
    .replace(/VERSIONNUMBER/g, pluginVersion[0].version)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: personalizedFramethrowerUI,
  }
}

export default useTransaction(downloadPlugin)
