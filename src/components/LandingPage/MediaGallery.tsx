import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Photo {
	id: string
	media_type: string
	media_url: string
}

async function getInstagramImages(): Promise<Photo[]> {
	try {
		const response = await fetch(
			`https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=10&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
			{ cache: 'force-cache' }
		)
		const data = await response.json()
		return data.data
	} catch (err) {
		return []
	}
}

export default async function MediaGallery() {
	const images = await getInstagramImages()

	return (
		<div className='flex flex-col'>
			<div className='flex flex-wrap items-center justify-center gap-4 px-24 sm:gap-2 sm:px-4 md:px-4 lg:px-6'>
				{images.map(image => (
					<div key={image.id}>
						<Link href={`https://www.instagram.com/melodicdiggers`}>
							<Image
								src={image.media_url}
								alt=''
								width={280}
								height={280}
								quality={100}
								className='sm:h-44 sm:w-44'
								style={{ objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
