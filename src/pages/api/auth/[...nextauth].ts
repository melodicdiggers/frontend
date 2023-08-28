import CredentialsProvider from 'next-auth/providers/credentials'
import { createUser, signIn } from '../../../services/auth'
import NextAuth, { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
	secret: process.env.AUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: 'Sign in with Email',
			credentials: {
				username: { label: 'Username', type: 'text' },
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
				isLogin: { label: 'IsLogin', type: 'boolean' },
			},
			async authorize(credentials) {
				if (credentials == null) return null
				if (credentials.isLogin === 'true') {
					try {
						const { user, jwt } = await signIn({
							email: credentials.email,
							password: credentials.password,
						})
						return { ...user, jwt }
					} catch (error) {
						// Sign In Fail
						return null
					}
				}
				if (credentials.isLogin === 'false') {
					try {
						const { user, jwt } = await createUser({
							username: credentials.username,
							email: credentials.email,
							password: credentials.password,
						})
						return { ...user, jwt }
					} catch (error) {
						// Sign In Fail
						return null
					}
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }) => {
			session.id = token.id
			session.accessToken = token.accessToken
			return Promise.resolve(session)
		},
		jwt: async ({ token, user }) => {
			const isSignIn = user ? true : false
			if (isSignIn) {
				token.id = user.id
				token.name = user.username
				token.email = user.email
				token.accessToken = user.jwt
			}
			return Promise.resolve(token)
		},
	},
}

export default NextAuth(authOptions)
