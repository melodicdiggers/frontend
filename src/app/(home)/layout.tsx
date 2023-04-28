import HeaderContainer from '../../components/Header/HeaderContainer'
import { GenericBlock, Header, IHeader } from '../../types'
import { getHeader } from '../../utils/url'

interface Props {
	children: JSX.Element
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

export default async function HomeLayout({ children }: Props) {
	const header = await getHeaderData()

	return (
		<div className='flex flex-col'>
			<HeaderContainer headerData={JSON.stringify(header)} />
			{children}
			<div>Footer</div>
		</div>
	)
}
