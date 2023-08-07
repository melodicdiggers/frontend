import { Server, Socket } from 'socket.io'
import { NextApiRequest, NextApiResponse } from 'next'
import onSocketConnection from '../../helpers/onSocketConnection'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if ((res.socket as any).server.io) {
		console.log('Server already started!')
		res.end()
		return
	}

	const io = new Server((res.socket as any).server, {
		path: 'htttp://localhost:1337/socket/',
		addTrailingSlash: false,
	})
	;(res.socket as any).server.io = io

	const onConnection = (socket: Socket) => {
		console.log('New connection', socket.id)
		onSocketConnection(io, socket)
	}

	io.on('connection', onConnection)

	console.log('Socket server started successfully!')
	res.end()
}
