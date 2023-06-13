'use client'
import React from 'react'

import dynamic from 'next/dynamic'

interface PlayerProps {
	url: string
	slug: string
}

//WORK AROUND FOR NOW
const SoundCloudPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function Player({ url, slug }: PlayerProps) {
	return (
		<div>
			{
				<SoundCloudPlayer
					url={url}
					controls={true}
					width={slug === 'a-minute-with' ? 1200 : 390}
					height={slug === 'a-minute-with' ? 600 : 400}
				/>
			}
		</div>
	)
}
