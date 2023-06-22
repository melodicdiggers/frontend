import { Server, Socket } from 'socket.io'

const onSocketConnection = (io: Server, socket: Socket): void => {
	const createdMessage = (msg: any): void => {
		console.log('New message', msg)
		socket.broadcast.emit('newIncomingMessage', msg)
	}

	socket.on('createdMessage', createdMessage)
}

export default onSocketConnection
