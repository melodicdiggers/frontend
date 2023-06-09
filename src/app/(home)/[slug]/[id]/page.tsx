import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Article, IArticle, MultiGenericBlock } from '../../../../types'

interface PageProps {
	params: {
		slug: string
		id: string
	}
}

/* async function getArticlesByIdData(id: string): Promise<Article | null> {
	try {
		const result = await getArticleById(id)
		if (result) return new Article(new MultiGenericBlock<IArticle>(result, 'articles'))
		return null
	} catch (err) {
		return null
	}
} */
export default async function IdPage({ params }: PageProps) {
	//const article = await getArticlesByIdData(params.id)

	/* 	const formattedDate = article?.createdAt
		? new Date(article.createdAt).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
		  })
		: '' */

	return (
		<div className='mt-10 flex flex-col flex-wrap gap-20'>
			{/* 			<div className='flex flex-col items-center justify-center gap-8'>
				<div className='text-sm font-medium italic text-hover'>{formattedDate}</div>
				<div className='text-4xl'>{article?.title}</div>
			</div>
			{article?.content && <ReactMarkdown>{article.content}</ReactMarkdown>} */}
		</div>
	)
}
