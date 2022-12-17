/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['TT Commons Expanded, sans-serif'],
      body: 'TT Commons, sans-serif',
      mono: ['TT Mono, mono'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        mango: {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: 'hsl(269, 23%, 48%)',
            hover: 'hsl(269, 23%, 43%)',
          },
          input: {
            bkg: 'hsl(256, 18%, 10%)',
            border: 'hsl(253, 19%, 41%)',
            borderDark: 'hsl(253, 19%, 31%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(4, 93%, 60%)',
            dark: 'hsl(4, 93%, 55%)',
            muted: 'hsl(4, 53%, 55%)',
          },
          up: {
            DEFAULT: 'hsl(72, 97%, 41%)',
            dark: 'hsl(72, 97%, 36%)',
            muted: 'hsl(72, 57%, 36%)',
          },
          error: 'hsl(4, 93%, 60%)',
          success: 'hsl(72, 97%, 41%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(256, 18%, 12%)',
          'bkg-2': 'hsl(256, 18%, 17%)',
          'bkg-3': 'hsl(256, 18%, 22%)',
          'bkg-4': 'hsl(256, 18%, 27%)',
          'fgd-1': 'hsl(253, 19%, 91%)',
          'fgd-2': 'hsl(253, 19%, 81%)',
          'fgd-3': 'hsl(253, 19%, 71%)',
          'fgd-4': 'hsl(253, 19%, 61%)',
          red: 'hsl(4, 77%, 55%)',
          yellow: 'hsl(46, 99%, 55%)',
          green: 'hsl(72, 97%, 43%)',
          orange: 'hsl(29, 86%, 59%)',
        },
      },
    },
  },
  plugins: [],
};
