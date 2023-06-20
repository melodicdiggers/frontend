'use client'
import React from 'react'

export default function CheckoutPage() {
	const ticket = localStorage.getItem('ticket')
	const ammount = localStorage.getItem('ammount')
	return (
		<div>
			checkout page
			<div>{ticket}</div>
			<div>{ammount}</div>
		</div>
	)
}
