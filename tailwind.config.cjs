/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				amaranth: {
					50: '#fff1f4',
					100: '#ffe4e9',
					200: '#fdced9',
					300: '#fca5ba',
					400: '#f97396',
					500: '#f02d65',
					600: '#de2060',
					700: '#bc1450',
					800: '#9d144a',
					900: '#861545',
					950: '#4b0621',
				},
			},
		},
	},

	plugins: [],
};

module.exports = config;
