'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoginForm from '../Forms/LoginForm'
import { Dispatch, SetStateAction } from 'react'

interface LoginCardProps {
	ismodal: boolean
	setIsOpen?: Dispatch<SetStateAction<boolean>>
}

export default function LoginCard({ ismodal, setIsOpen }: LoginCardProps) {
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
			setIsOpen && setIsOpen(false)
			return
		}
		alert('Credential is not valid')
	}

	return (
		<div className={`mx-auto flex ${ismodal ? 'h-screen' : ''} w-screen max-w-xl flex-col items-center justify-center`}>
			<div className='flex w-full flex-col rounded-md bg-background px-6 py-8 md:h-screen lg:py-0'>
				{ismodal && (
					<a
						href='/'
						className='text-gray-900 mb-6 flex items-center justify-center font-josefin text-2xl font-bold leading-loose tracking-widest text-black no-underline hover:text-opacity-70'>
						Melodic Diggers
					</a>
				)}
				<div className='dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg dark:border sm:max-w-md md:mt-0 xl:p-0'>
					<div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
						<h1
							className={`text-gray-900 font-josefin text-xl font-bold leading-tight tracking-tight md:text-2xl ${
								ismodal ? '' : ' flex items-center justify-center'
							}`}>
							Sign in to your account
						</h1>
						<LoginForm onSubmit={onSubmit} />
					</div>
				</div>
			</div>
		</div>
	)
}
