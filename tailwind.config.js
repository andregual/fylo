/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
    },
    extend: {
      fontFamily: {
        primary: 'Open Sans, sans-serif',
        titles: 'Raleway, sans-serif',
      },
      colors: {
        cyan: 'hsl(176, 68%, 64%)',
        blue: 'hsl(198, 60%, 50%)',
        red: 'hsl(219, 30%, 18%)',
        introBg: 'hsl(217, 28%, 15%)',
        mainBg: 'hsl(218, 28%, 13%)',
        footerBg: 'hsl(216, 53%, 9%)',
        testimonialsBg: '#202A3C',
      },
    },
  },
  plugins: [],
};
