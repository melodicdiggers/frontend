import React, { Suspense } from 'react'
import { Music } from '../../types'
import Player from '../Player/Player'
import Link from 'next/link'
import MusicBlockSkeleton from '../Skeletons/MusicBlockSkeleton'

interface MusicsProps {
	musics: Music
	slug: string
}

export default function Musics({ musics, slug }: MusicsProps) {
	return (
		<div className='mt-12 flex w-full flex-col items-center justify-center gap-10'>
			<div className='font-cabin text-4xl font-bold tracking-widest'>{musics.title}</div>
			<div className='flex flex-wrap gap-16'>
				{musics.mediaBlock.map(block => {
					return (
						<Suspense key={`music-block-${block.url}`} fallback={<MusicBlockSkeleton />}>
							<Player url={block.url} slug={slug} />
						</Suspense>
					)
				})}
			</div>
			<Link
				href={'https://soundcloud.com/melodicdiggers'}
				className='font-cabin text-xs tracking-widest text-black no-underline hover:text-hover'>
				{musics.description}
			</Link>
		</div>
	)
}
