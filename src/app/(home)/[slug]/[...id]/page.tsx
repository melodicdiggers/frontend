import { Article as ArticleDTO, Event, IArticle, IEvent, MultiGenericBlock } from '../../../../types'
import { getArticleBySlug, getEventBySlug } from '../../../../utils/url'
import ArticlePage from '../../../../components/Pages/ArticlePage'
import EquanimityPage from '../../../../components/Pages/EquanimityPage'
import { Suspense } from 'react'
import EventPage from '../../../../components/Pages/EventPage'

interface PageProps {
	params: {
		slug: string
		id: string[]
	}
}

async function getArticlesByIdData(slug: string): Promise<ArticleDTO | null> {
	try {
		const result = await getArticleBySlug(slug)
		if (result) return new ArticleDTO(new MultiGenericBlock<IArticle>(result, 'articles'))
		return null
	} catch (err) {
		return null
	}
}

async function getEventsByIdData(slug: string): Promise<Event | null> {
	try {
		const result = await getEventBySlug(slug)
		if (result) return new Event(new MultiGenericBlock<IEvent>(result, 'events'))
		return null
	} catch (err) {
		return null
	}
}

export default async function IdPage({ params }: PageProps) {
	const slug = params.id[params.id.length - 1]
	const article = await getArticlesByIdData(slug)
	const event = await getEventsByIdData(slug)

	return (
		<>
			{['coffee_break', 'label_talks', 'news'].includes(params.slug) && article && (
				<Suspense fallback={<div>loading...</div>}>
					<ArticlePage article={article} />
				</Suspense>
			)}
			{params.slug === 'equanimity' && article && (
				<Suspense fallback={<div>loading...</div>}>
					<EquanimityPage article={article} />
				</Suspense>
			)}
			{params.slug === 'events' && event && (
				<Suspense fallback={<div>loading...</div>}>
					<EventPage event={JSON.stringify(event)} />
				</Suspense>
			)}
		</>
	)
}
