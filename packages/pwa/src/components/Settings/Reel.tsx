import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useUpdateReelMutation } from '../../graphql/generated/hooks'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import EmbedVideo from '../../elements/EmbedVideo'

const { useState } = React

const Reel = ({ profile: { reel, reelDescription } }) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm()
  const [processing, setProcessing] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [error, setError] = useState('')
  const [updateReel] = useUpdateReelMutation()

  const { reelUrl } = watch()

  const onSubmit = handleSubmit(({ newReelDescription, reelUrl }) => {
    setProcessing(true)
    if (reel === reelUrl && reelDescription === newReelDescription) {
      setProcessing(false)
      return
    }
    updateReel({
      variables: {
        reelDescription: newReelDescription || null,
        reel: reelUrl || null,
      },
    })
      .then(response => {
        setUpdated(true)
        setProcessing(false)
      })
      .catch(e => [
        setError(
          'There was an error trying to update your reel information. Try again later!'
        ),
      ])
  })

  return (
    <>
      <div className='flex justify-center py-4'>
        <EmbedVideo link={reelUrl || reel} width={480} height={270} />
      </div>
      <form onSubmit={onSubmit}>
        <div className='w-1/2 mx-auto'>
          <div className='pt-2'>
            <Controller
              defaultValue={reel}
              control={control}
              name='reelUrl'
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='Reel URL - We currently only support vimeo or youtube'
                  {...field}
                />
              )}
            />
          </div>
          <div className='pb-2'>
            <Controller
              control={control}
              defaultValue={reelDescription}
              name='newReelDescription'
              render={({ field }) => (
                <TextField
                  placeholder={
                    'Describe your contributions to the shots in your show reel here!'
                  }
                  label='Reel Description'
                  fullWidth
                  multiline
                  rowsMax={4}
                  rows={4}
                  {...field}
                />
              )}
            />
          </div>
          {error && <p>THere was an error! </p>}
          {updated && (
            <p className='flex justify-center p-8 bg-green-600 rounded shadow'>
              Woohoo! You have updated your Reel information!!
            </p>
          )}
          <div className='py-2'>
            <Button
              fullWidth
              variant='outlined'
              disabled={processing || error !== ''}
              type='submit'
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Reel
