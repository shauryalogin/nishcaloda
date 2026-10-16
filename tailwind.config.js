/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          hero:   '#d42b2b',
          dark:   '#b01f1f',
          deep:   '#8a1515',
          accent: '#e74c3c',
        },
        steel: {
          light:  '#b8c8d4',
          mid:    '#9baab6',
          dark:   '#7a8d9e',
          deeper: '#5a6f7f',
        },
      },
      fontFamily: {
        cond:   ['"Barlow Condensed"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        base:   ['Barlow', 'sans-serif'],
      },
      animation: {
        ticker:  'ticker 34s linear infinite',
        fadeUp:  'fadeUp 0.6s ease forwards',
        pulse2:  'pulse2 2s ease-in-out infinite',
        spin2:   'spin2 8s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.4' },
        },
        spin2: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
