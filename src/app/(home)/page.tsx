import Image from 'next/image'
import React from 'react'
import DefaultImage from '../../assets/images/DefaultImage.jpg'
import MediaGallery from '../../components/LandingPage/MediaGallery'
import { getDynamicBlocks } from '../../utils/url'
import { DynamicBlock, GenericBlock, IDynamicBlock } from '../../types'

async function getDynamicBlockData(): Promise<DynamicBlock | null> {
	try {
		const result = await getDynamicBlocks()
		if (result) return new DynamicBlock(new GenericBlock<IDynamicBlock>(result, 'dynamicBlock'))
		return null
	} catch (err) {
		return null
	}
}

export default async function Homepage() {
	const dynamicBlock = await getDynamicBlockData()
	console.log(dynamicBlock?.landingPageBlock)
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
