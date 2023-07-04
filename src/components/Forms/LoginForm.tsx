import Link from 'next/link'
import React, { FormEventHandler } from 'react'
import LoginInputLabel from '../Inputs/LoginInputLabel'

interface LoginFormProps {
	onSubmit: FormEventHandler<HTMLFormElement>
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
	return (
		<form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
			<LoginInputLabel title={'Email'} type={'email'} />
			<LoginInputLabel title={'Password'} type={'password'} />
			<div className='flex items-center justify-center'>
				<button
					type='submit'
					className='w-56 cursor-pointer rounded-lg  border-none  bg-black px-5 py-2.5 text-center font-cabin text-sm font-medium text-white'>
					Sign in
				</button>
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
