import '../styles/globals.scss'
import { Baskervville, Cabin } from 'next/font/google'

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
interface Props {
	children: JSX.Element
	params: {
		lang: string
	}
}

export default function RootLayout({ children, params }: Props) {
	return (
		<html lang='en' className={`${baskervville.variable} ${cabin.variable}`}>
			<body>{children}</body>
		</html>
	)
}
