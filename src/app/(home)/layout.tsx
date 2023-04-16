interface Props {
	children: JSX.Element
	params: {
		lang: string
	}
}

export default function HomeLayout({ children, params }: Props) {
	return (
		<div>
			<div>Header</div>
			{children}
			<div>Footer</div>
		</div>
	)
}
