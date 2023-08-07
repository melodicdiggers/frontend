import React from 'react'
import { twMerge } from 'tailwind-merge'

interface GridItemProps {
	children: React.ReactNode
	className?: string
}

function GridItem(props: GridItemProps) {
	return (
		<div
			className={` ${twMerge(
				'mobile:col-end-mobile tablet:col-end-tablet col-start-1 col-end-13',
				props.className ?? ''
			)} `}>
			{props.children}
		</div>
	)
}

export default GridItem
