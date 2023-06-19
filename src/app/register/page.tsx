'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

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
		const result = await signIn('credentials', {
			username: formData.user,
			redirect: false,
			email: formData.email,
			password: formData.password,
			isLogin: 'false',
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
				<a
					href='/'
					className='text-gray-900 mb-6 flex items-center font-josefin text-2xl font-bold leading-loose tracking-widest text-black no-underline hover:text-opacity-70 dark:text-white'>
					Melodic Diggers
				</a>
				<div className='dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0'>
					<div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
						<h1 className='text-gray-900 font-josefin text-xl font-bold leading-tight tracking-tight dark:text-white md:text-2xl'>
							Register an account
						</h1>
						<form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
							<div>
								<label htmlFor='name' className='text-gray-900 mb-2 block text-sm font-medium dark:text-white'>
									Your name
								</label>
								<input
									type='text'
									name='user'
									id='name'
									className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white sm:text-sm'
									placeholder='John Doe'
									value={formData.user}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label htmlFor='email' className='text-gray-900 mb-2 block text-sm font-medium dark:text-white'>
									Your email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white sm:text-sm'
									placeholder='name@company.com'
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label htmlFor='password' className='text-gray-900 mb-2 block text-sm font-medium dark:text-white'>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='••••••••'
									className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white sm:text-sm'
									value={formData.password}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className='flex items-center justify-center'>
								<button
									type='submit'
									className='w-56 cursor-pointer rounded-lg border-none px-5 py-2.5 text-center text-sm font-medium text-white'>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
