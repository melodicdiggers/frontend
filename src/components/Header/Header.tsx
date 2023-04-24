import React from 'react'
import { getHeader } from '../../utils/url'
import { IHeader, IHeaderBlock } from '../../types/Header'
import Link from 'next/link'
import Menu from './Menu'

export default async function Header() {
	const [result] = await Promise.all([getHeader()])

	const header: IHeader = result.header.data.attributes

	return (
		<div className='flex items-center justify-between px-44 py-14'>
			<Link href={'/'} className='font-josefin text-3xl font-semibold text-black no-underline'>
				{header.title.toUpperCase()}
			</Link>
			<div className='flex flex-row gap-12'>
				{header.headerBlock.map((block: IHeaderBlock) => {
					return <Menu block={block} key={`header-block-${block.title}`} />
				})}
			</div>
		</div>
	)
}
