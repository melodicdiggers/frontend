'use client'
import moment from 'moment'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useEffect, useState } from 'react'
import io from 'socket.io-client'

interface IMessage {
	userId: string
	timeStamp: string
	message: string
	name: string
}

let socket

export default function ChatPage() {
	const [messages, setMessages] = useState<IMessage[]>([])
	const [value, setValue] = useState('')
	const session = useSession()

	useEffect(() => {
		socketInitializer()
	}, [])

	const socketInitializer = async () => {
		socket = io('http://localhost:1337', {
			path: '/socket',
		})

		socket.on('connect', () => {
			console.log('Connected', socket.id)
		})

		socket.on('new-message', msg => {
			console.log('New message in client', msg)
			if (msg.userId !== session.data?.user?.email) {
				setMessages(prevMessages => [...prevMessages, msg])
			}
		})
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleSendMessage = () => {
		const trimmedValue = value.trim()
		if (trimmedValue !== '') {
			const newMsg = {
				userId: session.data?.user?.email,
				name: session.data?.user?.name,
				timeStamp: new Date().toISOString(),
				message: trimmedValue,
			} as IMessage
			socket.emit('sendMessage', newMsg)
			setValue('')
		}
	}

	return (
		<div className='flex flex-col items-center justify-start gap-8 p-24'>
			<div className='flex w-full flex-col gap-2'>
				{messages.map(msg => (
					<div
						style={{
							alignSelf: msg.userId === session.data?.user?.email ? 'flex-end' : 'flex-start',
							backgroundColor: msg.userId === session.data?.user?.email ? '#cce0ff' : '#f0f0f0',
						}}
						key={`message-${msg.timeStamp}`}
						className='flex flex-col gap-2 rounded p-2'>
						<div className='font-cabin text-xs'>{msg.name}</div>
						<div className='flex items-center gap-2'>
							<div className='font-cabin text-lg'>{msg.message}</div>
							<div className='-mb-4 ml-auto mr-0 font-cabin text-xs'>{moment(msg.timeStamp).format('HH:mm')}</div>
						</div>
					</div>
				))}
			</div>
			<div className='mb-0 mt-auto flex gap-4'>
				<input
					value={value}
					onChange={handleChange}
					className='w-full rounded px-2 font-cabin'
					placeholder='Enter some text...'
				/>
				<button
					className='cursor-pointer rounded-lg border-none bg-secondBlack p-4 font-cabin text-white'
					onClick={handleSendMessage}>
					Send
				</button>
			</div>
		</div>
	)
}
