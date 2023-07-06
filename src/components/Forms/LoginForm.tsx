import Link from 'next/link'
import React, { FormEventHandler } from 'react'
import LoginInputLabel from '../Inputs/LoginInputLabel'
import SubmitButton from '../Buttons/SubmitButton'

interface LoginFormProps {
	onSubmit: FormEventHandler<HTMLFormElement>
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
	return (
		<form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
			<LoginInputLabel title={'Email'} type={'email'} />
			<LoginInputLabel title={'Password'} type={'password'} />
			<div className='flex items-center justify-center'>
				<SubmitButton title={'Sign in'} />
			</div>
			<p className='text-gray-500 dark:text-gray-400 font-cabin text-sm font-light'>
				Don´t have an account yet?{' '}
				<Link
					href='/register'
					className='text-primary-600 dark:text-primary-500 font-cabin font-medium hover:underline'>
					Sign up
				</Link>
			</p>
		</form>
	)
}
