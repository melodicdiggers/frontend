import FooterContainer from '../../components/Footer/FooterContainer'
import HeaderContainer from '../../components/Header/HeaderContainer'
import { Footer, GenericBlock, Header, IFooter, IHeader } from '../../types'
import { getFooterBlock, getHeader } from '../../utils/url'
import ProvidersWrapper from '../providers/SessionProvider'

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

async function getFooterData(): Promise<Footer | null> {
	try {
		const result = await getFooterBlock()
		if (result) return new Footer(new GenericBlock<IFooter>(result, 'footer'))
		return null
	} catch (err) {
		return null
	}
}

export default async function HomeLayout({ children }: Props) {
	const [header, footer] = await Promise.all([getHeaderData(), getFooterData()])

	return (
		<ProvidersWrapper>
			<div className='flex h-full w-full flex-col'>
				<HeaderContainer headerData={JSON.stringify(header)} />
				{children}
				<FooterContainer headerData={JSON.stringify(footer)} />
			</div>
		</ProvidersWrapper>
	)
}
