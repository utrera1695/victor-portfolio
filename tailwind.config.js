/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#402166',
        'dark': '#221A37'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.6xl') },
				h2: { fontSize: theme('fontSize.5xl') },
				h3: { fontSize: theme('fontSize.4xl') },
				h4: { fontSize: theme('fontSize.3xl') },
				h5: { fontSize: theme('fontSize.xl') },
				h5: { fontSize: theme('fontSize.4xl') },
				p: { fontSize: theme('fontSize.base') }
			});
		})
  ],
}

