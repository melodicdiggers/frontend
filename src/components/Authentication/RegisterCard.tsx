'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import RegisterForm from '../Forms/RegisterForm'

interface RegisterCardProps {
	ismodal: boolean
	setIsOpen?: Dispatch<SetStateAction<boolean>>
}

export default function RegisterCard({ ismodal, setIsOpen }: RegisterCardProps) {
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
			setIsOpen && setIsOpen(false)
		} else {
			alert('Failed to create user')
		}
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
							Register an account
						</h1>
						<RegisterForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
					</div>
				</div>
			</div>
		</div>
	)
}
