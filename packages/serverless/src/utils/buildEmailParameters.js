const template = require('./emailTemplate.html')
export function buildEmailParameters(options) {
  return {
    Source: options.source || 'no-reply@framethrower.io',
    Destination: {
      ToAddresses: options.emails,
    },
    Message: {
      Body: {
        Html: {
          Data: template,
        },
      },
      Subject: {
        Data: options.subject,
      },
    },
  }
}
