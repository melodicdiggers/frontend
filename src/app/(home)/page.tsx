import React from 'react'
import Image from 'next/image'
import DefaultImage from '../../assets/images/DefaultImage.jpg'

export default async function Homepage() {
	return (
		<>
			<Image
				alt='landing-image'
				src={DefaultImage}
				className='h-[32rem] w-screen object-cover sm:w-[40rem] lg:w-[90rem]'
				quality={100}
			/>
			<div>Landing Page</div>
		</>
	)
}
