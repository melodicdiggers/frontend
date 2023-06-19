'use client'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Event } from '../../types'
import Image from 'next/image'

interface TicketCardProps {
	ticket: [
		{
			name: string
			value: string
		}
	]
	venue: string
}

interface Ticket {
	name: string
	value: string
}

export default function TicketWrapper({ ticket, venue }: TicketCardProps) {
	let event: Event | null = null
	if (venue) event = JSON.parse(venue)
	else event = null
	const [isOpened, setIsOpened] = React.useState(false)
	const [selectedTicket, setSelectedTicket] = React.useState<Ticket | null>(null)

	const openModal = (selectedTicket: Ticket) => {
		setSelectedTicket(selectedTicket)
		setIsOpened(true)
	}

	const closeModal = () => {
		setIsOpened(false)
	}

	const handleTicketClick = (ticket: Ticket) => {
		openModal(ticket)
	}

	return (
		<div className='relative'>
			<div className='flex flex-col gap-6'>
				{ticket.map(ticket => {
					return (
						<div
							className='flex cursor-pointer items-center gap-6 rounded-md bg-white p-8'
							key={ticket.name}
							onClick={() => handleTicketClick(ticket)}>
							<div className='text-xl'>{ticket.name} :</div>
							<div className='text-lg'>{ticket.value}</div>
						</div>
					)
				})}
			</div>
			{isOpened && selectedTicket && event && (
				<div
					className={`} fixed bottom-0 right-0 top-0 z-10 ml-auto mr-0 flex h-full w-full flex-col rounded-l-md p-8 opacity-95 transition-opacity
					duration-500`}
					style={{ backdropFilter: 'blur(6px)', overflow: 'auto' }}>
					<div className='flex h-full w-full flex-col items-center justify-center'>
						<div
							className='flex w-2/4 flex-col items-center justify-center gap-6 rounded-md bg-white'
							style={{ border: '1px solid rgba(216,216,216), 0.4', boxShadow: '0 4px 12px #0000001a' }}>
							<div className='flex w-full flex-col gap-4 p-8' style={{ boxShadow: '0 4px 12px #0000001a' }}>
								<div className='relative'>
									<div className='flex items-center justify-center font-cabin text-2xl font-bold'>{event.title}</div>
									<div className='absolute right-0 top-0'>
										<FontAwesomeIcon
											icon={faClose}
											size='xl'
											className='ml-auto mr-0 cursor-pointer text-black'
											onClick={closeModal}
										/>
									</div>
								</div>
								<div className='flex justify-center gap-20'>
									<div className='flex items-center justify-center text-base text-hover'>{event.eventDate}</div>
									<div className='flex items-center justify-center text-base  text-hover'>{event.location}</div>
								</div>
							</div>
							<div className='grid w-full grid-cols-2 flex-col items-center justify-center gap-6 rounded-md bg-white p-6'>
								<div className='flex w-full flex-col items-center justify-center'>
									<div className='flex items-center justify-center'>summary:</div>
									<div>{selectedTicket.name}</div>
									<div className='flex items-center justify-center'>{selectedTicket.value}</div>
									<div className='flex items-center justify-center'>amount component</div>
									<div className='flex items-center justify-center'>lineup</div>
								</div>
								<div className='flex w-full flex-col'>
									<Image
										height={250}
										width={250}
										src={process.env.MEDIA_HOST + event.media.data[0].attributes.url}
										alt='background-image'
										quality={100}
										className='ml-auto mr-0 flex'
									/>
									<div className='ml-auto mr-0 flex'>
										<div>Total:</div>
										<div>{selectedTicket.value}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
