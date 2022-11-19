require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const { help, commandNotFound } = require('./messages')
const { toggleLights } = require('./lights')
const { gitIssues } = require('./github')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async msg => {
  switch (msg.content) {
    case '!toggleJake':
      const hours = new Date().getHours()
      if (hours > 9 && hours < 23) {
        toggleLights()
        msg.reply(`You've toggled Jakes Lights`)
      } else {
        msg.reply(
          `Ssh! Nancy has gone to bed, so you shouldn't mess with the lights then!`
        )
      }
    case '!help':
      msg.reply(help)
      break
    default:
      if (msg.content.startsWith('!')) {
        msg.reply(commandNotFound)
      }
  }
})

client.login(process.env.BOT_TOKEN)
