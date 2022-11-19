import * as React from 'react'
const botAvatar = require('../../static/botAvatar.png')
const discordLogo = require('../../static/discord.svg')
const tumbleweedLogo = require('../../static/tumbleweed.png')

import withTitle from '../../context/withTitle'
import FTBot from './FTBot'
import DiscordChannel from './DiscordChannel'
import Tumbleweed from './Tumbleweed'

const Discord = () => {
  return (
    <div className='flex flex-col  my-8 break-normal justify-center items-center justify-items-center'>
      {[
        {
          img: discordLogo,
          key: 'channel',
          border: false,
          component: <DiscordChannel />,
        },
        {
          img: botAvatar,
          key: 'bot',
          border: true,
          component: <FTBot />,
        },
        {
          img: tumbleweedLogo,
          key: 'tumbleweed',
          border: true,
          component: <Tumbleweed />,
        },
      ].map((x, i) => {
        const even = i % 2 === 0
        return (
          <div
            key={x.key}
            className={`flex w-full my-6  bg-opacity-50 max-w-2xl rounded  ${
              even ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className='flex justify-center items-center bg-indigo-500 bg-opacity-25 rounded p-6'
            >
              <img
                width='150'
                className={
                  x.border
                    ? 'rounded-full border-solid border-8 border-light-blue-500'
                    : ''
                }
                src={x.img}
              />
            </div>
            <div className='w-2/3 flex justify-center items-center rounded'>
              {x.component}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default withTitle(Discord, 'Discord')
