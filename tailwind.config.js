/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#020617',
        blueteam: '#0F3D91',
        cyantech: '#38BDF8',
        electric: '#2563EB',
        graydark: '#111827',
        lightgray: '#E5E7EB',
        softgreen: '#22C55E',
        alertred: '#EF4444',
      },
      boxShadow: {
        card: '0 15px 35px rgba(2, 6, 23, 0.45)',
      },
    },
  },
  plugins: [],
};
