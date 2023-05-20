import { Article, GenericBlock, Header, IArticle, IHeader } from '../../../types'
import { getCoffeeBreaks, getHeader } from '../../../utils/url'

interface PageProps {
	params: {
		slug: string
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

async function getCoffeeBreaksData(): Promise<Article | null> {
	try {
		const result = await getCoffeeBreaks()
		if (result) return new Article(new GenericBlock<IArticle>(result, 'articles'))
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

export default async function Page({ params }: PageProps) {
	//const breaks = await getCoffeeBreaksData()
	const result = await getHeader()
	return <div>{params.slug}</div>
}
