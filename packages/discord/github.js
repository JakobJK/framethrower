const axios = require('axios')
const Discord = require('discord.js')

const discordToGit = {
  Jakes: 'JakobJK',
  BenK: 'BenKousholt',
}

// Github Options
//

const gitIssues = async options => {
  let res
  try {
    res = await axios.get(
      `https://api.github.com/search/issues?q=repo:framethrower-io/framethrower${
        options.type ? ' type:' + options.type : ''
      }
        ${options.state ? ' state:' + options.state : ''}`,
      {
        headers: {
          Authorization: `Token ${process.env.GITHUB_TOKEN}`,
        },
      }
    )
  } catch (e) {
    console.log(e)
  }

  const embed = new Discord.MessageEmbed()
  let message = '\n'
  // console.log(res.data)
  const newFields = res.data.items.map((x, i) => {
    // if (x.assignees[0].login === discordToGit[options.author]) {
    message += `${i + 1}. ${
      x.title.length > 30 ? x.title.substring(0, 27) + '...' : x.title
    } - ${x.html_url}\n`
    // }
    // return {
    //   name: `${i + 1}. ${
    //     x.title.length > 30 ? x.title.substring(0, 27) + '...' : x.title
    //   }`,
    //   value: `\n [Github Link](${x.html_url})`,
    // }
  })
  // embed
  //   .setTitle('Github Open Issues')
  //   .setDescription(
  //     'You have requested a list of currently open issues from Github!'
  //   )
  //   .addFields(newFields)

  return message
}

module.exports = {
  gitIssues,
}
