'use strict'

export default async function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: now,
      },
      null,
      2
    ),
  }
}
