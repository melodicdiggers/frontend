import React from 'react'
import { Event } from '../../types'
import Image from 'next/image'

interface EventsProps {
	events: Event[]
}

export default function Events({ events }: EventsProps) {
	return (
		<div className='flex flex-wrap gap-12'>
			{events.map(event => {
				return (
					<div className='flex flex-col' key={`article-${event.title}`}>
						{event?.media?.data && (
							<Image
								src={process.env.MEDIA_HOST + event.media.data[0].attributes.url}
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
							<div className='text-sm font-medium italic text-hover'>{event.eventDate}</div>
							<div className='text-xl'>{event.title}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
