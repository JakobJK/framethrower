import * as React from 'react'

import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'

import {
  useInstructorUpdateBioMutation,
  GetAllVInstructorSettingsDocument,
} from '../../../graphql/generated/hooks'

const { useState } = React

const ChangeBio = ({ biography }) => {
  const [processing, setProcessing] = useState(false)
  const [succeeeded, setSucceeeded] = useState(false)
  const [bio, setBio] = useState(biography || '')

  const [updateBio] = useInstructorUpdateBioMutation()

  const handleBioChange = () => {
    setProcessing(true)
    updateBio({
      variables: {
        bio,
      },
      refetchQueries: () => [{ query: GetAllVInstructorSettingsDocument }],
    })
      .then(res => {
        setProcessing(false)
        setSucceeeded(true)
      })
      .catch(e => {
        console.log('Error: ', e)
      })
  }
  return (
    <div className='px-24 py-4'>
      <p className='p-2 font-light'>
        The instructor bio should be written in 3rd person, and if you dont
        wanna do it, you should reach out to Ben and make him do it for you...
        Muahahahhaa!
      </p>
      <TextField
        fullWidth={true}
        placeholder={'Write your bio'}
        value={bio}
        onChange={e => setBio(e.target.value)}
        multiline={true}
        rows={5}
        variant='outlined'
      />
      <div className='p-2 flex justify-between'>
        <Button
          className='w-full'
          onClick={() => {
            setBio(biography || '')
          }}
        >
          Cancel
        </Button>
        <Button
          className='w-full'
          onClick={handleBioChange}
          disabled={processing}
          variant='outlined'
        >
          Save
        </Button>
      </div>
      <div className='text-center w-full '></div>
    </div>
  )
}

export default ChangeBio
