import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Article, Event, IArticle, IEvent, MultiGenericBlock } from '../../../../types'
import { getArticleBySlug, getEventBySlug } from '../../../../utils/url'
import Image from 'next/image'
import FollowButton from '../../../../components/Buttons/FollowButton'

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
	const date = new Date(article?.date as string)
	const options = { month: 'long', day: 'numeric', year: 'numeric' }
	const formattedDate = date.toLocaleDateString('en-US', options as any)

	return (
		<>
			{['coffee_break', 'label_talks', 'news'].includes(params.slug) && (
				<div className='mt-10 flex flex-col flex-wrap gap-12'>
					<div className='flex items-center justify-center font-bold italic text-hover'>{formattedDate}</div>
					<div className='flex items-center justify-center text-center font-baskervville text-4xl'>
						{article?.title}
					</div>
					<div className='flex items-center justify-center'>
						{article?.media?.data?.attributes && (
							<Image
								src={process.env.MEDIA_HOST + article?.media?.data?.attributes?.url}
								alt={''}
								width={1200}
								height={600}
								quality={100}
								className='70% bg-center bg-no-repeat object-cover object-center'
							/>
						)}
					</div>
					<div className='flex grid-cols-1 flex-col gap-6 p-2 font-baskervville text-lg tracking-wider'>
						<ReactMarkdown>{article?.content}</ReactMarkdown>
					</div>
					<div className='mt-6 flex flex-col items-center justify-center gap-6'>
						{article?.followButtons?.map(button => {
							return <FollowButton key={`button-${button.url}`} url={button.url} text={button.title} />
						})}
					</div>
				</div>
			)}
			{params.slug === 'equanimity' && (
				<div className='mt-10 flex flex-col flex-wrap gap-12'>
					<div className='flex items-center justify-center font-bold italic text-hover'>{formattedDate}</div>
					<div className='flex items-center justify-center text-center font-baskervville text-4xl'>
						{article?.title}
					</div>
					<div className='flex gap-6'>
						{article?.media?.data?.attributes && (
							<div className='flex w-2/5 items-center'>
								<Image
									src={process.env.MEDIA_HOST + article?.media?.data?.attributes?.url}
									alt=''
									width={450}
									height={450}
									quality={100}
									className='h-auto w-full'
								/>
							</div>
						)}
						<div className='grid flex-1'>
							<div className='flex grid-cols-1 flex-col gap-6 p-2 font-baskervville text-lg tracking-wider'>
								<ReactMarkdown>{article?.content}</ReactMarkdown>
							</div>
						</div>
					</div>

					<div className='mt-6 flex flex-col items-center justify-center gap-6'>
						{article?.followButtons?.map(button => {
							return <FollowButton key={`button-${button.url}`} url={button.url} text={button.title} />
						})}
					</div>
				</div>
			)}
			{params.slug === 'events' && <div>events</div>}
		</>
	)
}
