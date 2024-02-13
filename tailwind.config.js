/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      // Add custom utilities
      lineClamp: {
        3: {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3', // Number of lines you want to clamp
          textOverflow: 'ellipsis',
        },
      },
    },
  },
  plugins: [
    // Plugin to add utilities to Tailwind
    function({ addUtilities }) {
      addUtilities({
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3', // Adjust the number for different line clamps
          textoverflow: 'ellipsis',
        },
      })
    },
  ],
}

