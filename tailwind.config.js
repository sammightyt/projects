/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cricket: {
          blue: {
            DEFAULT: '#003f5c',
            light: '#2c5f7f',
            dark: '#001f2e',
          },
          gold: {
            DEFAULT: '#ffa600',
            light: '#ffb733',
            dark: '#cc8500',
          },
          green: {
            DEFAULT: '#2f9e44',
            light: '#51cf66',
            dark: '#2b8a3e',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
