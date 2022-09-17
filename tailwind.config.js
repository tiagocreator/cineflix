module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'theme-black': '#141416',
      'theme-darkgray': '#2d2d2d',
      'theme-lightgray': '#d4d4d4',
      'theme-red': '#df0000',
      'theme-darkred': '#cc0202',
      'theme-textgray': '#b4b4b4',
      'theme-background-60': 'rgba(0, 0, 0, 0.6)',
      'theme-background-70': 'rgba(0, 0, 0, 0.7)',
      'theme-background-80': 'rgba(0, 0, 0, 0.8)',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
