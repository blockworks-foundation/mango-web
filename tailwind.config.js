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
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      backgroundImage: (_) => ({
        'hero-img': "url('../public/img/Hero_BG.jpeg')",
        'feature-one': "url('../public/img/feature1.png')",
        'feature-two': "url('../public/img/feature2.png')",
        'feature-three': "url('../public/img/feature3.png')",
        'feature-four': "url('../public/img/feature4.png')",
        'bg-texture': "url('../public/img/bgtexture.png')",
        'home-bg': "url('../public/img/home_section.png')",

      }),

      height: {
        650: '650px',
        675: '675px',
        700: '700px',
        750: '750px',
        2150: '2150px',
      },
      cursor: {
        help: 'help',
      },
      colors: {
        'mango-orange': {
          DEFAULT: '#DFAB01',
          dark: '#CB9C01',
        },
        'mango-yellow': '#F2C94C',
        'mango-red': '#E54033',
        'mango-green': '#AFD803',
        'mango-dark': {
          lighter: '#332F46',
          light: '#262337',
          DEFAULT: '#141026',
        },
        'mango-med': {
          light: '#C2BDD9',
          DEFAULT: '#9490A6',
          dark: '#706C81',
        },
        'mango-light': {
          light: '#FCFCFF',
          DEFAULT: '#F0EDFF',
          dark: '#B9B5CE',
        },
        'mango-grey': {
          lighter: '#f7f7f7',
          light: '#e6e6e6',
          dark: '#092e34',
          darker: '#072428',
          darkest: '#061f23',
        },
        'mango-theme': {
          yellow: '#F2C94C',
          red: { DEFAULT: '#E54033', dark: '#C7251A' },
          green: { DEFAULT: '#AFD803', dark: '#91B503' },
          'bkg-1': '#141026',
          'bkg-2': '#1D1832',
          'bkg-3': '#252238',
          'fgd-1': '#F0EDFF',
          'fgd-2': '#FCFCFF',
          'fgd-3': '#B9B5CE',
          'fgd-4': '#2F2C45',
        },
        'th-bkg-1': 'var(--bkg-1)',
        'th-bkg-2': 'var(--bkg-2)',
        'th-bkg-3': 'var(--bkg-3)',
        'th-fgd-1': 'var(--fgd-1)',
        'th-fgd-2': 'var(--fgd-2)',
        'th-fgd-3': 'var(--fgd-3)',
        'th-fgd-4': 'var(--fgd-4)',
        'th-primary': 'var(--primary)',
        'th-red': 'var(--red)',
        'th-red-dark': 'var(--red-dark)',
        'th-green': 'var(--green)',
        'th-green-dark': 'var(--green-dark)',
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
