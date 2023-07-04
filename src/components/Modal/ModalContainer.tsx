import { CloseButton } from './CloseButton'

interface ModalProps {
	children: React.ReactNode
	isOpen: boolean
	closeButton?: JSX.Element
}

const ModalContainer = ({ isOpen = false, closeButton, ...props }: ModalProps) => {
	return isOpen ? (
		<div className={`modal-wrapper fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 `}>
			{closeButton && <CloseButton className='absolute right-6 top-6 z-10 cursor-pointer'>{closeButton}</CloseButton>}
			<div className='w-full rounded-md ' style={{ backdropFilter: 'blur(6px)' }}>
				{props.children}
			</div>
		</div>
	) : null
}

export default ModalContainer
