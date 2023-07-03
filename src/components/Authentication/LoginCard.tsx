'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginCard() {
	const router = useRouter()

	const onSubmit = async e => {
		e.preventDefault()
		const result = await signIn('credentials', {
			redirect: false,
			email: e.target.email.value,
			password: e.target.password.value,
			isLogin: 'true',
		})
		if (result?.ok) {
			router.replace('/')
			return
		}
		alert('Credential is not valid')
	}

	return (
		<div className='mx-auto flex h-screen w-screen max-w-xl flex-col items-center justify-center '>
			<div className='flex w-full flex-col rounded-md bg-background px-6 py-8 md:h-screen lg:py-0'>
				<a
					href='/'
					className='text-gray-900 mb-6 flex items-center justify-center font-josefin text-2xl font-bold leading-loose tracking-widest text-black no-underline hover:text-opacity-70'>
					Melodic Diggers
				</a>
				<div className='dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg dark:border sm:max-w-md md:mt-0 xl:p-0'>
					<div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
						<h1 className='text-gray-900 font-josefin text-xl font-bold leading-tight tracking-tight md:text-2xl'>
							Sign in to your account
						</h1>
						<form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
							<div>
								<label htmlFor='email' className='text-gray-900 font-mediu mb-2 block text-sm'>
									Your email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white sm:text-sm'
									placeholder='name@company.com'
									required
								/>
							</div>
							<div>
								<label htmlFor='password' className='text-gray-900 mb-2 block text-sm font-medium'>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='••••••••'
									className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 dark:text-white sm:text-sm'
									required
								/>
							</div>
							<div className='flex items-center justify-center'>
								<button
									type='submit'
									className='w-56 cursor-pointer rounded-lg border-none bg-black px-5 py-2.5 text-center text-sm font-medium text-white'>
									Sign in
								</button>
							</div>
							<p className='text-gray-500 dark:text-gray-400 text-sm font-light'>
								Don’t have an account yet?{' '}
								<Link href='/register' className='text-primary-600 dark:text-primary-500 font-medium hover:underline'>
									Sign up
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
