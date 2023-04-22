'use client'
import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'

export const clientFetchRequest = async <Q, V>(query: DocumentNode, variables?: V) => {
	try {
		let response = null
		response = await graphqlClient.request<Q>(query)
		return response
	} catch (error) {
		//setError(error)
		return null
	}
}
