import { join } from 'path';

import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				darkBlue: '#5538EE',
				primaryBlue: '#6B4EFF',
				lightBlue: '#9990FF',
				lighterBlue: '#C6C4FF',
				darkGray: '#303437',
				lightGray: '#6C7072'
			}
		}
	},
	plugins: [
		typography,
		skeleton({
			themes: []
		})
	]
};
