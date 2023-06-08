/* eslint-disable no-unused-vars */
import 'next-auth'

declare module 'next-auth' {
	interface Session {
		id: string
		accessToken: string
	}

	interface User {
		username: string
		jwt: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string
		accessToken: string
	}
}
