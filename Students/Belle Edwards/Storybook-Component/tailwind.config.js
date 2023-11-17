/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#000',
				lightGray: '#6C7072',
				white: '#fff',
				darkRed: '#8B0000'
			}
		}
	},
	plugins: []
};
