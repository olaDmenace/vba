/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00B6FF",
          light: "#81DAFE",
          dark: "#24718C",
          bg: '#76CEF11A'
        },
        back: {
          DEFAULT: '#030303',
          light: '#131313',
          back: '#32393C33'
        }
        // primary: "#76CEF1",
      },
      fontSize: {
        Heading7: ['14px', { lineHeight: '24px' }],
        Heading6: ['16px', { lineHeight: '22px' }],
        Heading5: ['18px', { lineHeight: '24px' }],
        Heading4: ['24px', { lineHeight: '33px' }],
        Heading3: ['32px', { lineHeight: '44px' }],
        Heading2: ['48px', { lineHeight: '53px' }],
        Heading1: ['56px', { lineHeight: '74px' }],
      }
    },
  },
  plugins: [],
}
