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
			<div className='flex flex-wrap gap-4 px-44'>
				{images.map(image => (
					<div key={image.id}>
						<Link href={image.media_url}>
							<Image
								src={image.media_url}
								alt=''
								width={250}
								height={250}
								style={{ objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
