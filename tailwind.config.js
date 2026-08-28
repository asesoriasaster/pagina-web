/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aster: {
          green: '#63AE0B',
          greenDark: '#4F8C09',
          greenSoft: '#F3F8EC',
          black: '#111111',
          gray: '#4B5563',
          soft: '#F6F7F5',
          red: '#D64545',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        card: '0 2px 10px rgba(17, 17, 17, 0.05)',
        cardHover: '0 12px 32px rgba(17, 17, 17, 0.10)',
        pop: '0 20px 60px rgba(17, 17, 17, 0.14)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
      },
    },
  },
  plugins: [],
};
