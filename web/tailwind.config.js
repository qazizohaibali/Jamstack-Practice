/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Garamond: ['"EB Garamond", serif'],
        Montserrat: ["'Montserrat', sans-serif"],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        typography_body: '#575A66',
        typography_heading_white: '#FAFAFA',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        'max-w': 'max-width',
        gap: 'gap',
        p: 'padding',
      },
    },
  },
  plugins: [],
}
