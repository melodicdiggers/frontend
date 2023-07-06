import React from 'react'

interface SubmitButtonProps {
	title: string
}

export default function SubmitButton({ title }: SubmitButtonProps) {
	return (
		<button
			type='submit'
			className='w-56 cursor-pointer rounded-lg border-none  bg-black px-5 py-2.5 text-center font-cabin text-sm font-medium text-white'>
			{title}
		</button>
	)
}
