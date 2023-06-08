import Image from 'next/image'
import React from 'react'
import MediaGallery from '../../components/LandingPage/MediaGallery'
import { getDynamicBlocks } from '../../utils/url'
import { DynamicBlock, GenericBlock, IDynamicBlock } from '../../types'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

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
	const session = await getServerSession(authOptions)

	console.log(session)
	return (
		<div className='flex flex-col gap-12 sm:gap-4'>
			{dynamicBlock?.landingPageBlock
				?.filter(block => block.key === 'landing_top')
				.map(block => (
					<div key={`top-bloc-${block.key}`} className='relative flex w-full'>
						<Image
							src={process.env.MEDIA_HOST + block.photograph.data.attributes.url}
							alt={''}
							width={2000}
							height={550}
							quality={100}
							style={{
								objectFit: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								objectPosition: 'center 70%',
							}}
						/>
						<Link className='absolute bottom-2/4 flex w-full justify-center' href={block.url}>
							<div className=' absolute left-1/2 top-1/2 flex h-32 w-96 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-center font-josefin text-4xl font-bold leading-loose tracking-widest text-background underline decoration-1 underline-offset-8 hover:text-opacity-70'>
								{block.title.toUpperCase()}
							</div>
						</Link>
					</div>
				))}
			{dynamicBlock?.landingPageBlock
				?.filter(block => block.key === 'landing_bottom')
				.map(block => (
					<div key={`top-bloc-${block.key}`} className='relative flex w-full'>
						<Image
							src={process.env.MEDIA_HOST + block.photograph.data.attributes.url}
							alt={''}
							width={2000}
							height={650}
							quality={100}
							style={{
								objectFit: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								objectPosition: 'center 70%',
							}}
						/>
						<Link className='absolute bottom-2/4 flex w-full justify-center' href={block.url}>
							<div className=' absolute left-1/2 top-1/2 flex h-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-center font-josefin text-4xl font-bold leading-loose tracking-widest text-background underline decoration-1 underline-offset-8 hover:text-opacity-70'>
								{block.title.toUpperCase()}
							</div>
						</Link>
					</div>
				))}
			<div className='flex items-center justify-center font-josefin text-3xl font-semibold'>FOLLOW US</div>
			{/* @ts-expect-error Server Component */}
			<MediaGallery />
		</div>
	)
}
