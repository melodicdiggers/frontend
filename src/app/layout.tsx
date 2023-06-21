import '../styles/globals.scss'
import { Baskervville, Cabin, Josefin_Sans } from 'next/font/google'
import ProvidersWrapper from './providers/SessionProvider'

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

interface Props {
	children: JSX.Element
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en' className={`${josefin.variable} ${baskervville.variable} ${cabin.variable}`}>
			<head>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</head>
			<ProvidersWrapper>
				<body>{children}</body>
			</ProvidersWrapper>
		</html>
	)
}
