'use client'
import React from 'react'
import Link from 'next/link'
import DesktopMenu from './DesktopMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Header, IHeaderBlock } from '../../types'
import MobileMenu from './MobileMenu'
import { LoginSvg, SignOutSvg } from '../Icons'
import { signOut, useSession } from 'next-auth/react'

interface Props {
	headerData: string
}

export default function HeaderContainer(props: Props) {
	const session = useSession()
	const [mobileNavbar, setMobileNavbar] = React.useState(false)
	let header: Header | null = null
	if (props.headerData) header = JSON.parse(props.headerData)
	else header = null

	//console.log('session', session)

	const logoutAccount = () => {
		localStorage.removeItem('token')
		signOut({ callbackUrl: `/` })
	}

	return (
		<div className='px-28 py-14 sm:px-2 sm:py-4 md:px-12 xl:px-8'>
			<div className='flex items-center justify-between sm:hidden lg:flex'>
				<Link
					href={'/'}
					className='items-center font-josefin text-3xl font-semibold text-black no-underline sm:text-3xl sm:lowercase'>
					{header?.title.toUpperCase()}
				</Link>
				<div className='flex flex-row items-center gap-12 sm:hidden'>
					{header?.headerBlock.map((block: IHeaderBlock) => {
						return <DesktopMenu block={block} key={`header-desktop-block-${block.title}`} />
					})}
					{session?.data == null ? (
						<Link href={'/login'} className='cursor-pointer'>
							<LoginSvg width={18} heigth={18} color={'#000'} />
						</Link>
					) : (
						<div className='flex flex-row items-center gap-2'>
							<div className=''>{session.data.user?.name}</div>
							<div className='flex cursor-pointer items-center' onClick={logoutAccount}>
								<SignOutSvg width={18} heigth={18} color={'#000'} />
							</div>
						</div>
					)}
				</div>
				<div
					className={`hidden h-6 w-6 cursor-pointer items-center sm:flex ${mobileNavbar ? 'active' : ''}`}
					onClick={() => setMobileNavbar(!mobileNavbar)}>
					<FontAwesomeIcon icon={faBars} size='xl' style={{ flex: 1, color: '#000000' }} />
				</div>
			</div>
			<div
				className={`fixed left-0 top-0 z-10 h-full w-full transform bg-background pl-12 pr-5 pt-6 transition-all duration-500 ease-in-out ${
					mobileNavbar ? 'translate-x-0' : '-translate-x-full'
				} ${mobileNavbar ? 'sm:hidden lg:block' : ''}`}>
				<div className='flex justify-end'>
					<FontAwesomeIcon
						icon={faClose}
						size='xl'
						className='cursor-pointer'
						onClick={() => setMobileNavbar(!mobileNavbar)}
					/>
				</div>
				<div className='mt-6 flex flex-col gap-5'>
					{session?.data == null ? (
						<Link href={'/login'} className='cursor-pointer'>
							<LoginSvg width={18} heigth={18} color={'#000'} />
						</Link>
					) : (
						<div>{session.data.user?.name}</div>
					)}
					{header?.headerBlock.map((block: IHeaderBlock) => {
						return (
							<MobileMenu block={block} key={`header-mobile-block-${block.title}`} setMobileNavbar={setMobileNavbar} />
						)
					})}
				</div>
			</div>
		</div>
	)
}
