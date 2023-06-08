import CredentialsProvider from 'next-auth/providers/credentials'
import { signIn } from '../../../services/auth'
import NextAuth, { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	secret: process.env.AUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: 'Sign in with Email',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				/**
				 * This function is used to define if the user is authenticated or not.
				 * If authenticated, the function should return an object contains the user data.
				 * If not, the function should return `null`.
				 */
				if (credentials == null) return null
				/**
				 * credentials is defined in the config above.
				 * We can expect it contains two properties: `email` and `password`
				 */
				try {
					const { user, jwt } = await signIn({
						email: credentials.email,
						password: credentials.password,
					})
					console.log('user no login', user)
					console.log('jwt no login', jwt)
					return { ...user, jwt }
				} catch (error) {
					// Sign In Fail
					return null
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
