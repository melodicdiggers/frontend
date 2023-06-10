import axios from 'axios'

const strapiUrl = process.env.API_HOST

export async function signIn({ email, password }) {
	const res = await axios.post(`${strapiUrl}api/auth/local`, {
		identifier: email,
		password,
	})
	return res.data
}

export async function createUser({ username, email, password }) {
	console.log('username', username)
	console.log('email', email)
	console.log('password', password)
	console.log('strapiUrl', process.env.API_HOST)
	const res = await axios.post(`${'http://localhost:1337/'}api/auth/local/register`, {
		username,
		email,
		password,
	})
	return res.data
}
