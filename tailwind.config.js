/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090C',
        blue: {
          deep: '#0A1B34',
          mid: '#122A4C',
          line: '#24406B',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#E6D3A0',
          dim: '#8A6F3D',
        },
        ivory: '#F4F1E9',
        bone: '#B9BFC9',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.14em',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top right, rgba(198,161,91,0.14), transparent 55%)',
      },
    },
  },
  plugins: [],
}
