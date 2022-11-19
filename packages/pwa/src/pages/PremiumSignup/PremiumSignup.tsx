import * as React from 'react'
import WithPermission from '../../context/WithPermission'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import countries from '../../util/countries'
import { UserRole } from '../../graphql/generated/types'
import { useRefreshTokenMutation } from '../../graphql/generated/hooks'
import { useForm, Controller } from 'react-hook-form'
import Button from '../../elements/Button'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { TokenContext } from '../../context/Authenticated'
import { TokenContext as User } from '../../context/Role'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

const { useState, useContext } = React

const PremiumSignup = (props: RouteComponentProps) => {
  const { role } = useContext(User)
  const ctx = useContext(TokenContext)
  const [refreshToken] = useRefreshTokenMutation()
  const [isProcessing, setIsProcessing] = useState(false)
  const { register, handleSubmit, control } = useForm()
  const [checkoutError, setCheckoutError] = useState('')
  const [signupError, setSignupError] = useState('')

  const stripe = useStripe()
  const elements = useElements()

  const handleCardDetailsChange = (ev: StripeCardElementChangeEvent) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError('')
  }

  const handleFormSubmit = async () => {
    setIsProcessing(true)

    let cardElement
    if (!!elements) {
      cardElement = elements.getElement('card')
    }

    let card
    if (cardElement) {
      card = cardElement
    } else {
      return
    }

    let paymentMethodId
    try {
      const paymentMethodReq = await stripe?.createPaymentMethod({
        type: 'card',
        card,
      })

      if (paymentMethodReq?.error) {
        setCheckoutError(paymentMethodReq?.error?.message || '')
        setIsProcessing(false)
        return
      }

      paymentMethodId = paymentMethodReq?.paymentMethod?.id
    } catch (err) {
      setCheckoutError(err.message)
      return
    }

    const headers: HeadersInit = new Headers()
    headers.append('authorization', localStorage.getItem('token') || '')
    headers.set('Content-Type', 'application/json')

    fetch(`${SERVERLESS}/create-subscription`, {
      method: 'post',
      body: JSON.stringify({ paymentMethodId }),
      headers,
    })
      .then(async () => {
        const tkn = await refreshToken()
        const jwtToken = tkn?.data?.refreshJwtToken?.jwtToken as string
        ctx.handleToken(jwtToken)
        props.history.push({
          pathname: '/pro',
          state: { justJoined: true },
        })
      })
      .catch(e => {
        setSignupError('There was an issue regarding signing up!')
      })
  }

  const inactive = 'FRAMETHROWER_INACTIVE' as UserRole
  const banned = 'FRAMETHROWER_BANNED' as UserRole

  const registrationClosed = role === inactive || role === banned

  return (
    <WithPermission
      permission='loggedIn'
      message='You have to login order to sign up for premium membership!'
      redirect='/login'
    >
      <div className='flex flex-col break-normal justify-center items-center justify-items-center'>
        <div className='w-full mx-0	my-4	max-w-4xl	bg-gray-800 rounded shadow p-8'>
          {registrationClosed && (
            <div className='bg-red-700 flex flex-col rounded shadow mb-4 p-4'>
              <p>
                Your account is {role.split('_')[1].toLowerCase()}, and thus you
                cannot sign up for a pro account!
              </p>
              <p>
                Submit an Animation using our plugin to active your account!
                More details at our{' '}
                <Link className='hover:underline' to='/gettingstarted'>
                  Getting Started
                </Link>{' '}
                page
              </p>
            </div>
          )}
          <div className='flex justify-between rounded shadow'>
            <div className='p-4 rounded-l bg-gray-900 w-2/3 bg-opacity-25'>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='flex justify-between py-1'>
                  <div className='px-4 w-1/2'>
                    <Controller
                      control={control}
                      name='firstname'
                      render={({ field }) => (
                        <TextField
                          {...register('firstname', {
                            required: true,
                          })}
                          fullWidth
                          label='* First name'
                          disabled={registrationClosed}
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className='px-4 w-1/2'>
                    <Controller
                      name='lastname'
                      render={({ ...field }) => (
                        <TextField
                          label='* Last name'
                          disabled={registrationClosed}
                          fullWidth
                          {...field}
                        />
                      )}
                      control={control}
                    />
                  </div>
                </div>
                <div className='px-4 py-1'>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label='Company'
                        disabled={registrationClosed}
                        {...field}
                      />
                    )}
                    name='company'
                  />
                </div>
                <div className='px-4 py-1'>
                  <Controller
                    control={control}
                    name='address'
                    render={({ field }) => (
                      <TextField
                        label='* Address'
                        disabled={registrationClosed}
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='px-4 py-1'>
                  <Controller
                    control={control}
                    name='address2'
                    render={({ field }) => (
                      <TextField
                        label='Address Line 2'
                        fullWidth
                        disabled={registrationClosed}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='flex justify-between py-1'>
                  <div className='px-4 w-1/2'>
                    <Controller
                      control={control}
                      render={({ field }) => (
                        <TextField
                          disabled={registrationClosed}
                          fullWidth
                          label='* City'
                          {...field}
                        />
                      )}
                      name='city'
                    />
                  </div>
                  <div className='flex flex-col justify-end px-4 w-1/2 align-bottom'>
                    <FormControl>
                      <Select
                        disabled={registrationClosed}
                        defaultValue='ANY'
                        id='country-select'
                      >
                        {countries.map(x =>
                          x.code === 'US' ? (
                            <MenuItem key={x.code} value={x.code}>
                              {x.name}
                            </MenuItem>
                          ) : (
                            <MenuItem key={x.code} value={x.code} selected>
                              {x.name}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className='flex justify-between py-1'>
                  <div className='px-4 w-1/2'>
                    <Controller
                      name='state'
                      render={({ field }) => (
                        <TextField
                          label='State/Province'
                          fullWidth
                          disabled={registrationClosed}
                          {...field}
                        />
                      )}
                      control={control}
                    />
                  </div>
                  <div className='px-4 w-1/2'>
                    <Controller
                      render={({ field }) => (
                        <TextField
                          label='Zip'
                          fullWidth
                          disabled={registrationClosed}
                          {...field}
                        />
                      )}
                      control={control}
                      name='zip'
                    />
                  </div>
                </div>
                {!registrationClosed && (
                  <div className='p-4 m-4 rounded shadow bg-gray-700 bg-opacity-25'>
                    <CardElement
                      options={{
                        iconStyle: 'solid',
                        style: {
                          base: {
                            color: '#fff',
                            fontSize: '16px',
                            iconColor: '#fff',
                            '::placeholder': {
                              color: '#87bbfd',
                            },
                          },
                          invalid: {
                            iconColor: '#FFC7EE',
                            color: '#FFC7EE',
                          },
                          complete: {
                            iconColor: '#cbf4c9',
                          },
                        },
                      }}
                      onChange={handleCardDetailsChange}
                    />
                  </div>
                )}

                <div className='px-4'>
                  <Button
                    variant='outlined'
                    type='submit'
                    disabled={isProcessing || !stripe || registrationClosed}
                    fullWidth
                  >
                    {isProcessing ? 'Processing...' : `Subscribe`}
                  </Button>
                  <p>{checkoutError}</p>
                </div>
              </form>
            </div>
            <div className=' bg-indigo-600 bg-opacity-25 w-1/3 rounded-r flex flex-col justify-between'>
              <h1 className='capitalize text-2xl py-2 bg-gray-900 bg-opacity-25 text-center p-4'>
                <span className='text-blue-400 font-bold'>Pro</span>Membership
              </h1>
              <ul className='p-4 text-lg'>
                <li className='p-2'>500 Frames</li>
                <li className='p-2'>4 Submissions per day</li>
                <li className='p-2'>10 concurrenct projects</li>
                <li className='p-2'>Professional Feedback</li>
              </ul>
              <div className='text-center p-16 text-lg'>
                <span className='font-bold'>$55</span> / Per Month
              </div>
            </div>
          </div>
        </div>
      </div>
    </WithPermission>
  )
}

export default PremiumSignup
