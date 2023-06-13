export { dynamicParams }
import Image from 'next/image'
import { Article, GenericBlock, Header, IArticle, IHeader, IMusic, MultiGenericBlock, Music } from '../../../types'
import { getArticles, getHeader, getMusics } from '../../../utils/url'

const dynamicParams = false

interface PageProps {
	params: {
		slug: string
	}
}

async function getArticleBySlug(slug: string): Promise<Article | null> {
	try {
		const result = await getArticles(decodeURIComponent(slug))
		if (result) return new Article(new MultiGenericBlock<IArticle>(result, 'articles'))
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

type articleSlugs = 'coffee-break' | 'label-talks' | 'news' | 'equanimity'

type musicSlugs = 'new-music' | 'dj-mix' | 'free-dl' | 'a-minute-with'

export default async function SlugPage({ params }: PageProps) {
	const articles = await getArticleBySlug(params.slug)
	const musics = await getMusicPageBySlug(params.slug)
	const articleSlugs: articleSlugs[] = ['coffee-break', 'label-talks', 'news', 'equanimity']
	const musicSlugs: musicSlugs[] = ['new-music', 'dj-mix', 'free-dl', 'a-minute-with']

	console.log(musics)

	return (
		<div className='flex flex-wrap gap-20'>
			{articles && articleSlugs.includes(params.slug as articleSlugs) && (
				<div style={{ display: 'inline-block' }}>
					{articles?.media?.data?.attributes && (
						<Image
							src={process.env.MEDIA_HOST + articles?.media?.data?.attributes?.url}
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
					)}
					<div className='mt-6 flex flex-col gap-4' style={{ width: 279 }}>
						<div className='text-sm font-medium italic text-hover'>{articles?.date}</div>
						<div className='text-xl'>{articles?.title}</div>
					</div>
				</div>
			)}
			{musics && musicSlugs.includes(params.slug as musicSlugs) && <div>{params.slug}</div>}
		</div>
	)
}
