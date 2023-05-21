import Image from 'next/image'
import { Article, GenericBlock, Header, IArticle, IHeader, MultiGenericBlock } from '../../../types'
import { getCoffeeBreaks, getHeader } from '../../../utils/url'

interface PageProps {
	params: {
		slug: string
	}
}

async function getCoffeeBreaksData(): Promise<Article | null> {
	try {
		const result = await getCoffeeBreaks()
		if (result) return new Article(new MultiGenericBlock<IArticle>(result, 'articles'))
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
	const coffeeBreaks = await getCoffeeBreaksData()

	const formattedDate = coffeeBreaks?.createdAt
		? new Date(coffeeBreaks.createdAt).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
		  })
		: ''

	return (
		<div className='flex flex-wrap gap-20 px-64'>
			{coffeeBreaks?.category == 'CoffeeBreak' ? (
				<div style={{ display: 'inline-block' }}>
					<Image
						src={process.env.MEDIA_HOST + coffeeBreaks.mediaArticle.data.attributes.url}
						alt={''}
						width={279}
						height={279}
						quality={100}
						style={{
							objectFit: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							objectPosition: 'center 70%',
						}}
					/>
					<div className='mt-6 flex flex-col gap-4' style={{ width: 279 }}>
						<div className='text-sm font-medium italic text-hover'>{formattedDate}</div>
						<div className='text-xl'>{coffeeBreaks.title}</div>
					</div>
				</div>
			) : (
				<div>Not a coffee break</div>
			)}
		</div>
	)
}
