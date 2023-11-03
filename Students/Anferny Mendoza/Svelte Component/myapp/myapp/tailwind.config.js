/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/routes/+page.svelte"],
  theme: {
    extend: {
      accentColor: {
        'indigo-500': '#6B46C1',
      }
    },
  },
  plugins: [    require('@tailwindcss/forms'),
  require('tailwindcss-accent'),],
}

