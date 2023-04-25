'use client'
import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'

export const clientFetchRequest = async <Q, V>(query: DocumentNode, variables?: V, pathname?: string) => {
	try {
		let response = null
		response = await graphqlClient.request<Q>(query, variables)
		return response
	} catch (error) {
		return null
	}
}
