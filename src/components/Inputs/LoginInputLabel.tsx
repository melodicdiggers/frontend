import React from 'react'

type InputType = 'email' | 'password'

interface InputLabelProps {
	title: string
	type: InputType
}

export default function LoginInputLabel({ title, type }: InputLabelProps) {
	switch (type) {
		case 'email':
			return (
				<div>
					<label htmlFor='email' className='text-gray-900 mb-2 block font-cabin text-sm font-medium'>
						{title}
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 font-cabin sm:text-sm'
						placeholder='name@company.com'
						required
					/>
				</div>
			)
		case 'password':
			return (
				<div>
					<label htmlFor='password' className='text-gray-900 mb-2 block font-cabin  text-sm font-medium'>
						{title}
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 sm:text-sm'
						required
					/>
				</div>
			)
		default:
			return (
				<div>
					<label htmlFor='default' className='text-gray-900 mb-2 block text-sm font-medium'>
						{title}
					</label>
					<input
						type='text'
						name='user'
						id='default'
						className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 sm:text-sm'
						placeholder='Default Input'
						required
					/>
				</div>
			)
	}
}
