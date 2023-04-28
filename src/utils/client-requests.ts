'use client'
import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'
import { Variables } from 'graphql-request'

export const clientFetchRequest = async <Q, V>(query: DocumentNode, variables?: V) => {
	try {
		let response = null
		response = await graphqlClient.request<Q>(query, variables as Variables)
		return response
	} catch (error) {
		return null
	}
}
