interface PageProps {
	params: {
		slug: string
	}
}
export default async function IdPage({ params }: PageProps) {
	console.log(params)
	return (
		<div className='flex flex-wrap gap-20 px-64'>
			<div>Not a coffee break</div>
		</div>
	)
}
