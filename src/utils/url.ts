import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'
import {
	AboutPageDocument,
	ArticlesDocument,
	ContactPageDocument,
	DynamicBlockDocument,
	FooterDocument,
	HeaderDocument,
	Sdk,
} from '../generated/sdk'
import { Variables } from 'graphql-request'

export type QueryName = keyof Sdk

export const fetchGraphQLData = async <Q, V>(query: DocumentNode, variables?: V) => {
	try {
		let response = null
		response = (await graphqlClient.request<Q>(query, variables as Variables)) as any
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

export const getDynamicBlocks = async () => {
	return await fetchGraphQLData(DynamicBlockDocument)
}

export const getArticles = async (category: string) => {
	return await fetchGraphQLData(ArticlesDocument, { category })
}
