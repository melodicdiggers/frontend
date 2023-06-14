import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Article, IArticle, MultiGenericBlock } from '../../../../types'
import { getArticleBySlug } from '../../../../utils/url'
import Image from 'next/image'

interface PageProps {
	params: {
		slug: string
		id: string[]
	}
}

async function getArticlesByIdData(slug: string): Promise<Article | null> {
	try {
		const result = await getArticleBySlug(slug)
		if (result) return new Article(new MultiGenericBlock<IArticle>(result, 'articles'))
		return null
	} catch (err) {
		return null
	}
}

export default async function IdPage({ params }: PageProps) {
	const slug = params.id[params.id.length - 1]
	const article = await getArticlesByIdData(slug)

	return (
		<div className='mt-10 flex flex-col flex-wrap gap-20'>
			<div className='flex items-center justify-center'>{article?.date}</div>
			<div className='flex items-center justify-center'>
				{article?.media?.data?.attributes && (
					<Image
						src={process.env.MEDIA_HOST + article?.media?.data?.attributes?.url}
						alt={''}
						width={900}
						height={400}
						quality={100}
						style={{
							objectFit: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							objectPosition: 'center 70%',
						}}
					/>
				)}
			</div>
			<ReactMarkdown>{article?.content}</ReactMarkdown>
		</div>
	)
}
