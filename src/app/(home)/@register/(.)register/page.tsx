import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalContainer from '../../../../components/Modal/ModalContainer'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import RegisterCard from '../../../../components/Authentication/RegisterCard'

export default async function RegisterModal() {
	return (
		<ModalContainer
			isOpen
			closeButton={<FontAwesomeIcon icon={faClose} size='xl' className='ml-auto mr-0 cursor-pointer text-black' />}>
			<RegisterCard ismodal={true} />
		</ModalContainer>
	)
}
