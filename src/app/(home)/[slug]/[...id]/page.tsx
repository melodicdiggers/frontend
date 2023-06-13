import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface PageProps {
	params: {
		slug: string
		id: string[]
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
	const slug = params.id[params.id.length - 1]
	console.log(slug)

	return <div className='mt-10 flex flex-col flex-wrap gap-20'>{slug}</div>
}
