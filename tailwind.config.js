module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        'theme-primary': '#fff740',
        'theme-primary-light': '#feff9c',
        'theme-secondary': '#7afcff',
        'theme-tertiary': '#ff65a3',
        'theme-tertiary-light': '#ff7eb9',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1.5rem',
      },
    },
    fontFamily: {
      primary: ['Oswald, sans-serif'],
      writing: ['Shantell Sans, cursive'],
    },
    boxShadow: {
      note: 'inset 0 -40px 40px rgba(0,0,0,0.05), inset 0 25px 10px rgba(0,0,0,0.03), 5px 5px 7px rgba(33,33,33,.08)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
