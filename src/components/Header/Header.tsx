import React from 'react'
import { getHeader } from '../../utils/url'
import { IHeader, HeaderBlock } from '../../types/Header'

export default async function Header() {
	const [result] = await Promise.all([getHeader()])
	const header: IHeader = result.header.data.attributes
	console.log(header)

	return (
		<div className='flex items-center justify-between px-44 py-14'>
			<div className='font-josefin text-3xl font-semibold'>{header.title.toUpperCase()}</div>
			<div className='flex flex-row gap-6'>
				{header.headerBlock.map((block: HeaderBlock) => {
					return (
						<div key={`header-${block.title}`} className='font-josefin text-2xl font-medium'>
							{block.title}
						</div>
					)
				})}
			</div>
		</div>
	)
}
