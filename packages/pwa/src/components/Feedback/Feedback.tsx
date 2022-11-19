import * as React from 'react'
import { Link } from 'react-router-dom'
import HlsPlayer from '../HlsPlayer'
import Header from './Header'
import { VFeedback } from '../../graphql/generated/types'

const { useState } = React

const Feedback = ({
  response: { allowed, username, link, createdAt, updatedAt, avatar },
}: {
  response: VFeedback
}) => {
  const [expanded, setExpanded] = useState(true)
  console.log(allowed, username, link, createdAt, updatedAt, avatar)

  const user = {
    username,
    avatar,
  }
  return (
    <div
      className={`my-2 w-full rounded shadow-2xl text-base bg-blue-200 border-blue-400 border-solid border-2 bg-opacity-10`}
    >
      <Header
        user={user}
        createdAt={createdAt}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      {expanded && (
        <div className='p-2'>
          {allowed ? (
            <HlsPlayer
              className='shadow-vignette'
              autoplay={false}
              url={`https://stream.mux.com/${link}.m3u8`}
              controls={true}
            />
          ) : (
            <>
              <p className='px-2'>
                This submission has received proffessional feedback by
                <Link
                  className='hover:underline text-gray-400 hover:text-white text-lg px-2'
                  to={`/profile/${username?.toLowerCase()}`}
                >
                  {username}
                </Link>
              </p>
              <p className='p-2 text-sm'>
                If you are interested in watching the feedback, as well as
                receiving feedback on your own animations, keep an eye out for
                the <span className='text-blue-400 font-semibold'>PRO</span>
                <span className='font-semibold'>MEMBERSHIP</span>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Feedback
