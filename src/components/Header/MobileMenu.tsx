'use client'
import Link from 'next/link'
import { IHeaderBlock, IOptions } from '../../types'
import { useState } from 'react'

interface MenuProps {
	block: IHeaderBlock
	setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileMenu({ block, setMobileNavbar }: MenuProps) {
	const [showOptions, setShowOptions] = useState(false)

	const toggleOptions = () => {
		setShowOptions(prevState => !prevState)
	}

	const closeMobile = () => {
		setMobileNavbar(false)
	}

	console.log(block)
	return (
		<div>
			{block.title === 'News' ? (
				<Link className='cursor-pointer text-black no-underline' href={'/news'} onClick={() => closeMobile()}>
					<div className='text-xl font-semibold'>{block.title.toUpperCase()}</div>
				</Link>
			) : (
				<div className='text-xl font-semibold' onClick={toggleOptions}>
					{block.title.toUpperCase()}
				</div>
			)}
			{showOptions && block.title !== 'News' && (
				<div className=' bg-background px-2 pb-0 pt-4'>
					{block.options.map((option: IOptions) => {
						return (
							<Link
								href={`${option.route}`}
								key={`option-${option.slug}`}
								onClick={() => closeMobile()}
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
