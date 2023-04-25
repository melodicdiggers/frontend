import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'
import { HeaderDocument, LandingPhotoDocument, Sdk } from '../generated/sdk'

export type QueryName = keyof Sdk

export const fetchGraphQLData = async <Q, V>(query: DocumentNode, variables?: V) => {
	try {
		let response = null
		response = await graphqlClient.request<Q>(query, variables)
		return response
	} catch (error) {
		return null
	}
}

export const getHeader = async () => {
	return await fetchGraphQLData(HeaderDocument)
}
