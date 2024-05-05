/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
		colors: {
			babyblue: '#22C3F1',
			primaryblue: '#272949',
			limegreen: '#4AC06F',
			darkpurple: '#9251F7',
			darkblue: '#516CF7',
			graybg: '#f3f4f6',
		  },
	},
	plugins: [
		require('flowbite/plugin')
	],
}
