/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
      './about.html',
      './contact.html',
      './mywork.html',
      './projects.html',
      './resume.html',
      './assets/js/*.js',
  ],
  theme: {
    extend: {
        keyframes: {
            'open-menu': {
                '0%': {transform: 'translateX(100%)'},
                '100%': {transform: 'translateX(0%)'},
            },
        },
        animation: {
            'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
    }
  },
  plugins: [],
}

