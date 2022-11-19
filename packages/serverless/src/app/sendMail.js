import AWS from 'aws-sdk'

const ses = new AWS.SES({ region: 'us-east-1' })

const sendMail = async (event, context, callback) => {
  const params = {
    Source: 'no-reply@framethrower.io',
    Destination: {
      ToAddresses: ['jakobjk@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Clean up your room!',
        },
      },
      Subject: {
        Data: 'lmao',
      },
    },
  }

  try {
    const result = await ses.sendEmail(params).promise()
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

export default sendMail
