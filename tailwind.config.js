/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#fffff0',
        panel: '#fffff2',
        panel2: '#f8ecb8',
        line: '#e2d6a6',
        paper: '#2c1e16',
        muted: '#6a584b',
        brass: '#5a3a35',
        brassSoft: '#000000',
        signal: '#5b6b34',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Sans"', 'sans-serif'],
        name: ['Georgia', '"Times New Roman"', 'serif'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
