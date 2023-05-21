interface Props {
	children: JSX.Element
}
export default async function SlugLayout({ children }: Props) {
	return <div className='px-64'>{children}</div>
}
