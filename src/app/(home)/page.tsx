import React from 'react'
import { getHeader } from '../../utils/url'

export default async function Homepage() {
	const [header] = await Promise.all([getHeader()])
	console.log(header.header)

	return <div>Content</div>
}
