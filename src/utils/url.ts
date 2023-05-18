import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'
import {
	AboutPageDocument,
	CoffeeBreakDocument,
	ContactPageDocument,
	FooterDocument,
	HeaderDocument,
	Sdk,
} from '../generated/sdk'
import { Variables } from 'graphql-request'

export type QueryName = keyof Sdk

export const fetchGraphQLData = async <Q, V>(query: DocumentNode, variables?: V) => {
	try {
		let response = null
		response = await graphqlClient.request<Q>(query, variables as Variables)
		return response
	} catch (error) {
		return null
	}
}

export const getHeader = async () => {
	return await fetchGraphQLData(HeaderDocument)
}

export const getFooterBlock = async () => {
	return await fetchGraphQLData(FooterDocument)
}

export const getAboutPage = async () => {
	return await fetchGraphQLData(AboutPageDocument)
}

export const getContactPage = async () => {
	return await fetchGraphQLData(ContactPageDocument)
}

export const getCoffeeBreaks = async () => {
	return await fetchGraphQLData(CoffeeBreakDocument)
}
