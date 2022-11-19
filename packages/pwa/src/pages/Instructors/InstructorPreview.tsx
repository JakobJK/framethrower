import * as React from 'react'
import { Link } from 'react-router-dom'
const anon_avatar = require('../../static/anonAvatar.png')
import { Profile as ProfileType } from '../../graphql/generated/types'

const InstructorPreview = ({
  instructor,
  i,
}: {
  instructor: ProfileType
  i: number
}) => {
  const {
    username,
    avatar,
    occupation,
    firstname,
    lastname,
    banner,
    organisation,
  } = instructor

  const colors = ['green', 'red', 'blue']
  const posters = [
    'https://www.vfxvoice.com/wp-content/uploads/2019/12/PIX-1-IW1-ABT1540_D23_v015.1125_R.jpg',
    'https://cdna.artstation.com/p/assets/images/images/000/132/868/large/maxx-burman-ironman-01-alt-final.jpg',
  ]

  return (
    <div className='w-full shadow'>
      <div
        className='w-full h-64'
        style={{
          backgroundImage:
            'url(' +
            `${banner ? `${STORAGE}/${banner}` : posters[i % posters.length]}` +
            ')',
        }}
      >
        <div
          className={`bg-gradient-to-${
            i % 2 === 1 ? 'l' : 'r'
          } from-gray-900 bg-opacity-50 flex justify-between items-center rounded-t rounded-b-none`}
        >
          <div
            className={`flex ${
              i % 2 === 1 ? 'flex-row-reverse' : ''
            } items-end w-full`}
          >
            <Link to={`profile/${username.toLowerCase()}`}>
              <img
                className='w-20 h-20'
                src={avatar ? `${STORAGE}/${avatar}` : anon_avatar}
              />
            </Link>
            <div className='flex flex-col px-4 justify-around'>
              <h3 className='font-light text-lg'>
                {occupation} at {organisation}
              </h3>
              <div
                className={`uppercase text-3xl font-bold text-${
                  colors[i % colors.length]
                }-500 ${i % 2 === 1 ? 'text-right' : 'text-left'}`}
              >
                {firstname} {lastname}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorPreview
