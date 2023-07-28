/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte, ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'mountains': "url('/background.svg')",
      }
    },
  },
  plugins: [],
}

