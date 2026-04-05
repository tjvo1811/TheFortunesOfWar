/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#1a1a14',
        'surface-light': '#f4f1ea',
        us: '#4a7fb5',
        vc: '#c0392b',
        arvn: '#d4a017',
        ink: '#f0ede8',
        'ink-dark': '#1a1a14',
        muted: '#7a9e7e',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
