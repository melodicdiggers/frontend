import Header from '../../components/Header/Header'

interface Props {
	children: JSX.Element
	params: {
		lang: string
	}
}

export default function HomeLayout({ children, params }: Props) {
	return (
		<div className='flex flex-col'>
			{/* @ts-expect-error Server Component */}
			<Header />
			{children}
			<div>Footer</div>
		</div>
	)
}
