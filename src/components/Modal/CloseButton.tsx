'use client'

import { useRouter } from 'next/navigation'

export const CloseButton = ({ className, children }: { className: string; children: JSX.Element }) => {
	const router = useRouter()

	return (
		<div className={className} onClick={() => router.back()}>
			{children}
		</div>
	)
}
