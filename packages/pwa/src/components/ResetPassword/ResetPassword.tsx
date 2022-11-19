import React, { useEffect, useState } from 'react'
import qs from 'qs'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../../elements/Button'
import { RouteComponentProps } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { useForm, Controller } from 'react-hook-form'
const ResetPassword = (props: RouteComponentProps) => {
  const [validJwt, setValidJwt] = useState(false)
  const [newPassError, setNewPassError] = useState('')
  const parsed = qs.parse(props.location.search.slice(1))

  const { handleSubmit, control } = useForm()

  useEffect(() => {
    axios
      .post(`${SERVERLESS}/verifyforgotjwt`, {
        authorization: parsed.jwt,
      })
      .then(e => {
        if (e.status === 200) setValidJwt(true)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const onSubmit = handleSubmit(data => {
    const { password, repeatPassword } = data
    if (password !== repeatPassword)
      return setNewPassError('Passwords do not match')

    axios
      .post(`${SERVERLESS}/resetpassword`, data, {
        headers: {
          authorization: parsed.jwt,
        },
      })
      .then(e => {
        props.history.replace({
          pathname: '/login',
          state: {
            mainMessage: 'Succesfully changed your password',
            secMessage: 'You can now login using your new password',
          },
        })
      })
  })

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      {validJwt ? (
        <>
          <form onSubmit={onSubmit} className=' max-w-lg w-full'>
            <div>
              Your link got successfully verified!
              <br />
              You can now change your password!
            </div>
            <div className='py-4 w-full'>
              <Controller
                control={control}
                name='password'
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    fullWidth
                    variant='outlined'
                    type='password'
                    label='New Password'
                    {...field}
                  />
                )}
              />
            </div>
            <div className='py-4 w-full'>
              <Controller
                control={control}
                name='repeatPassword'
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    label='Repeat New Password'
                    type='password'
                    fullWidth
                    variant='outlined'
                    {...field}
                  />
                )}
              />
            </div>
            <div className='py-4 w-full'>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Update your password
              </Button>
            </div>
          </form>
          {newPassError && <p>{newPassError}</p>}
        </>
      ) : (
        <div className='p-8 max-w-xl'>
          <h1 className='text-xl opacity-50 font-semibold p-4'>
            Shit. something went wrong.
          </h1>
          You either took too long to follow the link, or we messed up! Try to
          request a new{' '}
          <Link
            to='/forgotpassword'
            className='hover:underline text-gray-400 hover:text-white'
          >
            e-mail link
          </Link>
          . If the issue persist, reach out!{' '}
        </div>
      )}
    </div>
  )
}

export default ResetPassword
