const fs = require('fs')
const carbone = require('carbone')
const moment = require('moment')


const input = {
  firstname: 'John',
  lastname: 'Wick',
}

const data = {
  ...input,
  date: moment().format('MMMM Do YYYY'),
}

const options = {
  convertTo: 'pdf',
}

const template = 'NDA_template.odt'

const dateObj = new Date()

let month = (dateObj.getUTCMonth() + 1).toString()
month = month.length > 1 ? month : '0' + month
let day = dateObj.getUTCDate()
var year = dateObj.getUTCFullYear()

carbone.render(`./${template}`, data, options, (err, res) => {
  if (err) {
    return console.log(err)
  }

  filename = `${template.split('_')[0]}_${data.firstname}${
    data.lastname
  }_${year}${month}${day}.pdf`

  fs.writeFileSync(`./${filename}`, res)
  process.exit()
})
