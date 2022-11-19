import * as React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import FtAvatar from '../../elements/FtAvatar'
import {
  Note as NoteTypes,
  Profile as ProfileType,
  Animation as AnimationType,
  Submission as SubmissionType,
} from '../../graphql/generated/types'

const Notes = ({ notes }: { notes: Array<NoteTypes> }) => {
  return notes.length > 0 ? (
    <div className='w-full my-4 mx-0	max-w-4xl p-4 bg-gray-800 rounded'>
      <table className='w-full rounded shadow'>
        <tbody>
          <tr>
            <th className='text-right p-4'>Animator</th>
            <th className='text-left'>Title</th>
            <th className='text-left'>Note</th>
            <th className='text-right p-4'>Note created</th>
          </tr>
          {notes.map((x, i) => {
            const { username, avatar } = x?.submissionBySubmissionId
              ?.animationByAnimationId?.profileByProfileId as ProfileType
            const { title } = x.submissionBySubmissionId
              ?.animationByAnimationId as AnimationType
            const {
              id: submissionId,
              animationId,
            } = x.submissionBySubmissionId as SubmissionType
            const { createdAt, paragraph } = x

            return (
              <tr
                key={`key_${title}`}
                className={'hover:bg-gray-700 hover:bg-opacity-10'}
              >
                <td className='p-1'>
                  <div className='flex items-center py-2'>
                    <div className='px-4'>
                      <Link to={`/profile/${username}`}>
                        <FtAvatar src={avatar || ''} />
                      </Link>
                    </div>
                    <div className='p-2'>
                      <Link to={`/profile/${username}`}>
                        <span className='font-semibold hover:underline'>
                          {username}
                        </span>
                      </Link>
                    </div>
                  </div>
                </td>
                <td>
                  <Link to={`/animation/${animationId}/${submissionId}`}>
                    {' '}
                    {title}
                  </Link>
                </td>
                <td>
                  <p className='truncate ... max-w-lg'>
                    <Link to={`/animation/${animationId}/${submissionId}`}>
                      {paragraph}
                    </Link>
                  </p>
                </td>
                <td className='text-right pr-4'>
                  {moment(createdAt).format('MMMM Do YYYY')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  ) : null
}

export default Notes
