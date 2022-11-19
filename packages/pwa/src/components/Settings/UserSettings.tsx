import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import { useRegisterProfileDetailsMutation } from '../../graphql/generated/hooks'

const UserSettings = ({ profile }) => {
  const [updateProfileDetailsMutation] = useRegisterProfileDetailsMutation()
  const [submitted, setSubmitted] = useState(false)
  const { formState, handleSubmit, control } = useForm({
    defaultValues: {
      username: profile.username,
      firstname: profile.firstname,
      lastname: profile.lastname,
      occupation: profile.occupation,
      organisation: profile.organisation,
      status: profile.status,
      about: profile.about,
    },
  })

  // Need to update the cache on this object
  const onSubmit = ({
    firstname,
    lastname,
    occupation,
    about,
    organisation,
  }) => {
    updateProfileDetailsMutation({
      variables: {
        firstname: firstname || null,
        lastname: lastname || null,
        occupation: occupation || null,
        about: about || null,
        organisation: organisation || null,
      },
    }).then(response => {
      setSubmitted(true)
    })
  }
  return (
    <>
      {submitted && <p>Your changes has been updated!</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mx-auto mt-4 flex-col justify-between w-1/2'>
          <h3 className='text-lg py-4'>User Settings</h3>
          <Controller
            control={control}
            defaultValue={profile.firstname}
            name='firstname'
            render={({ field }) => (
              <TextField {...field} fullWidth label='First Name' />
            )}
          />
          <Controller
            control={control}
            defaultValue={profile.lastname}
            name='lastname'
            render={({ field }) => (
              <TextField {...field} fullWidth label='Last Name' />
            )}
          />
          <Controller
            control={control}
            defaultValue={profile.occupation}
            name='occupation'
            render={({ field }) => (
              <TextField {...field} fullWidth label='occupation' />
            )}
          />
          <Controller
            control={control}
            defaultValue={profile.organisation}
            name='organisation'
            render={({ field }) => (
              <TextField {...field} fullWidth label='organisation' />
            )}
          />
          <Controller
            control={control}
            defaultValue={profile.about}
            name='about'
            render={({ field }) => (
              <TextField
                multiline
                fullWidth
                label='about'
                rows={5}
                rowsMax={5}
                {...field}
              />
            )}
          />
          <div className='pt-8'>
            <Button type='submit' variant='outlined'>
              Submit
            </Button>
          </div>
        </div>
        <br />
      </form>
    </>
  )
}

export default UserSettings
