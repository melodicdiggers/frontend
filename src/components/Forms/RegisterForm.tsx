import React from 'react'
import RegisterInputLabel from '../Inputs/RegisterInputLabel'

interface RegisterFormProps {
	formData: {
		user: string
		email: string
		password: string
	}
	handleInputChange: any
	handleSubmit: any
}

export default function RegisterForm({ formData, handleInputChange, handleSubmit }: RegisterFormProps) {
	return (
		<form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
			<RegisterInputLabel formData={formData} handleInputChange={handleInputChange} title={'Your Name'} type={'name'} />
			<RegisterInputLabel
				formData={formData}
				handleInputChange={handleInputChange}
				title={'Your Email'}
				type={'email'}
			/>
			<RegisterInputLabel
				formData={formData}
				handleInputChange={handleInputChange}
				title={'Your Password'}
				type={'password'}
			/>
			<div className='flex items-center justify-center'>
				<button
					type='submit'
					className='w-56 cursor-pointer rounded-lg border-none  bg-black px-5 py-2.5 text-center font-cabin text-sm font-medium text-white'>
					Register
				</button>
			</div>
		</form>
	)
}
