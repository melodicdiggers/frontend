import { About, GenericBlock, IAbout } from '../../../types'
import { getAboutPage } from '../../../utils/url'

async function getAboutData(): Promise<About | null> {
	try {
		const result = await getAboutPage()
		if (result) return new About(new GenericBlock<IAbout>(result, 'about'))
		return null
	} catch (err) {
		return null
	}
}

export default async function AboutPage() {
	const about = await getAboutData()
	const { aboutBlock } = about || {}

	const paragraphs = aboutBlock?.description.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)

	return (
		<div className='flex max-w-2xl flex-col gap-8 font-josefin'>
			<div className='text-3xl font-bold'>{aboutBlock?.subTitle.toUpperCase()}</div>
			<div className='flex flex-col gap-2 font-baskervville leading-8'>{paragraphs}</div>
		</div>
	)
}
