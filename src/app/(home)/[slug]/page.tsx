export { dynamicParams }
import Image from 'next/image'
import { Article, GenericBlock, Header, IArticle, IHeader, MultiGenericBlock } from '../../../types'
import { getArticles, getHeader } from '../../../utils/url'

const dynamicParams = false

interface PageProps {
	params: {
		slug: string
	}
}

async function getArticleBySlug(slug: string): Promise<Article | null> {
	try {
		const result = await getArticles(decodeURIComponent(slug))
		console.log('result', result)
		if (result) return new Article(new MultiGenericBlock<IArticle>(result, 'article'))
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
	const coffeeBreaks = await getArticleBySlug(params.slug)
	console.log('coffeeBreaks', coffeeBreaks)

	return <div className='flex flex-wrap gap-20'>{params.slug}</div>
}
