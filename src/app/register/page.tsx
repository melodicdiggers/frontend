'use client'
import { useState } from 'react'
import { createUser } from '../../services/auth'
import { useRouter } from 'next/navigation'

export default function Register() {
	const router = useRouter()
	const [formData, setFormData] = useState({
		user: '' as string,
		email: '' as string,
		password: '' as string,
	})

	const handleInputChange = e => {
		setFormData(prevData => ({
			...prevData,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const result = await createUser({
			username: formData.user,
			email: formData.email,
			password: formData.password,
		})
		if (result?.ok) {
			router.replace('/login')
		} else {
			alert('Failed to create user')
		}
	}

	return (
		<div className='bg-gray-50 dark:bg-gray-900'>
			<div className='mx-auto flex h-screen w-screen max-w-xl flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
				<div className='bg-gray-50 dark:bg-gray-900'>
					<div className='mx-auto flex h-screen w-screen max-w-xl flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
						<div className='bg-white dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg shadow dark:border sm:max-w-md md:mt-0 xl:p-0'>
							<div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
								<h1 className='text-gray-900 dark:text-white font-josefin text-xl font-bold leading-tight tracking-tight md:text-2xl'>
									Register an account
								</h1>
								<form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
									<div>
										<label htmlFor='name' className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'>
											Your name
										</label>
										<input
											type='text'
											name='user' // Change the name attribute to 'user'
											id='name'
											className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 sm:text-sm'
											placeholder='John Doe'
											value={formData.user}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div>
										<label htmlFor='email' className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'>
											Your email
										</label>
										<input
											type='email'
											name='email'
											id='email'
											className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 sm:text-sm'
											placeholder='name@company.com'
											value={formData.email}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div>
										<label htmlFor='password' className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'>
											Password
										</label>
										<input
											type='password'
											name='password'
											id='password'
											placeholder='••••••••'
											className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 sm:text-sm'
											value={formData.password}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='flex items-center justify-center'>
										<button
											type='submit'
											className='text-white w-56 cursor-pointer rounded-lg border-none px-5 py-2.5 text-center text-sm font-medium'>
											Register
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
