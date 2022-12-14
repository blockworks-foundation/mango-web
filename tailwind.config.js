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

    screens: {
      xs: '240px',
      // => @media (min-width: 340px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: (_) => ({
        'hero-img': "url('../public/img/Hero_BG.jpeg')",
        'product-one': "url('../public/img/ProductFeature1.png')",
        'product-two': "url('../public/img/ProductFeature2.png')",
        'product-three': "url('../public/img/ProductFeature3.png')",
        'product-four': "url('../public/img/redeem4.png')",
        'bg-texture': "url('../public/img/bgtexture.png')",
        'bg-cta': "url('../public/img/bgcta.jpeg')",
        'home-bg': "url('../public/img/home_section.png')",
      }),
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
        primary: { light: '#F2C94C', dark: '#EEB91B' },
        'secondary-1': { light: '#AFD803', dark: '#6CBF00' },
        'secondary-2': { light: '#E54033', dark: '#C7251A' },
        'secondary-3': { light: '#026DF7', dark: '#0259CA' },
        'secondary-4': { light: '#262145', dark: '#1B1735' },
        'bkg-1': '#141125',
        'bkg-2': '#242132',
        'bkg-3': '#393549',
        'bkg-4': '#4F4B63',
        'fgd-1': '#F0EDFF',
        'fgd-2': '#FCFCFF',
        'fgd-3': '#B9B5CE',
        'fgd-4': '#706C81',
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
        'light-theme': {
          yellow: '#F58700',
          red: { DEFAULT: '#CC2929', dark: '#AA2222' },
          green: { DEFAULT: '#5EBF4D', dark: '#4BA53B' },
          'bkg-1': '#f7f7f7',
          'bkg-2': '#FFFFFF',
          'bkg-3': '#F0F0F0',
          'fgd-1': '#061f23',
          'fgd-2': '#0C3F45',
          'fgd-3': '#446065',
          'fgd-4': '#B0B0B0',
        },
        'dark-theme': {
          yellow: '#E4AF11',
          red: { DEFAULT: '#CC2929', dark: '#AA2222' },
          green: { DEFAULT: '#5EBF4D', dark: '#4BA53B' },
          'bkg-1': '#101012',
          'bkg-2': '#1B1B1F',
          'bkg-3': '#27272B',
          'fgd-1': '#FFFFFF',
          'fgd-2': '#F7F7F7',
          'fgd-3': '#E7E7E7',
          'fgd-4': '#878787',
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
      animation: {
        blob: 'blob 12s infinite',
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
            transform: 'translate(-20px, 20px) scale(0.6)',
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
