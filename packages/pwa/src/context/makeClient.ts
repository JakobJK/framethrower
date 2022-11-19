import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'

const link = new BatchHttpLink({
  uri: GRAPHQL_ENDPOINT,
})

const errorLink = (onAuthError: () => void) =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.warn(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
      if (graphQLErrors.some(error => error.message === 'jwt expired')) {
        return onAuthError()
      }
    }
    if (networkError) {
      console.warn('[Network error]', networkError)
      if ([401, 403].includes(networkError?.statusCode)) return onAuthError()
    }
  })

const authLink = (token: string) =>
  setContext(async (_, { headers }) =>
    token
      ? {
          headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : { headers }
  )

const makeClient = ({
  token,
  onAuthError,
}: {
  token: string
  onAuthError: () => void
}) => {
  return new ApolloClient({
    link: ApolloLink.from([errorLink(onAuthError), authLink(token), link]),
    cache: new InMemoryCache(),
  })
}

export default makeClient
