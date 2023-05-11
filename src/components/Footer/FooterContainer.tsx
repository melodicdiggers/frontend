import React from 'react'

interface Props {
	headerData: string
}

export default function FooterContainer(headerData: Props) {
	console.log(headerData)
	return <div>FooterContainer</div>
}
