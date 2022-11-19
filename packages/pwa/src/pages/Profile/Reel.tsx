import * as React from 'react'

import EmbedVideo from '../../elements/EmbedVideo'
import { Profile as ProfileType } from '../../graphql/generated/types'

const Reel = ({ user }: { user: ProfileType }) => {
  const { reelDescription, reel } = user
  return reel ? (
    <div className='w-full max-w-4xl	bg-gray-800 rounded shadow p-4'>
      <div className='flex justify-between p-4'>
        <div>
          <EmbedVideo link={reel || ''} width={480} height={270} />
        </div>
        <div className='p-4 w-full font-light'>
          {reelDescription ? reelDescription : 'No description Here'}
        </div>
      </div>
    </div>
  ) : null
}

export default Reel
