'use client'
import React from 'react'
import Link from 'next/link'
import Menu from './DesktopMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Header, IHeaderBlock } from '../../types'

interface Props {
	headerData: string
}

export default function HeaderContainer(props: Props) {
	const [mobileNavbar, setMobileNavbar] = React.useState(false)
	let header: Header | null = null
	if (props.headerData) header = JSON.parse(props.headerData)
	else header = null

	return (
		<nav className='w-full px-44 py-14 sm:px-2 sm:py-4 md:px-12 lg:px-4'>
			<div className='flex items-center justify-between sm:hidden lg:flex'>
				<Link
					href={'/'}
					className='items-center font-josefin text-3xl font-semibold text-black no-underline sm:text-3xl sm:lowercase'>
					{header?.title.toUpperCase()}
				</Link>
				<div className='flex flex-row gap-12 sm:hidden'>
					{header?.headerBlock.map((block: IHeaderBlock) => {
						return <Menu block={block} key={`header-block-${block.title}`} />
					})}
				</div>
				<div
					className={`hidden h-6 w-6 cursor-pointer items-center sm:flex ${mobileNavbar ? 'active' : ''}`}
					onClick={() => setMobileNavbar(!mobileNavbar)}>
					<FontAwesomeIcon icon={faBars} size='xl' style={{ flex: 1, color: '#000000' }} />
				</div>
			</div>
			<div
				className={`fixed left-0 top-0 h-full w-full transform bg-background transition-all duration-500 ease-in-out ${
					mobileNavbar ? 'translate-x-0' : '-translate-x-full'
				} ${mobileNavbar ? 'sm:hidden lg:block' : ''}`}
				onClick={() => setMobileNavbar(false)}>
				<div className='mr-4 mt-4 flex justify-end'>
					<FontAwesomeIcon
						icon={faClose}
						size='lg'
						className='text-white cursor-pointer'
						onClick={() => setMobileNavbar(!mobileNavbar)}
					/>
				</div>
				<div className='flex h-full flex-col items-center justify-center'>
					<h3 className='text-white my-4 text-2xl font-semibold'>Sidebar Content</h3>
				</div>
			</div>
		</nav>
	)
}
