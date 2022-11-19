import React, { useState } from 'react'
import axios from 'axios'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
const forgotpassword = require('../../static/forgotpassword.png')
import { useForm, Controller } from 'react-hook-form'

const ForgotPassword = () => {
  const [processing, setProcessing] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [responseError, setResponseError] = useState(false)
  const { handleSubmit, formState, control, reset } = useForm({
    mode: 'onChange',
  })

  const onSubmit = handleSubmit(data => {
    setProcessing(true)
    axios
      .post(`${SERVERLESS}/forgotpassword`, { email: data.email })
      .then(e => {
        setSubmitted(true)
        setProcessing(false)
        reset()
      })
      .catch((err: Error) => {
        reset()
        setResponseError(true)
        setProcessing(false)
        console.log('ooooh nooo', err)
      })
  })

  return (
    <div className='flex justify-center p-8'>
      <form
        onSubmit={onSubmit}
        className='flex p-8 bg-gray-800 flex-col rounded shadow'
      >
        <div className='mx-auto'>
          <img aria-label='Forgot password illustration' src={forgotpassword} />
        </div>

        <h1 className='p-8 text-lg text-center opacity-50'>Forgot Password</h1>

        <p className='px-8 max-w-2xl'>
          It happens! We are all getting older and forgetting the password is
          only one of the signs! Luckily, you can supply us with your email, and
          if it matches a registered user, we will send you a link where you can
          securely reset your password!
        </p>

        <div className='opacity-50 text-sm font-light p-8 max-w-2xl'>
          * Unfortunately, this functionality will only work if you have a
          @framethrower.io E-mail, because Amazon is being a bunch of turds.
          I'll figure it out
        </div>

        <div className='flex justify-center'>
          <div className='p-4'>
            <Controller
              name='email'
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'Please provide a proper email!',
                },
              }}
              render={({ field }) => (
                <TextField
                  placeholder='Your Email'
                  {...field}
                  disabled={responseError || submitted}
                />
              )}
            />
          </div>
          <div className='p-4'>
            <Button
              type='submit'
              disabled={
                !formState.isValid || processing || submitted || responseError
              }
              variant='outlined'
              value='Send Reset Password Link'
            >
              Send me an email!
            </Button>
          </div>
        </div>
        {formState.errors.email && (
          <p className='text-sm opacity-50'> * Input a valid email address</p>
        )}

        {submitted && (
          <div className='p-4 bg-green-600 w-full text-center text rounded'>
            Great! If a user is registered with that e-mail, they will receive
            an Email shortly!
          </div>
        )}
        {responseError && (
          <div className='p-4 bg-red-600 w-full text-center text rounded'>
            It looks like there was a server issue on our end. :(.... If the
            issue persist, notify the engineering team!
          </div>
        )}
      </form>
    </div>
  )
}

export default ForgotPassword
