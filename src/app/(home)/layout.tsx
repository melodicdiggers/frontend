import Header from '../../components/Header/Header'

interface Props {
	children: JSX.Element
}

export default function HomeLayout({ children }: Props) {
	return (
		<div className='flex flex-col'>
			{/* @ts-expect-error Server Component */}
			<Header />
			{children}
			<div>Footer</div>
		</div>
	)
}
