import Image from 'next/image'
import React from 'react'
import DefaultImage from '../../assets/images/DefaultImage.jpg'
import MediaGallery from '../../components/LandingPage/MediaGallery'
import { getDynamicBlocks } from '../../utils/url'
import { DynamicBlock, GenericBlock, IDynamicBlock } from '../../types'
import Link from 'next/link'

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
		<div className='flex flex-col gap-12 sm:gap-4'>
			{dynamicBlock?.landingPageBlock
				?.filter(block => block.url.key === 'landing-top')
				.map(block => (
					<div key={`top-bloc-${block.url.key}`} className='relative flex w-full'>
						<Image
							src={process.env.MEDIA_HOST + block.photograph.data.attributes.url}
							alt={''}
							width={2000}
							height={500}
							quality={100}
							style={{
								objectFit: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								objectPosition: 'center 70%',
							}}
						/>
						<Link className='absolute bottom-2/4 flex w-full justify-center' href={block.url.url}>
							<div className='flex w-96 flex-wrap items-center justify-center text-center font-josefin text-4xl font-bold leading-10 tracking-widest text-background hover:text-hover'>
								{block.title.toUpperCase()}
							</div>
						</Link>
					</div>
				))}

			<Image
				src={DefaultImage}
				alt={'landing-image'}
				width={2000}
				height={560}
				quality={100}
				priority
				style={{
					objectFit: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					objectPosition: 'center 70%',
				}}
			/>
			<div className='flex items-center justify-center font-josefin text-3xl font-semibold'>FOLLOW US</div>
			{/* @ts-expect-error Server Component */}
			<MediaGallery />
		</div>
	)
}
