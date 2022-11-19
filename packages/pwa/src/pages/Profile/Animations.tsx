import * as React from 'react'
import AnimationCard from './AnimationCard'
import { Animation as AnimationType } from '../../graphql/generated/types'
const noanimations = require('../../static/noanimations.png')

const Animations = ({ animations }: { animations: Array<AnimationType> }) => {
  const anims = animations.map(x => {
    const submission = x?.submissionsByAnimationId?.nodes?.[0] ?? []
    return (
      <AnimationCard
        key={`key_${x.id}`}
        animation={x}
        submission={submission}
        submissionCount={x?.submissionsByAnimationId?.totalCount ?? 0}
        noteCount={submission?.notesBySubmissionId?.totalCount ?? 0}
      />
    )
  })

  return (
    <div className='w-full mx-0	my-4	max-w-4xl	bg-gray-800 rounded shadow p-8'>
      <div
        className={`flex ${
          anims.length > 0 ? 'justify-between' : 'justify-around'
        }`}
      >
        {anims.length > 0 ? (
          anims
        ) : (
          <div>
            <img src={noanimations} />
            <p className='w-full text-center p-8 opacity-50 text-lg'>
              We seem to be out of animations
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Animations
