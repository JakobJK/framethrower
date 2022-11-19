import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'

import { useRegisterSocialMutation } from '../../graphql/generated/hooks'

const Social = ({
  social: {
    facebook,
    instagram,
    twitter,
    linkedin,
    artstation,
    vimeo,
    youtube,
    www,
  },
}) => {
  const [updateProfileDetailsMutation] = useRegisterSocialMutation()
  const [processing, setProcessing] = useState(false)
  const { handleSubmit, control } = useForm({
    defaultValues: {
      facebook,
      instagram,
      twitter,
      linkedin,
      artstation,
      vimeo,
      youtube,
      www,
    },
  })
  const onSubmit = data => {
    setProcessing(true)
    updateProfileDetailsMutation({ variables: data })
      .then(response => {
        setProcessing(false)
      })
      .catch(e => {
        setProcessing(false)
        console.log(e)
      })
  }

  const platforms = [
    { platform: 'facebook', label: 'Facebook' },
    { platform: 'instagram', label: 'Instagram' },
    { platform: 'twitter', label: 'Twitter' },
    { platform: 'linkedin', label: 'LinkedIn' },
    { platform: 'artstation', label: 'ArtStation' },
    { platform: 'vimeo', label: 'Vimeo' },
    { platform: 'youtube', label: 'YouTube' },
    { platform: 'www', label: 'Personal Website' },
  ].map(x => (
    <Controller
      key={x.platform}
      control={control}
      name={x.platform}
      render={({ field }) => <TextField {...field} fullWidth label={x.label} />}
    />
  ))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mx-auto mt-4 flex-col justify-between w-1/2'>
        {platforms}
        <div className='pt-8'>
          <Button
            type='submit'
            variant='outlined'
            disabled={processing}
            fullWidth
          >
            Submit
          </Button>
        </div>
      </div>
      <br />
    </form>
  )
}

export default Social
