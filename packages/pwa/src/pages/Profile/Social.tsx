import * as React from 'react'

import Icons from '../../elements/SocialIcons'
import { ProfileSocial as ProfileSocialType } from '../../graphql/generated/types'

const Social = ({ social }: { social: ProfileSocialType }) => {
  let render = false

  const arrIcons = Object.keys(Icons).map(x => {
    if (social[x]) render = true
    return social[x] ? (
      <a target='_blank' href={social[x]} key={`social_${x}`}>
        <img
          alt={`${x} logo`}
          className={`w-10 h-10 opacity-60 hover:opacity-75`}
          src={Icons[x]}
        />
      </a>
    ) : (
      <img className={`w-10 h-10 opacity-10`} src={Icons[x]} />
    )
  })

  return render ? (
    <div className='w-full my-4 mx-0 p-4 max-w-4xl bg-gray-800 rounded'>
      <div className='flex justify-around'>{arrIcons}</div>
    </div>
  ) : null
}

export default Social
