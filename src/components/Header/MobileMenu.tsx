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

	return (
		<div>
			{block.title === 'News' || block.title === 'Equanimity' || block.title === 'Events' ? (
				<Link
					className='cursor-pointer text-black no-underline'
					href={block.options.route}
					onClick={() => closeMobile()}>
					<div className='font-josefin text-2xl font-semibold hover:text-hover'>{block.title.toUpperCase()}</div>
				</Link>
			) : (
				<div className=' font-josefin text-2xl font-semibold hover:text-hover' onClick={toggleOptions}>
					{block.title.toUpperCase()}
					<div
						className={`max-h-0 w-full overflow-hidden bg-background transition-all duration-700 ease-in-out ${
							showOptions ? 'max-h-screen' : ''
						}`}>
						{block.options.map((option: IOptions) => {
							return (
								<Link
									href={`${option.route}`}
									key={`option-${option.slug}`}
									onClick={() => closeMobile()}
									className='flex-column hover:bg-gray-200 mb-2 mt-2 flex cursor-pointer px-4 font-josefin text-xl font-semibold text-black no-underline hover:text-hover'>
									{option.title.toUpperCase()}
								</Link>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}
