/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B172A',
        midblue: '#1E3A8A',
        lightblue: '#38BDF8',
        lightgray: '#E5E7EB',
        softgreen: '#22C55E',
      },
      boxShadow: {
        card: '0 10px 30px rgba(11, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};
