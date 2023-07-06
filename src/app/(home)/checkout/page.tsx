'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { clientFetchRequest } from '../../../utils/client-requests'
import { AddUserTicketDocument } from '../../../generated/sdk'

export default function CheckoutPage() {
	const session = useSession()
	const ticketData = localStorage.getItem('ticket') || ''
	const ammount = localStorage.getItem('ammount') || ''
	const { data } = session
	const ticket = JSON.parse(ticketData)

	const onSubmit = async () => {
		const body = {
			userID: data?.id,
			ticketID: [ticket?.id],
		}
		if (data?.user && ticket && ammount) {
			try {
				const data = await clientFetchRequest(AddUserTicketDocument, body)
				if (data) {
					console.log('updatedUser', data)
				}
			} catch (err) {
				console.log(err)
			}
		}
	}

	return (
		<>
			{data?.user && ticket && ammount && (
				<div
					className={`} fixed bottom-0 right-0 top-0 z-10 ml-auto mr-0 flex h-full w-full flex-col rounded-l-md p-8 `}
					style={{ backdropFilter: 'blur(6px)', overflow: 'auto' }}>
					<div className='flex h-full w-full flex-col items-center justify-center'>
						<div
							className='flex w-2/4 flex-col items-center justify-center gap-6 rounded-md bg-white'
							style={{ border: '1px solid rgba(216,216,216), 0.7', boxShadow: '0 4px 12px #0000001a' }}>
							<div className='flex w-full flex-col gap-4 p-8' style={{ boxShadow: '0 4px 12px #0000001a' }}>
								<div className='relative'>
									<div className='flex items-center justify-center font-cabin text-2xl font-bold'>{'Checkout'}</div>
								</div>
								<div className='flex justify-center gap-4'>
									<div className='flex items-center justify-center font-cabin text-base text-hover'>Welcome</div>
									<div className='flex items-center justify-center font-cabin text-base text-hover'>
										{data.user.name}
									</div>
									<div className='flex items-center justify-center font-cabin text-base  text-hover'>
										{data.user.email}
									</div>
								</div>
							</div>
							<div className='grid w-full grid-cols-2 flex-col items-center justify-center gap-28 rounded-md bg-white p-6'>
								<div className='mb-auto mt-0 flex w-full flex-col gap-4'>
									<div className='font-cabin text-xl font-semibold'>Ticket Type:</div>
									<div className='font-cabin'>{ticket.name}</div>
								</div>
								<div className='ml-auto mr-0 flex w-full flex-col gap-12'>
									<div className='mr-6 flex flex-col justify-center gap-2'>
										<div className='font-cabin text-xl font-semibold'>Summary:</div>
										<div className='flex justify-between px-2'>
											<div className='font-cabin text-base'>{ammount + ' x ' + ' ' + ticket.name}</div>
											<div className='flex font-cabin text-base'>{ticket.value + '€'}</div>
										</div>
										<span style={{ border: '1px solid rgb(226, 228, 229)' }} />
										<div className='flex gap-4 px-2'>
											<div className='font-cabin'>Total:</div>
											<div className='font-cabin'>{parseFloat(ticket.value) * parseInt(ammount) + '€'}</div>
										</div>
										<span style={{ border: '1px solid rgb(226, 228, 229)' }} />
									</div>
								</div>
							</div>
							<div className='mb-0 mt-auto flex w-full items-center bg-background p-6'>
								<Link href={'/'} className='ml-auto no-underline'>
									<button
										className='ml-auto flex cursor-pointer justify-end rounded-md border-0 bg-secondBlack p-2 font-cabin text-sm font-semibold text-white'
										onClick={onSubmit}>
										Continue / add tickets to user
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
