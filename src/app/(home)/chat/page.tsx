'use client'
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
			<div className='flex w-full flex-col gap-6'>
				{messages.map((msg, index) => (
					<div
						key={index}
						style={{
							alignSelf: msg.userId === session.data?.user?.email ? 'flex-end' : 'flex-start',
							backgroundColor: msg.userId === session.data?.user?.email ? '#cce0ff' : '#f0f0f0',
							padding: '8px',
							borderRadius: '8px',
							maxWidth: '60%',
						}}>
						<div>{msg.name}</div>
						<div>{msg.message}</div>
					</div>
				))}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
				<input
					value={value}
					onChange={handleChange}
					className='mt-auto h-12 w-full rounded px-2'
					placeholder='Enter some text and see the syncing of text in another tab'
				/>
				<button onClick={handleSendMessage}>send</button>
			</div>
		</div>
	)
}
