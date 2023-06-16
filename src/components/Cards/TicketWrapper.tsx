'use client'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Event } from '../../types'

interface TicketCardProps {
	ticket: [
		{
			name: string
			value: string
		}
	]
	venue: Event
}

interface Ticket {
	name: string
	value: string
}

export default function TicketWrapper({ ticket }: TicketCardProps) {
	const [isOpened, setIsOpened] = React.useState(false)
	const [selectedTicket, setSelectedTicket] = React.useState<Ticket | null>(null)

	const openModal = selectedTicket => {
		setSelectedTicket(selectedTicket)
		setIsOpened(true)
	}

	const closeModal = () => {
		setIsOpened(false)
	}

	const handleTicketClick = ticket => {
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
			{isOpened && (
				<div className='bg-gray-500 fixed bottom-0 right-0 top-0 flex h-full w-full'>
					<div
						className={`ml-auto mr-0 h-full w-4/12 rounded-md bg-hover p-8 transition-opacity duration-500 ${
							isOpened ? 'opacity-100' : 'opacity-0'
						}`}>
						<div className='flex w-full'>
							<FontAwesomeIcon
								icon={faClose}
								size='xl'
								className='ml-auto mr-0 cursor-pointer text-black'
								onClick={closeModal}
							/>
						</div>
						<div className='w-full gap-20'>
							<div className='flex items-center justify-center text-2xl'>{selectedTicket?.name}</div>
							<div>summary:</div>
							<div>{selectedTicket?.value}</div>
							<div>ammount component</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
