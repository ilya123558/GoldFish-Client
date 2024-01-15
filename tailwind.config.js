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
          'gradient-gold': 'background: linear-gradient(184.53deg, #F9A43F 5.27%, #FB791B 91.78%)',
          'gradient-gold-card': 'bg-gradient-to-r from-green-50 to-green-50',
          'gradient-silver-card': 'bg-gradient-to-r from-[#EEF1F1] to-[#ABB1B1]',
          'gradient-bronze-card': 'bg-gradient-to-r from-[#E2AB75] to-[#CD7F32]',
        },
      colors: {
        'primary': '#424242',
        'primary-op': 'rgba(42, 42, 42, 0.5)',
        'gold': 'rgba(249, 164, 63, 1)',
        'gold-op': 'rgba(249, 164, 63, 0.5)',
        'page': 'rgba(255, 251, 248, 1)'
      },
      boxShadow: {
        'pop-up': '5px 6px 15px 0px rgba(251, 121, 27, 0.63)',
        'card': '5px 6px 16px 0px rgba(42, 42, 42, 0.16)'
      }
    },
  },
  plugins: [],
}
