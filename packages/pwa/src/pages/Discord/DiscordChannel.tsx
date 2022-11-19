import * as React from 'react'

const discordLogo = require('../../static/discord.svg')

const DiscordChannel = () => {
  return (
    <div className='w-full flex flex-col justify-between'>
      <h1 className='text-xl font-semibold px-8 py-4'>Discord Channel!</h1>
      <p className='px-8 leading-normal'>
        We utilize Discord as a means of strengthen our community. We can talk
        about anything, and quickly reach out to everyone in the community.
        Animators of all levels hang out here!
      </p>
      <div className='px-8 py-4'>
        <a href='https://discord.gg/9HP3a32Zfq' target='_blank'>
          <div className='bg-indigo-600 hover:bg-indigo-500 p-2 hidden rounded xl:inline-block'>
            <img
              aria-label='discord logo'
              src={discordLogo}
              width='20'
              height='20'
              className='inline-block'
            />
            <span className='px-2 uppercase font-semibold align-bottom'>
              Click here to join our Discord Channel!
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default DiscordChannel
