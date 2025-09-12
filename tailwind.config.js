// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        pulseGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'pulse-grow': 'pulseGrow 1.5s ease-in-out infinite',
      },
    },
  },
}
