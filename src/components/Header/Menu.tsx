import React from 'react'
import { IHeaderBlock, IOptions } from '../../types/header'
import Link from 'next/link'

interface MenuProps {
	block: IHeaderBlock
}

export default function Menu({ block }: MenuProps) {
	return (
		<div key={`header-${block.title}`} className='group font-josefin text-2xl font-medium'>
			<div className={`${block.title === 'News' ? 'cursor-pointer' : ''}`}>{block.title}</div>
			{block.title !== 'News' && (
				<div className='absolute hidden bg-background p-4 pb-0 pt-4 group-hover:block'>
					{block.options.map((option: IOptions) => {
						return (
							<Link
								href={`${option.route}`}
								key={`option-${option.slug}`}
								className='flex-column mb-2 flex cursor-pointer text-black no-underline'>
								{option.title}
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}
