// React Redux Imports
import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link, RouteComponentProps } from 'react-router-dom'
import Button from '../../elements/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { TokenContext } from '../../context/Authenticated'
const LogIn = require('../../static/LogIn.png')

const { useState, useContext } = React

const useStyles = makeStyles(theme => {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }
})

interface LoginState {
  mainMessage?: string
  secMessage?: string
  goback?: string
}

const Login = (props: RouteComponentProps) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: 'onChange' })

  const classes = useStyles()
  const ctx = useContext(TokenContext)
  const [loginSucces, setLoginSucces] = useState(false)
  const [error, setError] = useState('')
  const state = props.history.location.state || ({} as LoginState)

  const { mainMessage, secMessage } = state

  const onSubmit = handleSubmit(values => {
    const headers: HeadersInit = new Headers()
    headers.set('Content-Type', 'application/json')

    fetch(`${SERVERLESS}/authenticate`, {
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
      method: 'post',
      credentials: 'include',
      headers,
    })
      .then(res => res.json())
      .then(data => {
        const token = data?.token ?? null

        if (token !== null) {
          ctx.handleToken(token)
          setLoginSucces(true)
          const { goback } = state
          if (goback === '/login' || goback === '/signup') {
            props.history.push('/')
          } else if (goback) {
            props.history.push(goback)
          } else {
            props.history.push('/')
          }
        }
        if (token === null) {
          setError('Invalid Login Credentials. Try again.')
        }
      })
      .catch(e => {
        console.log(e)
      })
  })

  return (
    <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
      <div>
        <img arial-label='Login' src={LogIn} />
        {mainMessage && (
          <div
            className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
            role='alert'
          >
            {mainMessage && <p className='font-bold'>{mainMessage}</p>}
            {secMessage && <p className='text-sm'>{secMessage}</p>}
          </div>
        )}
        <Container component='main' maxWidth='xs'>
          {loginSucces === false ? (
            <div className={classes.paper}>
              <form className={classes.form} onSubmit={onSubmit}>
                <Controller
                  name='username'
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      margin='normal'
                      variant='outlined'
                      fullWidth
                      label='Email or Username'
                      {...field}
                    />
                  )}
                />
                <Controller
                  name='password'
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      margin='normal'
                      variant='outlined'
                      fullWidth
                      label='Password'
                      type='password'
                      {...field}
                    />
                  )}
                />
                {error && <p>{error}</p>}
                {errors?.email?.type === 'pattern' && (
                  <p>Please enter a valid email</p>
                )}
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to='/forgotpassword' className='hover:underline'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to='/signup' className='hover:underline'>
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          ) : (
            <div>Thanks for loggin in!</div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default Login
