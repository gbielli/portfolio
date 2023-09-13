/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gris: '#f8f8f8',
      beige: '#FFFDF4',
      black: '#1B1B1B',
      white: '#fff'
    },
    extend: {
      content: {
        arrowIcon: 'url("../public/images/arrow-top-right.svg")'
      },
      fontSize: {
        clamp: "clamp(16vw, 1.2vw, 19px)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        clash: ['var(--font-clash)'],
        archivo: ['var(--font-archivo)']
      },
    },
  },
  plugins: [],
}
