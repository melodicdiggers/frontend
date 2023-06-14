import React from 'react'
import { Article } from '../../types'
import Image from 'next/image'
import Link from 'next/link'

interface ArticlesProps {
	articles: Article[]
	slug: string
}

export default function Articles({ articles }: ArticlesProps) {
	return (
		<div className='flex flex-wrap gap-12'>
			{articles.map(article => {
				return (
					<Link
						className='inline-block no-underline '
						key={`article-${article.slug}`}
						href={`${article.category}/${new Date(article.date).getFullYear()}/${article.slug}`}>
						{article?.media?.data?.attributes && (
							<Image
								src={process.env.MEDIA_HOST + article.media.data.attributes.url}
								alt={''}
								width={320}
								height={320}
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
							<div className='text-sm font-medium italic text-hover'>{article.date}</div>
							<div className='text-xl text-black'>{article.title}</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}
