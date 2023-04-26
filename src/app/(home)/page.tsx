import React from 'react'
import Image from 'next/image'
import DefaultImage from '../../assets/images/DefaultImage.jpg'

export default async function Homepage() {
	return (
		<>
			<Image
				alt='landing-image'
				src={DefaultImage}
				className='mt-28 h-[32rem] w-full object-cover sm:mt-20'
				quality={100}
			/>
			<div>Landing Page</div>
		</>
	)
}
