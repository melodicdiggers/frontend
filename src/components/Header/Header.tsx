import React from 'react'
import { getHeader } from '../../utils/url'
import { IHeader, IHeaderBlock } from '../../types/Header'
import Link from 'next/link'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

async function getHeaderData(): Promise<IHeader | null> {
	try {
		const result = await getHeader()
		if (result) {
			return result.header.data.attributes
		}
		return null
	} catch (err) {
		return null
	}
}

export default async function Header() {
	const header: IHeader | null = await getHeaderData()
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
				<div className='hidden h-6 w-6 cursor-pointer items-center sm:flex'>
					<FontAwesomeIcon icon={faBars} size='2xs' style={{ flex: 1, color: '#000000' }} />
				</div>
			</div>
		</nav>
	)
}
