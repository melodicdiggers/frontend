import React from 'react'
import { twMerge } from 'tailwind-merge'

interface GridLayoutProps {
	children: React.ReactNode
	className?: string
}

function GridLayout(props: GridLayoutProps) {
	return (
		<div
			className={twMerge(
				'layout-width mobile:grid-cols-mobile tablet:grid-cols-tablet mx-auto grid w-full grid-cols-desktop  gap-4 bg-background',
				props.className ?? ''
			)}>
			{props.children}
		</div>
	)
}

export default GridLayout
