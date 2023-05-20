import Image from 'next/image'
import React from 'react'
import DefaultImage from '../../assets/images/DefaultImage.jpg'
import MediaGallery from '../../components/LandingPage/MediaGallery'

export default async function Homepage() {
	return (
		<div className='flex flex-col'>
			<Image
				src={DefaultImage}
				alt={'landing-image'}
				width={2000}
				height={560}
				quality={100}
				priority
				style={{ objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
			/>
			<div className='flex items-center justify-center font-josefin text-3xl font-semibold'>FOLLOW US</div>
			{/* @ts-expect-error Server Component */}
			<MediaGallery />
		</div>
	)
}
