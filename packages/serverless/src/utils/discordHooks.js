const axios = require('axios')

export const postToDiscord = async (hookType, options) => {
  const {
    comment,
    animation_id,
    submission_id,
    title,
    start_frame,
    end_frame,
    username,
    avatar,
    // version_number,
    thumbnail_url,
  } = options

  const {
    ORIGIN,
    STORAGE,
    DISCORD_INSTRUCTOR,
    DISCORD_ANNOUNCEMENT,
  } = process.env

  const discordHooks = {
    tumbleweed: {
      username: 'Tumbleweed',
      content: `No one has submitted any notes for the animation ${title} by ${username}. Let's help a fellow animator out with some great notes!`,
      avatar_url: 'https://ft-staging.framethrower.io/discord/tumbleweed.png',
      webhook_url: `https://discord.com/api/webhooks/${DISCORD_ANNOUNCEMENT}`,
    },
    submission: {
      username: 'New Submission',
      content: `${username} has submitted a new version for the animation ${title}!`,
      avatar_url: 'https://ft-staging.framethrower.io/discord/botAvatar.png',
      webhook_url: `https://discord.com/api/webhooks/${DISCORD_ANNOUNCEMENT}`,
    },
    // feedback: {
    //   username: 'Feedback Request',
    //   content: `Instructors! It is time! ${username} has asked for feedback!`,
    //   avatar_url: 'blabla.jpg',
    //   webhook_url: ''
    // }
  }

  const hookObject = {
    username: discordHooks[hookType].username,
    avatar_url: discordHooks[hookType].avatar_url,
    content: discordHooks[hookType].content,
    embeds: [
      {
        author: {
          name: username,
          url: `${ORIGIN}/profile/${username}`,
          icon_url: `${STORAGE}/${avatar}`,
        },
        title,
        url: `${ORIGIN}/animation/${animation_id}/${submission_id}`,
        description: comment,
        color: 15258703,
        fields: [
          {
            name: 'frame range',
            value: `${start_frame} - ${end_frame}`,
            inline: true,
          },
          // {
          //   name: 'version',
          //   value: `v. ${version_number}`,
          //   inline: true,
          // },
        ],
        image: {
          url: `${STORAGE}/${thumbnail_url}`,
        },
      },
    ],
  }

  console.log(hookObject)
  try {
    await axios.post(discordHooks[hookType].webhook_url, hookObject)
  } catch (e) {
    console.log(e)
  }
}
