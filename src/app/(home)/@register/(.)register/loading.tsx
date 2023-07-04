import ModalContainer from '../../../../components/Modal/ModalContainer'
import LoginSkeleton from '../../../../components/Skeletons/LoginSkeleton'

export default function Loading() {
	return (
		<ModalContainer isOpen={true}>
			<div className='mx-auto flex h-screen w-screen max-w-xl flex-col items-center justify-center '>
				<div className='flex w-full flex-col rounded-md bg-background px-6 py-8 md:h-screen lg:py-0'>
					<LoginSkeleton />
				</div>
			</div>
		</ModalContainer>
	)
}
