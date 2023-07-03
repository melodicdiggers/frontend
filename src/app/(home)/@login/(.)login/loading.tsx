import ModalContainer from '../../../../components/Modal/ModalContainer'

export default function Loading() {
	return (
		<ModalContainer isOpen={true}>
			<div className='flex w-full items-center justify-center'>Loading...</div>
		</ModalContainer>
	)
}
