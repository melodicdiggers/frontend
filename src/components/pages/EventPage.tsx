import Image from 'next/image'
import React from 'react'
import { Event } from '../../types'
import TicketWrapper from '../Wrappers/TicketWrapper'

interface EvenetPageProps {
	event: string
}

//FOLLOW EXCEED CARDS
//https://xceed.me/pt/porto/event/neopop-festival-2023--113983

export default function EventPage({ event }: EvenetPageProps) {
	let venue: Event | null = null
	if (event) venue = JSON.parse(event)
	else venue = null
	return (
		<>
			{venue && (
				<div className='mt-10 flex flex-col flex-wrap gap-12'>
					<div className='flex items-center justify-center text-center font-baskervville text-4xl'>{venue?.title}</div>
					<div className='flex w-full items-center justify-center gap-44'>
						{venue.media?.data && (
							<Image
								src={process.env.MEDIA_HOST + venue.media.data[0].attributes.url}
								alt={''}
								width={500}
								height={500}
								quality={100}
								style={{
									objectFit: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									objectPosition: 'center 70%',
								}}
							/>
						)}
						<div className=' flex flex-col justify-center gap-6 p-12'>
							<div className='flex items-center gap-6'>
								<div className='text-2xl '>Location:</div>
								<div className='text-xl'>{venue.location}</div>
							</div>
							<div className='flex items-center gap-6'>
								<div className='text-2xl '>Venue Date:</div>
								<div className='text-xl'>{venue.eventDate}</div>
							</div>
							{venue.ticketPrices && <TicketWrapper ticket={venue.ticketPrices} venue={JSON.stringify(venue)} />}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
