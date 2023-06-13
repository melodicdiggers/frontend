import React from 'react'
import { Event } from '../../types'
import Image from 'next/image'

interface EventsProps {
	events: Event
}

export default function Events({ events }: EventsProps) {
	return (
		<div>
			{events?.media?.data && (
				<Image
					src={process.env.MEDIA_HOST + events.media.data[0].attributes.url}
					alt={''}
					width={279}
					height={279}
					quality={100}
					style={{
						objectFit: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						objectPosition: 'center 70%',
					}}
				/>
			)}
			<div className='mt-6 flex flex-col gap-4' style={{ width: 279 }}>
				<div className='text-sm font-medium italic text-hover'>{events.eventDate}</div>
				<div className='text-xl'>{events.title}</div>
			</div>
		</div>
	)
}
