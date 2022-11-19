import * as React from 'react'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import { useChangePasswordMutation } from '../../graphql/generated/hooks'
import { useForm, Controller, useFormState } from 'react-hook-form'
import { vestResolver } from '@hookform/resolvers/vest'
import { validation } from './ChangePasswordValidation'

const { useState } = React

const ChangePassword = () => {
  const [submitted, setSubmitted] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const { register, handleSubmit, control, reset } = useForm({
    resolver: vestResolver(validation),
    mode: 'onChange',
  })

  const { isValid, errors } = useFormState({
    control,
  })

  const [changePassword] = useChangePasswordMutation()

  const onSubmit = async values => {
    setProcessing(true)

    await changePassword({
      variables: values,
    })
      .then(e => {
        setSubmitted(true)
      })
      .catch(e => {
        setSubmissionError(true)
      })
    reset()
    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mx-auto w-1/2 mt-4 flex-col justify-between'>
        <Controller
          control={control}
          name='currentPassword'
          defaultValue=''
          render={({ field }) => (
            <TextField
              ref={register('currentPassword')}
              label='Current Password'
              type='password'
              fullWidth
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='newPassword'
          defaultValue=''
          render={({ field }) => (
            <TextField
              label='New Password'
              type='password'
              ref={register('newPassword')}
              fullWidth
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='repeatedNewPassword'
          defaultValue=''
          render={({ field }) => (
            <TextField
              type='password'
              fullWidth
              ref={register('repeatedNewPassword')}
              label='Repeat New Password'
              {...field}
            />
          )}
        />
        {Object.keys(errors).length === 0 && !isValid && (
          <p>Passwords do not match!</p>
        )}

        <div className='py-4'>
          <Button
            disabled={!isValid || processing || submissionError}
            type='submit'
            variant='outlined'
            fullWidth
          >
            {processing ? 'Processing...' : 'Submit'}
          </Button>
          {submissionError && (
            <p>There was an error making your submission. Try again later :(</p>
          )}
          {submitted && <p>Congrats! This has been submitted!</p>}
        </div>
      </div>
    </form>
  )
}

export default ChangePassword
