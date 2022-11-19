import * as React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import FtAvatar from '../../elements/FtAvatar'
import ReactQuill from 'react-quill'
import { NewsComment, Profile } from '../../graphql/generated/types'

const SmallComment = ({ comment }: { comment: NewsComment }) => {
  const { id, body, createdAt } = comment

  const { username, avatar } = comment.profileByProfileId as Profile

  return (
    <div className='flex py-2'>
      <div>
        <Link to={`/profile/${username}`}>
          <FtAvatar src={avatar || ''} />
        </Link>
      </div>
      <div className='pb-2 w-full'>
        <div className='pl-4 w-full'>
          <div className='flex justify-between'>
            <h5 className='font-bold'>
              <Link className='hover:underline' to={`/profile/${username}`}>
                {username}
              </Link>
            </h5>
            <div className='font-light text-xs'>
              {moment(createdAt).format('MMM Do')}
            </div>
          </div>
          <ReactQuill
            readOnly={true}
            defaultValue={JSON.parse(body)}
            modules={{
              toolbar: false,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SmallComment
