import { Article, Event, GenericBlock, Header, IHeader, IMusic, MultiGenericBlock, Music } from '../../../types'
import { getArticles, getEvents, getHeader, getMusics } from '../../../utils/url'
import { Suspense } from 'react'
import Articles from '../../../components/Pages/Articles'
import Musics from '../../../components/Pages/Music'
import Events from '../../../components/Pages/Events'

export const revalidate = 86400

interface PageProps {
	params: {
		slug: string
	}
	searchParams: { [key: string]: string | string[] | undefined }
}

async function getArticleBySlug(slug: string): Promise<Article[] | null> {
	try {
		const result: any = await getArticles(decodeURIComponent(slug))
		if (result) return new MultiGenericBlock<Article>(result, 'articles').data
		return null
	} catch (err) {
		return null
	}
}

async function getMusicPageBySlug(slug: string): Promise<Music | null> {
	try {
		const result = await getMusics(decodeURIComponent(slug))
		if (result) return new Music(new MultiGenericBlock<IMusic>(result, 'musics'))
		return null
	} catch (err) {
		return null
	}
}

async function getEventsData(): Promise<Event[] | null> {
	try {
		const result = await getEvents()
		if (result) return new MultiGenericBlock<Event>(result, 'events').data
		return null
	} catch (err) {
		return null
	}
}

async function getHeaderData(): Promise<Header | null> {
	try {
		const result = await getHeader()
		if (result) return new Header(new GenericBlock<IHeader>(result, 'header'))
		return null
	} catch (err) {
		return null
	}
}

export async function generateStaticParams() {
	const header = await getHeaderData()
	const params = header?.headerBlock.map(block => {
		return block.options
	})
	const slugObjects = params?.flatMap(options => options).map(options => ({ slug: options.slug }))

	if (slugObjects === undefined) {
		return []
	}

	return slugObjects.map(slug => {
		return {
			slug: slug.slug,
		}
	})
}

export default async function SlugPage({ params }: PageProps) {
	const articleSlugs: string[] = ['coffee-break', 'label-talks', 'news', 'equanimity']
	const musicSlugs: string[] = ['new-music', 'dj-mix', 'free-dl', 'a-minute-with']
	const eventSlugs: string[] = ['events']

	let data

	if (articleSlugs.includes(params.slug)) {
		data = await getArticleBySlug(params.slug)
	} else if (musicSlugs.includes(params.slug)) {
		data = await getMusicPageBySlug(params.slug)
	} else if (eventSlugs.includes(params.slug)) {
		data = await getEventsData()
	}

	return (
		<div className='flex flex-wrap gap-20'>
			{data && articleSlugs.includes(params.slug) && (
				<Suspense fallback={<div>Loading...</div>}>
					<Articles articles={data} slug={params.slug} />
				</Suspense>
			)}
			{data && musicSlugs.includes(params.slug) && (
				<Suspense fallback={<div>Loading...</div>}>
					<Musics musics={data} slug={params.slug} />
				</Suspense>
			)}
			{data && eventSlugs.includes(params.slug) && (
				<Suspense fallback={<div>Loading...</div>}>
					<Events events={data} slug={params.slug} />
				</Suspense>
			)}
		</div>
	)
}
