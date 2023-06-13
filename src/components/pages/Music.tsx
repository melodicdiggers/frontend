import React from 'react'
import { Music } from '../../types'
import Player from '../Player/Player'
import Link from 'next/link'

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
					return <Player key={`music-block-${block.url}`} url={block.url} slug={slug} />
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
