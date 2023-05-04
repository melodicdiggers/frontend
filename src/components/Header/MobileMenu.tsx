import Link from 'next/link'
import { IHeaderBlock, IOptions } from '../../types'

interface MenuProps {
	block: IHeaderBlock
}

export default function MobileMenu({ block }: MenuProps) {
	console.log(block)
	return (
		<div>
			<div className='group font-josefin text-xl font-semibold'>{block.title.toUpperCase()}</div>
			{block.title !== 'News' && (
				<div className='absolute bg-background px-2 pb-0 pt-4'>
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
