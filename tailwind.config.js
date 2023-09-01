/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'background: linear-gradient(184.53deg, #F9A43F 5.27%, #FB791B 91.78%)'
      },
      colors: {
        'primary': '#424242',
        'primary-op': 'rgba(42, 42, 42, 0.5)',
        'gold': 'rgba(249, 164, 63, 1)',
        'gold-op': 'rgba(249, 164, 63, 0.5)'
      },
      boxShadow: {
        'pop-up': '5px 6px 15px 0px rgba(251, 121, 27, 0.63)',
        'card': '5px 6px 16px 0px rgba(42, 42, 42, 0.16)'
      }
    },
  },
  plugins: [],
}
