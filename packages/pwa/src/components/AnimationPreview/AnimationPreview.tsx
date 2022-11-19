import * as React from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import FtAvatar from '../../elements/FtAvatar'
import NoteIcon from '@material-ui/icons/Note'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import TextField from '@material-ui/core/TextField'
import Button from '../../elements/Button'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import DeleteModal from './DeleteModal'
import { truncate } from '../../util'
import IsYou from '../../context/IsYou'
import moment from 'moment'
import { useUpdateAnimationTitleMutation } from '../../graphql/generated/hooks'

import {
  VAnimationPreview as VAnimationPreviewType,
  Profile as ProfileType,
} from '../../graphql/generated/types'

const { useState } = React

const AnimationPreview = ({
  offset,
  animPreview,
}: {
  animPreview: VAnimationPreviewType
  offset: Number
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [editTitle, setEditTitle] = useState(false)
  const [titlewip, setTitlewip] = useState('')
  const [commitedTitle, setCommitedTitle] = useState(animPreview.title)

  const [updateAnimationTitle] = useUpdateAnimationTitleMutation()

  const profile = animPreview?.profileByProfileId as ProfileType

  const {
    id,
    thumbnailUrl,
    submissionId,
    shortComment,
    feedbackCount,
    notes,
    updatedAt,
    submissions,
    startFrame,
    endFrame,
    audio,
  } = animPreview

  return (
    <div className='w-full max-w-md shadow-lg text-gray-300 bg-gray-900 bg-opacity-25 rounded flex flex-col'>
      <Dialog
        open={showModal}
        onClose={(e: Event) => {
          setShowModal(false)
        }}
      >
        <DeleteModal
          animation={animPreview}
          setShowModal={setShowModal}
          offset={offset}
        />
      </Dialog>
      <div className='p-1'>
        <table className='min-w-full'>
          <tbody>
            <tr>
              <td className='w-1/4'>
                <div className='flex items-center p-1 truncate ...'>
                  <Link to={`/profile/${profile.username.toLowerCase()}`}>
                    <FtAvatar src={profile?.avatar || ''} />
                  </Link>
                  <div className='flex px-1 overflow-hidden'>
                    <span className='font-bold pl-1 hover:underline'>
                      <Link to={`/profile/${profile.username.toLowerCase()}`}>
                        {truncate(profile.username, 15)}
                      </Link>
                    </span>
                  </div>
                </div>
              </td>
              <td className='w-1/2 text-center'>
                {editTitle ? (
                  <TextField
                    placeholder={commitedTitle || ''}
                    onKeyDown={(e: React.KeyboardEvent) => {
                      if (e.key === 'Enter') {
                        const tmp = titlewip
                        setCommitedTitle(titlewip)
                        updateAnimationTitle({
                          variables: {
                            animationId: id,
                            title: titlewip,
                          },
                        }).catch(e => {
                          setCommitedTitle(tmp)
                        })

                        e.target.blur()
                      }
                      if (e.key === 'Escape') {
                        e.target.blur()
                      }
                    }}
                    onChange={e => {
                      setTitlewip(e.target.value)
                    }}
                    onBlur={e => {
                      setEditTitle(false)
                      setTitlewip('')
                    }}
                  />
                ) : (
                  <Link to={`/animation/${id}/${submissionId}`}>
                    <h3 className='font-bold truncate ... hover:underline'>
                      {truncate(commitedTitle || 'Untitled', 45)}
                    </h3>
                  </Link>
                )}
              </td>
              <td className='w-1/4 text-right'>
                <div className='float-right inline-block'>
                  <IsYou id={profile.id} flip={false}>
                    <IconButton
                      size='small'
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  </IsYou>
                  <IsYou id={profile.id} flip={true}>
                    <IconButton size='small' disabled={true}>
                      <MoreHorizIcon className='text-gray-600' />
                    </IconButton>
                  </IsYou>
                  {showMenu && (
                    <ClickAwayListener
                      onClickAway={() => {
                        setShowMenu(false)
                      }}
                    >
                      <ul className='absolute bg-gray-600'>
                        <li>
                          <Button
                            fullWidth
                            className='text-lg'
                            onClick={() => {
                              setEditTitle(true)
                            }}
                          >
                            Edit Title
                          </Button>
                        </li>

                        <li>
                          <Button
                            fullWidth
                            className='text-lg'
                            onClick={() => {
                              setShowModal(true)
                            }}
                          >
                            Delete
                          </Button>
                        </li>
                      </ul>
                    </ClickAwayListener>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to={`/animation/${id}/${submissionId}`}>
        <div
          className='w-full h-64 bg-center shadow-vignette'
          style={{ backgroundImage: `url(${STORAGE}/${thumbnailUrl})` }}
        />
      </Link>

      <div className='p-3 text-gray-300 flex flex-col flex-grow justify-between'>
        <div className='flex place-content-between'>
          <div className='flex text-sm'>
            <div className='pr-8'>
              <NoteIcon className='opacity-50' fontSize='small' />{' '}
              <span className='px-2 py-2'>{notes}</span>
              <span className='opacity-50'>note{notes !== '1' && 's'}</span>
            </div>
            <div>
              <span className='opacity-50'>Version. </span>
              <span className='px-2 py-2'>{submissions}</span>
            </div>
            <div>
              <span className={audio ? '' : 'opacity-50 px-2'}>
                {audio ? (
                  <VolumeUpIcon fontSize='small' />
                ) : (
                  <VolumeOffIcon fontSize='small' />
                )}
              </span>
            </div>
          </div>
          <div className='font-semibold text-xs'>
            {feedbackCount > 0 && (
              <>
                <span className='text-blue-400'>PRO</span>
                <span className='text-white'>FEEDBACK</span>
              </>
            )}
          </div>
        </div>
        <div className='p-2'>
          {shortComment ? (
            <ReactQuill
              readOnly={true}
              value={shortComment}
              modules={{
                toolbar: false,
              }}
            />
          ) : (
            <span className='text-gray-600'>
              {profile.username} did not leave a comment
            </span>
          )}
        </div>
        <div className='flex place-content-between text-gray-500'>
          <div className='font-light text-sm'>
            {startFrame + ' - ' + endFrame}
          </div>
          <div className='font-light text-sm'>
            {moment(updatedAt).format('MMM Do YY')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationPreview
