const {
  readFileSync,
  writeFileSync,
  unlinkSync,
  existsSync,
  mkdirSync,
  readdirSync,
  copyFileSync,
} = require('fs')
const carbone = require('carbone')
const moment = require('moment')
const jwt = require('jsonwebtoken')
const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const path = require('path')

const { useTransaction, createDocumentName } = require('../utils')

const { unpack } = require('@shelf/aws-lambda-brotli-unpacker')
const { execSync } = require('child_process')
const inputPath = path.join('/opt', 'lo.tar.br')
const outputPath = '/tmp/instdir/program/soffice.bin'

const NDA = async (event, context, client) => {
  const { PRIVATE_BUCKET: bucket } = process.env

  try {
    if (existsSync(inputPath)) {
      console.log('It exists!')
    } else {
      console.log('it did not exists')
    }
  } catch (e) {
    console.log(e)
  }

  try {
    await unpack({ inputPath, outputPath })
  } catch (e) {
    console.log('failed to unpack', e)
  }
  console.log('Hello! Lets start')
  const options = {
    convertTo: 'pdf',
  }
  const input = {
    firstname: 'John',
    lastname: 'Wick',
  }

  const data = {
    ...input,
    date: moment().format('MMMM Do YYYY'),
  }

  const documentName = 'NDA_template.odt'
  let template
  try {
    template = await s3
      .getObject({
        Bucket: bucket,
        Key: documentName,
      })
      .promise()
  } catch (e) {
    console.log('Could not get the document - booh ', e)
  }

  console.log(template, 'Assume this shit worked!')

  try {
    writeFileSync(`/tmp/${documentName}`, template.Body)
  } catch (e) {
    console.log('lets write a thing')
  }

  const filename = await createDocumentName(documentName, data)

  console.log('Here is the file name')

  console.log('Lets try carbone.render')
  try {
    if (!existsSync('/tmp/initfile.txt')) {
      //no warm container
      try {
        await execSync(`echo "Hello World Warming Up" > /tmp/initfile.txt`)
        execSync(
          `/tmp/instdir/program/soffice.bin --headless --invisible --nodefault --view --nolockcheck --nologo --norestore --nofirststartwizard --convert-to pdf "/tmp/initfile.txt" --outdir /tmp/`
        ) //fails code 81
      } catch (e) {
        console.log('first failed')
      }
    }

    try {
      carbone.render(`/tmp/${documentName}`, data, options, (err, res) => {
        if (err) {
          return console.log(err)
        }
        if (res) {
          console.log('There wasa res shit!')
        } else {
          console.log('there was freakin nuttin')
        }
        writeFileSync(`/tmp/${filename}`, res)
      })
    } catch (e) {
      console.log('This garbage library does not work! \n', e)
    }

    // execSync(
    //   `${outputPath} --headless --convert-to pdf --outdir /tmp /tmp/${documentName}`
    // )
  } catch (e) {
    console.log('Error with rendering with Carbone', e)
  }

  const pdfFile = readFileSync(`/tmp/${filename}`)

  try {
    await s3
      .putObject({
        Bucket: bucket,
        Key: filename,
        Body: pdfFile,
        ACL: 'public-read',
      })
      .promise()
  } catch (e) {
    console.log('Probably failing this thing!')
  }
  console.log('After carbone render that did Jack shit!')
  // Delete the generated PDF
  // unlinkSync(`/tmp/${filename}`)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}

export default NDA
