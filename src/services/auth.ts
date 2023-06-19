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
	const res = await axios.post(`${strapiUrl}api/auth/local/register`, {
		username,
		email,
		password,
	})
	return res.data
}
