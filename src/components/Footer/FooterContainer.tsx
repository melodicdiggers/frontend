import React from 'react'
import { Footer } from '../../types'
import Link from 'next/link'
import { FacebookSvg, InstagramSvg, SoundCloudSvg, SpotifySvg, YoutubeSvg } from '../Icons'

interface Props {
	headerData: string
}

const iconMap = {
	Instagram: <InstagramSvg width={20} heigth={20} color='#000' />,
	Facebook: <FacebookSvg width={19} heigth={19} color='#000' />,
	SoundCloud: <SoundCloudSvg width={22} heigth={22} color='#000' />,
	Youtube: <YoutubeSvg width={20} heigth={20} color='#000' />,
	Spotify: <SpotifySvg width={20} heigth={20} color='#000' />,
}

export default function FooterContainer(props: Props) {
	let footer: Footer | null = null
	if (props.headerData) footer = JSON.parse(props.headerData)
	else footer = null

	const { aboutBlock, contactBlock, socialBlock } = footer || {}

	return (
		<div className=' mt-12 flex flex-col gap-12'>
			<div className='flex items-center justify-center gap-8'>
				<Link href={'/about'} className=' font-josefin text-sm font-medium text-black no-underline hover:text-hover'>
					{aboutBlock?.title.toUpperCase()}
				</Link>
				<Link href={'/contact'} className=' font-josefin text-sm font-medium text-black no-underline hover:text-hover'>
					{contactBlock?.title.toUpperCase()}
				</Link>
			</div>
			<div className='flex items-center justify-center gap-2'>
				{socialBlock?.socialMediaOptions?.map(option => (
					<a href={option.url} key={`block-${option.title}`} className='text-black no-underline'>
						{iconMap[option.title]}
					</a>
				))}
			</div>
		</div>
	)
}
