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
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
