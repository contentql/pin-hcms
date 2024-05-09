import { ApolloClient, InMemoryCache } from '@apollo/client'
import { env } from '@env'

const createApolloClient = new ApolloClient({
  uri: env.NEXT_PUBLIC_HASURA_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    Authorization: `Bearer ${env.NEXT_PUBLIC_RAILWAY_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
})

export default createApolloClient
