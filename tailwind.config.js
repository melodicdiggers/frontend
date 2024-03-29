/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: { max: '640px' },
			// => @media (max-width: 640px) { ... }

			md: { max: '768px' },
			// => @media (max-width: 768px) { ... }

			lg: { max: '1024px' },
			// => @media (max-width: 1024px) { ... }

			xl: { max: '1280px' },
			// => @media (max-width: 1280px) { ... }

			'xl-2': { max: '1536px' },
			// => @media (max-width: 1536px) { ... }
		},
		colors: {
			primary: '#2222',
			background: '#FCFCFC',
			black: '#000',
			hover: '#9CA3AF',
			secondBlack: '#1d1d1d',
			white: '#fff',
			secondBackground: '#F8F8F8',
		},
		extend: {
			fontFamily: {
				cabin: ['var(--font-cabin)'],
				baskervville: ['var(--font-baskervville)'],
				josefin: ['var(--font-josefin)'],
			},
			gridTemplateColumns: {
				desktop: 'repeat(1, minmax(0, 1fr))',
				tablet: 'repeat(6, minmax(0, 1fr))',
				mobile: 'repeat(4, minmax(0, 1fr))',
			},
			gridColumnEnd: {
				desktop: '13',
				tablet: '7',
				mobile: '5',
			},
			gap: {
				desktop: '24px',
				tablet: '20px',
				mobile: '16px',
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}
