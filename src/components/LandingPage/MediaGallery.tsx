'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Photo {
	id: string
	media_type: string
	media_url: string
}

export default function MediaGallery() {
	const [images, setImages] = useState<Photo[]>([])

	useEffect(() => {
		// Fetch the first 10 images from the Instagram account
		const fetchImages = async () => {
			const response = await fetch(
				`https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=10&access_token=${'IGQVJYS2FhdEJuQktVNVctVUlVaG16dUdxcnR4WVFRbXNGd2FDOGxBeEtEaHVFOFZAuNzcyenB3WktPRFEyRWZArLWFIS2pEZA09hRnJ0WVdLMnB0YWhSaGpNQWM3Unp0cU44YUlXWXJsRUVOTEpUQ1p5MgZDZD'}`,
				{ cache: 'force-cache' }
			)
			const data = await response.json()
			setImages(data.data)
		}

		fetchImages()
	}, [])

	return (
		<div className='flex flex-col'>
			<div className='grid grid-cols-5 gap-4 px-44'>
				{images.map(image => (
					<div key={image.id}>
						<Image src={image.media_url} alt='' width={250} height={250} />
					</div>
				))}
			</div>
		</div>
	)
}
