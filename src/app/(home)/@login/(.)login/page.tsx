import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalContainer from '../../../../components/Modal/ModalContainer'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import LoginCard from '../../../../components/Authentication/LoginCard'

export default async function LoginModal() {
	return (
		<ModalContainer
			isOpen
			closeButton={<FontAwesomeIcon icon={faClose} size='xl' className='ml-auto mr-0 cursor-pointer text-black' />}>
			<LoginCard ismodal={true} />
		</ModalContainer>
	)
}
