'use client'
import React from 'react'
import dynamic from 'next/dynamic'

interface PlayerProps {
	url: string
	slug: string
}

const SoundCloudPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function Player({ url, slug }: PlayerProps) {
	return (
		<>
			{
				<SoundCloudPlayer
					url={url}
					controls={true}
					width={slug === 'a-minute-with' ? 1200 : 300}
					height={slug === 'a-minute-with' ? 600 : 380}
				/>
			}
		</>
	)
}
