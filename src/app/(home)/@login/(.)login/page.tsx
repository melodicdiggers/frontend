'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalContainer from '../../../../components/Modal/ModalContainer'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import LoginCard from '../../../../components/Authentication/LoginCard'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default async function LoginModal() {
	const [isOpen, setIsOpen] = useState(true)
	const router = useRouter()
	return (
		<ModalContainer isOpen={isOpen}>
			<div className='absolute left-auto right-6 top-6' onClick={() => router.back()}>
				<FontAwesomeIcon icon={faClose} size='xl' className='ml-auto mr-0 cursor-pointer text-black' />
			</div>
			<LoginCard ismodal={true} setIsOpen={setIsOpen} />
		</ModalContainer>
	)
}
