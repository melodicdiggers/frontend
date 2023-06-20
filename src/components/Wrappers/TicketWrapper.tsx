'use client'
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Event } from '../../types'
import Image from 'next/image'
import Link from 'next/link'

interface TicketCardProps {
	tickets: Ticket[]
	venue: string
}

interface Ticket {
	name: string
	ammount: number
	available: boolean
	value: any
}

export default function TicketWrapper({ tickets, venue }: TicketCardProps) {
	let event: Event | null = null
	if (venue) event = JSON.parse(venue)
	else event = null
	const [isOpened, setIsOpened] = useState(false)
	const [count, setCount] = useState(1)
	const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

	const openModal = (selectedTicket: Ticket) => {
		setSelectedTicket(selectedTicket)
		setIsOpened(true)
		setCount(1)
	}

	const closeModal = () => {
		setIsOpened(false)
	}

	const handleTicketClick = (ticket: Ticket) => {
		openModal(ticket)
	}

	const adjustCount = (amount: number) => {
		setCount(currentCount => {
			return currentCount + amount
		})
	}

	const savePurchase = () => {
		localStorage.setItem('ticket', JSON.stringify(selectedTicket))
		localStorage.setItem('ammount', JSON.stringify(count))
	}

	return (
		<div className='relative'>
			<div className='flex flex-col gap-6'>
				{tickets.map(ticket => {
					return (
						<div
							className='flex cursor-pointer items-center gap-6 rounded-md bg-white p-8'
							key={ticket.name}
							onClick={() => handleTicketClick(ticket)}>
							<div className='text-xl'>{ticket.name} :</div>
							<div className='text-lg'>{ticket.value + '€'}</div>
						</div>
					)
				})}
			</div>
			{isOpened && selectedTicket && event && (
				<div
					className={`} fixed bottom-0 right-0 top-0 z-10 ml-auto mr-0 flex h-full w-full flex-col rounded-l-md p-8 `}
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
									<div className='flex items-center justify-center font-cabin text-base text-hover'>
										{event.eventDate}
									</div>
									<div className='flex items-center justify-center font-cabin text-base  text-hover'>
										{event.location}
									</div>
								</div>
							</div>
							<div className='grid w-full grid-cols-2 flex-col items-center justify-center gap-28 rounded-md bg-white p-6'>
								<div className='mb-auto mt-0 flex w-full flex-col gap-12'>
									<div className='font-cabin text-xl font-semibold'>{selectedTicket.name}</div>
									<div className='font-cabin'>{event.description}</div>
									<div className='flex font-cabin'>lineup test section</div>
									<div className='flex items-center gap-6'>
										<button
											onClick={() => adjustCount(-1)}
											className='h-8 w-8 cursor-pointer rounded-full border-0 p-2'>
											<FontAwesomeIcon icon={faMinus} size='xs' className='ml-auto mr-0  text-black' />
										</button>
										<span className='font-cabin text-xl'>{count}</span>
										<button
											onClick={() => adjustCount(+1)}
											className='h-8 w-8 cursor-pointer rounded-full border-0 p-2'>
											<FontAwesomeIcon icon={faPlus} size='xs' className='ml-auto mr-0 text-black' />
										</button>
									</div>
								</div>
								<div className='ml-auto mr-0 flex w-full flex-col gap-12'>
									<Image
										height={250}
										width={250}
										src={process.env.MEDIA_HOST + event.media.data[0].attributes.url}
										alt='background-image'
										quality={100}
									/>
									<div className='mr-6 flex flex-col justify-center gap-2'>
										<div className='font-cabin text-xl font-semibold'>Summary:</div>
										<div className='flex justify-between px-2'>
											<div className='font-cabin text-base'>{count + ' x ' + ' ' + selectedTicket.name}</div>
											<div className='flex font-cabin text-base'>{selectedTicket.value}</div>
										</div>
										<span style={{ border: '1px solid rgb(226, 228, 229)' }} />
										<div className='flex gap-4 px-2'>
											<div className='font-cabin'>Total:</div>
											<div className='font-cabin'>{parseInt(selectedTicket.value) * count + '$'}</div>
										</div>
										<span style={{ border: '1px solid rgb(226, 228, 229)' }} />
									</div>
								</div>
							</div>
							<div className='mb-0 mt-auto flex w-full items-center bg-background p-6'>
								<Link href={'/checkout'} className='ml-auto no-underline'>
									<button
										className='ml-auto flex cursor-pointer justify-end rounded-md border-0 bg-secondBlack p-2 font-cabin text-sm font-semibold text-white'
										onClick={savePurchase}>
										Continue
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
