import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import makeClient from './makeClient'

const { createContext, useState, useEffect, useRef } = React

export const TokenContext = createContext(null)

const TOKEN_STORE = 'token'

const onAuthError = () => {
  return null
}

const Phases = {
  INIT: Symbol.for('INIT'),
  AUTH: Symbol.for('AUTH'),
  NOAUTH: Symbol.for('NOAUTH'),

  init: () => ({
    phase: Phases.INIT,
    client: makeClient({ token: null, onAuthError }),
    token: undefined,
  }),
  auth: ({ token, onAuthError }) => ({
    token,
    phase: Phases.AUTH,
    client: makeClient({ token, onAuthError }),
  }),
  noauth: () => {
    return {
      token: undefined,
      phase: Phases.NOAUTH,
      client: makeClient({ token: null, onAuthError: () => null }),
    }
  },
}

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const Authenticated = ({ children }) => {
  const newHandleAuthError = () => {
    const headers: HeadersInit = new Headers()
    headers.set('Content-Type', 'application/json')
    fetch(`${SERVERLESS}/refreshaccess`, {
      body: '',
      method: 'post',
      headers,
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        const { token } = data
        if (token) {
          handleToken(token)
          // setState(Phases.auth({ token, onAuthError: handleAuthError }))
        } else {
          localStorage.removeItem(TOKEN_STORE)
          setState(Phases.noauth())
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleAuthError = () => {
    newHandleAuthError()
    // setState(Phases.noauth())
  }

  const initialize = () => {
    try {
      const token = localStorage.getItem(TOKEN_STORE)
      if (token) {
        return Phases.auth({ token, onAuthError: handleAuthError })
      }
    } catch (e) {}
    return Phases.noauth()
  }

  const [state, setState] = useState(initialize())
  const prev = usePrevious(state)

  const handleToken = token => {
    localStorage.setItem(TOKEN_STORE, token)
    return setState(Phases.auth({ token, onAuthError: handleAuthError }))
  }

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_STORE)
    state.client.resetStore()
    setState(Phases.noauth())
  }

  useEffect(() => {
    if (prev) {
      if (prev.phase !== state.phase && state.phase === Phases.AUTH) {
        localStorage.setItem(TOKEN_STORE, state.token)
      }
    }
  }, [state])
  return (
    <TokenContext.Provider value={{ handleToken, handleLogout }}>
      {(() => {
        if (state.phase === Phases.INIT) return null
        return <ApolloProvider client={state.client}>{children}</ApolloProvider>
      })()}
    </TokenContext.Provider>
  )
}

export default Authenticated
