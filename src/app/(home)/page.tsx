import React from 'react'
import Image from 'next/image'
import DefaultImage from '../../assets/images/DefaultImage.jpg'

export default async function Homepage() {
	return (
		<>
			<Image alt='landing-image' src={DefaultImage} className=' h-[32rem] w-full object-cover' quality={100} />
			<div>Landing Page</div>
		</>
	)
}
