import Link from 'next/link'
import React from 'react'

interface FollowButtonProps {
	url: string
	text: string
}

export default function FollowButton({ url, text }: FollowButtonProps) {
	return (
		<div className='w-60 items-center justify-center rounded-sm border-black p-4' style={{ border: '2px solid black' }}>
			<Link
				href={url}
				className='flex items-center justify-center font-cabin text-xs font-bold tracking-widest text-secondBlack no-underline'>
				{text.toUpperCase()}
			</Link>
		</div>
	)
}
