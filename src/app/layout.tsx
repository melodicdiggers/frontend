import '../styles/globals.scss'
import { Baskervville, Cabin, Josefin_Sans } from 'next/font/google'
import ProvidersWrapper from './providers/SessionProvider'
import { Metadata } from 'next'

const baskervville = Baskervville({
	subsets: ['latin'],
	variable: '--font-baskervville',
	weight: '400',
})

const cabin = Cabin({
	subsets: ['latin'],
	variable: '--font-cabin',
	weight: ['400', '700'],
})

const josefin = Josefin_Sans({
	subsets: ['latin'],
	variable: '--font-josefin',
	weight: ['400', '700'],
})

export const metadata: Metadata = {
	title: 'Melodic Diggers',
	description: 'Welcome to Melodic Diggers Website',
	icons: [
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/apple-touch-icon.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon-32x32.png',
		},
		{
			rel: 'apple-touch-icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon-16x16.png',
		},
	],
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
}

interface Props {
	children: JSX.Element
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en' className={`${josefin.variable} ${baskervville.variable} ${cabin.variable}`}>
			<ProvidersWrapper>
				<body>{children}</body>
			</ProvidersWrapper>
		</html>
	)
}
