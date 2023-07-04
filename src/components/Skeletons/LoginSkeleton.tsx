export default function LoginSkeleton() {
	const linePreview = () => {
		const rows: JSX.Element[] = []
		for (let i = 0; i < 9; i++) {
			rows.push(<div className='line-preview' key={`row-preview-${i}`} />)
		}
		return rows
	}
	return (
		<div className='login-skeleton'>
			<div className='title-preview'></div>
			<div style={{ marginTop: '40px' }}>{linePreview()}</div>
		</div>
	)
}
