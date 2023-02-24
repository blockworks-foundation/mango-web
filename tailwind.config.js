// const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['TT Commons Expanded, sans-serif'],
      body: 'TT Commons, sans-serif',
      mono: ['TT Mono, mono'],
    },
    extend: {
      height: {
        450: '450px',
        500: '500px',
        550: '550px',
        600: '600px',
        650: '650px',
        675: '675px',
        700: '700px',
        750: '750px',
        1450: '1200px',
        1750: '1750px',
      },
      width: {
        450: '450px',
        700: '700px',
        900: '900px',
      },
      cursor: {
        help: 'help',
      },
      colors: {
        'mango-classic-theme': {
          active: {
            DEFAULT: 'hsl(45, 86%, 62%)',
            dark: 'hsl(45, 86%, 57%)',
          },
          button: {
            DEFAULT: '#7139C4',
            hover: '#6432AE',
          },
          input: {
            bkg: 'hsl(256, 18%, 10%)',
            border: 'hsl(253, 19%, 41%)',
            borderDark: 'hsl(253, 19%, 31%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(4, 63%, 55%)',
            dark: 'hsl(4, 93%, 55%)',
            muted: 'hsl(4, 43%, 38%)',
          },
          up: {
            DEFAULT: 'hsl(77, 63%, 40%)',
            dark: 'hsl(85, 50%, 36%)',
            muted: 'hsl(84, 40%, 32%)',
          },
          error: 'hsl(4, 93%, 60%)',
          success: 'hsl(82, 97%, 41%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(256, 18%, 12%)',
          'bkg-2': 'hsl(256, 18%, 17%)',
          'bkg-3': 'hsl(256, 18%, 22%)',
          'bkg-4': 'hsl(256, 18%, 27%)',
          'fgd-1': 'hsl(253, 19%, 91%)',
          'fgd-2': 'hsl(253, 19%, 81%)',
          'fgd-3': 'hsl(253, 19%, 71%)',
          'fgd-4': 'hsl(253, 19%, 61%)',
        },
        'light-theme': {
          active: {
            DEFAULT: '#7139C4',
            dark: 'hsl(33, 100%, 52%)',
          },
          button: {
            DEFAULT: '#F2C94C',
            hover: '#EFBF2E',
          },
          input: {
            bkg: 'hsl(0, 0%, 97%)',
            border: 'hsl(0, 0%, 33%)',
            borderDark: 'hsl(0, 0%, 23%)',
          },
          link: { DEFAULT: 'hsl(33, 100%, 57%)', hover: 'hsl(33, 100%, 52%)' },
          down: {
            DEFAULT: 'hsl(0, 39%, 58%)',
            dark: 'hsl(0, 39%, 53%)',
            muted: 'hsl(0, 19%, 53%)',
          },
          up: {
            DEFAULT: 'hsl(111, 47%, 53%)',
            dark: 'hsl(111, 47%, 48%)',
            muted: 'hsl(111, 7%, 48%)',
          },
          error: 'hsl(0, 39%, 58%)',
          success: 'hsl(111, 47%, 53%)',
          warning: 'hsl(33, 100%, 57%)',
          'bkg-1': 'hsl(0, 0%, 99%)',
          'bkg-2': 'hsl(0, 0%, 94%)',
          'bkg-3': 'hsl(0, 0%, 89%)',
          'bkg-4': 'hsl(0, 0%, 84%)',
          'fgd-1': 'hsl(0, 0%, 8%)',
          'fgd-2': 'hsl(0, 0%, 23%)',
          'fgd-3': 'hsl(0, 0%, 38%)',
          'fgd-4': 'hsl(0, 0%, 53%)',
        },
        'th-bkg-1': 'var(--bkg-1)',
        'th-bkg-2': 'var(--bkg-2)',
        'th-bkg-3': 'var(--bkg-3)',
        'th-bkg-4': 'var(--bkg-4)',
        'th-fgd-1': 'var(--fgd-1)',
        'th-fgd-2': 'var(--fgd-2)',
        'th-fgd-3': 'var(--fgd-3)',
        'th-fgd-4': 'var(--fgd-4)',
        'th-active': 'var(--active)',
        'th-active-dark': 'var(--active-dark)',
        'th-error': 'var(--error)',
        'th-success': 'var(--success)',
        'th-warning': 'var(--warning)',
        'th-down': 'var(--down)',
        'th-down-dark': 'var(--down-dark)',
        'th-down-muted': 'var(--down-muted)',
        'th-up': 'var(--up)',
        'th-up-dark': 'var(--up-dark)',
        'th-up-muted': 'var(--up-muted)',
        'th-link': 'var(--link)',
        'th-link-hover': 'var(--link-hover)',
        'th-button': 'var(--button)',
        'th-button-hover': 'var(--button-hover)',
        'th-input-bkg': 'var(--input-bkg)',
        'th-input-border': 'var(--input-border)',
        'th-input-border-hover': 'var(--input-border-hover)',
      },
      animation: {
        blob: 'blob 12s infinite',
      },
      fontSize: {
        xxs: '.65rem',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus', 'disabled'],
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}
