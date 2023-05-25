const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
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

			keyframes: {
				overlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				contentShow: {
					from: { opacity: '0', scale: '0.96' },
					to: { opacity: '1', scale: '1' },
				},
			},
			animation: {
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},

	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.fixed-center': {
					position: 'fixed',
					top: '50%',
					left: '50%',
					translate: '-50% -50%',
				},
				'.abs-center': {
					position: 'absolute',
					top: '50%',
					left: '50%',
					translate: '-50% -50%',
				},
			});
		}),
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		}),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					square: (value) => {
						return {
							width: value,
							height: value,
						};
					},
				},
				{ values: theme('spacing') }
			);
		}),
	],
};
