/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'Raleway Variable, sans-serif',
        opensans: 'Open Sans Variable, sans-serif',
      },
    },
  },
  plugins: [],
};
