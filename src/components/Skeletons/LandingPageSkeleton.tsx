export default function LandingPageSkeleton() {
	/* 	const linePreview = () => {
		const rows: JSX.Element[] = []
		for (let i = 0; i < 3; i++) {
			rows.push(<div className='line-preview' key={`row-preview-${i}`} />)
		}
		return rows
	} */
	return (
		<div className='landing-skeleton'>
			<div className='card-preview'></div>
			<div className='block-preview'></div>
			<div className='block-preview'></div>
		</div>
	)
}
