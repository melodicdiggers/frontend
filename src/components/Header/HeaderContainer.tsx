'use client'
import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Header, IHeaderBlock } from '../../types'

interface Props {
	headerData: string
}

export default function HeaderContainer(props: Props) {
	const [mobileNavbar, setMobileNavbar] = React.useState(false)
	let header: Header | null = null
	if (props.headerData) header = JSON.parse(props.headerData)
	else header = null
	console.log(header)
	return (
		<nav className='w-full px-44 py-10 sm:px-2 sm:py-6 md:px-6 lg:px-4'>
			<div className='flex items-center justify-between'>
				<Link href={'/'} className='items-center font-josefin text-3xl font-semibold text-black no-underline'>
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
					<FontAwesomeIcon
						icon={mobileNavbar ? faBars : faXmark}
						size='xl'
						className={`transition-transform duration-300 ${
							mobileNavbar ? 'rotate-0 transform' : 'rotate-90 transform'
						}`}
						style={{ flex: 1, color: '#000000' }}
					/>
				</div>
			</div>
		</nav>
	)
}
