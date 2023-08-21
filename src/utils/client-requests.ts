'use client'
import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'
import { Variables } from 'graphql-request'

export const clientFetchRequest = async <Q, V>(query: DocumentNode, variables?: V): Promise<Q | null> => {
	try {
		const response = await graphqlClient.request<Q>(query, variables as Variables)
		return response
	} catch (error) {
		return null
	}
}
