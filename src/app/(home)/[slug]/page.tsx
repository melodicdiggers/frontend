import { GenericBlock, Header, IHeader } from '../../../types'
import { getHeader } from '../../../utils/url'

interface PageProps {
	params: {
		slug: string
	}
}

async function getHeaderData(): Promise<Header | null> {
	try {
		const result = await getHeader()
		if (result) return new Header(new GenericBlock<IHeader>(result, 'header'))
		return null
	} catch (err) {
		return null
	}
}

export async function generateStaticParams() {
	const header = await getHeaderData()
	const params = header?.headerBlock.map(block => {
		return block.options
	})
	const slugObjects = params?.flatMap(options => options).map(options => ({ slug: options.slug }))

	return slugObjects?.map(slug => {
		return {
			slug: slug.slug,
		}
	})
}

export default function Page({ params }: PageProps) {
	return <div>{params.slug}</div>
}
