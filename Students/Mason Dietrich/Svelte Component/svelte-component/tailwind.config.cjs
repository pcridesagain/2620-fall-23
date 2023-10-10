/** @type {import('tailwindcss').Config}*/
import { skeleton } from '@skeletonlabs/tw-plugin';
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton( {
			themes: {preset: [
				{name: "crimson", enhancements: true},
			]}
		})
	]
};

module.exports = config;
