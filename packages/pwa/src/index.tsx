import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Routes from './Routes'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import regeneratorRuntime from 'regenerator-runtime'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './styles/muiTheme'
import Role from './context/Role'
import Authenticated from './context/Authenticated'
import './index.css'

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY)

ReactDOM.render(
  <Router>
    <Helmet>
      <title>Framethrower</title>
    </Helmet>
    <Authenticated>
      <Role>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Elements stripe={stripePromise}>
            <Routes />
          </Elements>
        </MuiThemeProvider>
      </Role>
    </Authenticated>
  </Router>,
  document.getElementById('root')
)
