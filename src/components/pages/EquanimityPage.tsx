import Image from 'next/image'
import React from 'react'
import { Article } from '../../types'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import FollowButton from '../Buttons/FollowButton'

interface EquanimityPageProps {
	article: Article
}

export default function EquanimityPage({ article }: EquanimityPageProps) {
	const date = new Date(article?.date as string)
	const options = { month: 'long', day: 'numeric', year: 'numeric' }
	const formattedDate = date.toLocaleDateString('en-US', options as any)
	return (
		<div className='mt-10 flex flex-col flex-wrap gap-12'>
			<div className='flex items-center justify-center font-bold italic text-hover'>{formattedDate}</div>
			<div className='flex items-center justify-center text-center font-baskervville text-4xl'>{article?.title}</div>
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
	)
}
