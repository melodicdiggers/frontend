import { useEffect, useState } from 'react'

interface SVGProps {
	src: string
	className?: string
}

const SVG = ({ className, src }: SVGProps) => {
	const [svgContent, setSvgContent] = useState<string | 0 | null>(null)

	useEffect(() => {
		const fetchSvg = async () => {
			try {
				const response = await fetch(src)

				if (response.status !== 200) throw new Error()

				const svg = await response.text()

				setSvgContent(svg)
			} catch (_) {
				setSvgContent(0)
			}
		}

		fetchSvg()
	}, [src])

	return svgContent !== null && svgContent !== 0 ? (
		<div className={className} dangerouslySetInnerHTML={{ __html: svgContent }} />
	) : svgContent === 0 ? (
		<div className={className}>{"Can't find any SVG"}</div>
	) : null
}

export default SVG
