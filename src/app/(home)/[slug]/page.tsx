import { GenericBlock, Header, IHeader, IHeaderBlock } from '../../../types'
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

	//create an array with all slugs since some are nested
	console.log('params', params)

	return params?.map(options => {
		return {
			slug: options.slug,
		}
	})
}

export default function Page({ params }: PageProps) {
	return <div>{params.slug}</div>
}
