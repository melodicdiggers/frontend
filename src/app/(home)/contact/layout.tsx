interface Props {
	children: JSX.Element
}

export default async function ContactLayout({ children }: Props) {
	return <div className='mt-32 flex w-full flex-col items-center justify-center'>{children}</div>
}
