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
		},
		extend: {
			fontFamily: {
				cabin: ['var(--font-cabin)'],
				baskervville: ['var(--font-baskervville)'],
				josefin: ['var(--font-josefin)'],
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}
