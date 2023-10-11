/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
            twiterBlue: '#0ea5e9',
            facebookBlue: '#3b82f6',
        }
      }
    },
    plugins: [],
  }