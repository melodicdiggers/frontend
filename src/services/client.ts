import { GraphQLClient } from 'graphql-request'

export const endpoint = `${process.env.API_HOST}graphql`

export const graphqlClient = new GraphQLClient(endpoint)
