import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'
import { HeaderDocument, Sdk } from '../generated/sdk'

export type QueryName = keyof Sdk

export const fetchGraphQLData = async <Q>(query: DocumentNode) => {
	try {
		let response = null
		response = await graphqlClient.request<Q>(query)
		return response
	} catch (error) {
		//setError(error)
		return null
	}
}

export const getHeader = async () => {
	return await fetchGraphQLData(HeaderDocument)
}
