import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link, withRouter } from 'react-router-dom'

import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import { useRegisterProfileMutation } from '../../graphql/generated/hooks'

const SignupForm = props => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const [emailError, setEmailError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const [signupMutation] = useRegisterProfileMutation()
  const onSubmit = e => {
    signupMutation({
      variables: e,
    })
      .then(response => {
        props.history.replace({ pathname: '/login', state: { signup: true } })
      })
      .catch(err => {
        if (err.message.includes('profile_username_key')) setUsernameError(true)
        if (err.message.includes('profile_secrets_email_key'))
          setEmailError(true)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col justify-center items-center mx-auto max-w-sm mt-64'>
        <div className='w-full text-center m-4'>
          <Controller
            control={control}
            name='email'
            defaultValue=''
            render={({ field }) => (
              <TextField
                label='Email Address'
                fullWidth
                autoComplete='email'
                variant='outlined'
                {...field}
              />
            )}
            rules={{
              pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
            }}
          />
        </div>
        <div className='w-full text-center m-4'>
          <Controller
            control={control}
            name='username'
            defaultValue=''
            render={({ field }) => (
              <TextField
                className='m-4'
                fullWidth
                label='username'
                variant='outlined'
                autoComplete='username'
                {...field}
              />
            )}
            rules={{
              minLength: 5,
              maxLength: 24,
              pattern: /^[a-zA-Z]([_]?[a-zA-Z0-9])+$/,
            }}
          />
        </div>
        <div className='w-full text-center m-4'>
          <Controller
            control={control}
            name='password'
            defaultValue=''
            render={({ field }) => (
              <TextField
                fullWidth
                variant='outlined'
                label='Password'
                type='password'
                autoComplete='current-password'
                {...field}
              />
            )}
          />
        </div>
        <br />
        {usernameError && <p>The Username already exists</p>}
        {emailError && <p>The Email is already in use</p>}
        {/* {errors?.username?.type === 'pattern' && (
          <p>
            Please enter a valid Username - It should only consists of letters,
            numbers, dashes or underscores
          </p>
        )}
        {errors?.email?.type === 'pattern' && <p>Please enter a valid email</p>} */}

        <div>
          <Button type='submit' fullWidth variant='contained' color='primary'>
            Sign Up
          </Button>
        </div>
        <div>
          <Link to='/login'>Already have an account? Sign in</Link>
        </div>
      </div>
    </form>
  )
}
export default withRouter(SignupForm)
