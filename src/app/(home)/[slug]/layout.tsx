interface Props {
	children: JSX.Element
}
export default async function SlugLayout({ children }: Props) {
	return <div className='px-44 sm:px-12'>{children}</div>
}
