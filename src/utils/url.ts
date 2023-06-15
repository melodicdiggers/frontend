import { DocumentNode } from 'graphql'
import { graphqlClient } from '../services/client'
import {
	AboutPageDocument,
	ArticlebySlugDocument,
	ArticlesDocument,
	ContactPageDocument,
	DynamicBlockDocument,
	EventBySlugDocument,
	EventsDocument,
	FooterDocument,
	HeaderDocument,
	MusicDocument,
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

export const getMusics = async (category: string) => {
	return await fetchGraphQLData(MusicDocument, { category })
}

export const getEvents = async () => {
	return await fetchGraphQLData(EventsDocument)
}

export const getArticleBySlug = async (slug: string) => {
	return await fetchGraphQLData(ArticlebySlugDocument, { slug })
}

export const getEventBySlug = async (slug: string) => {
	return await fetchGraphQLData(EventBySlugDocument, { slug })
}
