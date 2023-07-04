import React from 'react'

type InputType = 'name' | 'email' | 'password'

interface InputLabelProps {
	formData: { user: string; email: string; password: string }
	handleInputChange: () => void
	title: string
	type: InputType
}

export default function RegisterInputLabel({ formData, handleInputChange, title, type }: InputLabelProps) {
	switch (type) {
		case 'name':
			return (
				<div>
					<label htmlFor='name' className='text-gray-900 mb-2 block  font-cabin text-sm font-medium'>
						{title}
					</label>
					<input
						type='text'
						name='user'
						id='name'
						className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600  focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 font-cabin sm:text-sm'
						placeholder='John'
						value={formData.user}
						onChange={handleInputChange}
						required
					/>
				</div>
			)
		case 'email':
			return (
				<div>
					<label htmlFor='email' className='text-gray-900 mb-2 block  font-cabin text-sm font-medium'>
						{title}
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600  focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 font-cabin sm:text-sm'
						placeholder='name@company.com'
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
				</div>
			)
		case 'password':
			return (
				<div>
					<label htmlFor='password' className='text-gray-900 mb-2  block font-cabin text-sm font-medium'>
						{title}
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600  focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 font-cabin sm:text-sm'
						value={formData.password}
						onChange={handleInputChange}
						required
					/>
				</div>
			)
		default:
			return (
				<div>
					<label htmlFor='default' className='text-gray-900 mb-2 block  font-cabin text-sm font-medium'>
						{title}
					</label>
					<input
						type='text'
						name='user'
						id='default'
						className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600  focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 font-cabin sm:text-sm'
						placeholder='Default Input'
						value={formData.user}
						onChange={handleInputChange}
						required
					/>
				</div>
			)
	}
}
