import { CloseButton } from './CloseButton'

interface ModalProps {
	children: React.ReactNode
	isOpen: boolean
	isLoading?: boolean
	closeButton?: JSX.Element
}

const ModalContainer = ({ isOpen = false, closeButton, ...props }: ModalProps) => {
	return isOpen ? (
		<div
			className={`fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 ${
				props.isLoading ? 'loading' : ''
			}`}>
			{closeButton && <CloseButton className='absolute right-4 top-4 z-10 cursor-pointer'>{closeButton}</CloseButton>}
			<div className='w-full rounded-md ' style={{ backdropFilter: 'blur(6px)' }}>
				{props.children}
			</div>
		</div>
	) : null
}

export default ModalContainer
