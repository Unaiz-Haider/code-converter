// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.6s ease-out forwards 1s', // delay = 1s
      },
    },
  },
};