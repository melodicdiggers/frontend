import { Footer, GenericBlock, IFooter } from '../../../types'

async function getAboutData(): Promise<Footer | null> {
	try {
		const result = await getAboutData()
		if (result) return new Footer(new GenericBlock<IFooter>(result, 'about'))
		return null
	} catch (err) {
		return null
	}
}

export default async function AboutPage() {
	return (
		<div className='flex flex-col'>
			<div>About Page</div>
		</div>
	)
}
