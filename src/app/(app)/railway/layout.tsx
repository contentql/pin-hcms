'use client'

import { ApolloProvider } from '@apollo/client'

import createApolloClient from '@/railway/utils/apollo-client'

type Props = {
  children: React.ReactNode
}

const RailwayLayout = ({ children }: Props) => (
  <ApolloProvider client={createApolloClient}>{children}</ApolloProvider>
)

export default RailwayLayout
