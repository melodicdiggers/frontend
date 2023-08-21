interface Props {
	children: JSX.Element
}

export default async function AboutLayout({ children }: Props) {
	return <div className=' flex w-full flex-col items-center justify-center sm:px-12'>{children}</div>
}
