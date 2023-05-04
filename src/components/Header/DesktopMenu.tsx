import React from 'react'
import { IHeaderBlock, IOptions } from '../../types/header'
import Link from 'next/link'

interface MenuProps {
	block: IHeaderBlock
}

export default function DesktopMenu({ block }: MenuProps) {
	return (
		<div key={`header-${block.title}`} className='group font-josefin text-2xl font-medium'>
			{block.title === 'News' ? (
				<Link className='cursor-pointer text-black no-underline' href={'/news'}>
					<div className='text-base font-semibold'>{block.title.toUpperCase()}</div>
				</Link>
			) : (
				<div className='text-base font-semibold'>{block.title.toUpperCase()}</div>
			)}
			{block.title !== 'News' && (
				<div className='absolute hidden bg-background px-2 pb-0 pt-4 group-hover:block'>
					{block.options.map((option: IOptions) => {
						return (
							<Link
								href={`${option.route}`}
								key={`option-${option.slug}`}
								className='flex-column mb-2 flex cursor-pointer text-base font-semibold text-black no-underline'>
								{option.title.toUpperCase()}
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}
