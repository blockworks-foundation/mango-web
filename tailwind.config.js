/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
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
      backgroundImage: (_) => ({
        'mangotop': "url('/assets/images/mango-top.svg')",
        'mangobottom': "url('/assets/images/mango-bottom.svg')",
        'mangocpu': "url('/assets/images/bg-cta.svg')",
        'mangocard': "url('/assets/images/card-bg-test.svg')",
        'mangocardtwo': "url('/assets/images/card-bg-two.svg')",
        'mangocardsend': "url('/assets/images/card-send.png')",
        'mangocardcoin': "url('/assets/images/card-coin.png')",
        'mangocardglobal': "url('/assets/images/card-world.png')",
        'mangocardlever': "url('/assets/images/card-lever.png')",
        'mangocardmarkets': "url('/assets/images/card-markets.png')",
        'mangocardlend': "url('/assets/images/card-lend.png')",
        'mangocardpaint': "url('/assets/images/card-paint.png')",

      }),
      height: {
        350: '350px',
        450: '450px',
        500: '500px',
        550: '550px',
        600: '600px',
        650: '650px',
        675: '675px',
        700: '700px',
        750: '750px',
        900: '894px',
        901: '883px',
        1402: '1402px',
      },
      width: {
        450: '450px',
        646: '646px',
        700: '700px',
        750: '750px',
        900: '900px',
      },
      colors: {
        'mango': {
          'bkg-1': 'hsl(256, 18%, 12%)',
          'bkg-2': 'hsl(256, 18%, 17%)',
          'bkg-3': 'hsl(256, 18%, 22%)',
          'bkg-4': 'hsl(256, 18%, 27%)',
          'fgd-1': 'hsl(0, 0%, 100%, 5%)',
          'fgd-2': 'hsl(0, 0%, 100%, 10%)',
          'fgd-3': 'hsl(0, 0%, 100%, 40%)',
          'fgd-4': 'hsl(0, 0%, 100%, 80%)',
          'fgd-5': 'hsl(0, 0%, 100%)',
           red: 'hsl(4, 77%, 55%)',
           yellow: 'hsl(46, 99%, 55%)',
           green: 'hsl(72, 97%, 43%)',
           orange: 'hsl(29, 86%, 59%)',
           purple: 'hsl(250, 39%, 47%)',
        },
        'light-theme': {
          'bkg-1': 'hsl(0, 0%, 97%)',
          'bkg-2': 'hsl(0, 0%, 95%)',
          'bkg-3': 'hsl(0, 0%, 93%)',
          'bkg-4': 'hsl(0, 0%, 84%)',
          'fgd-1': 'hsl(0, 0%, 96%)',
          'fgd-2': 'hsl(0, 0%, 0%, 5%)',
          'fgd-3': 'hsl(0, 0%, 0%, 40%)',
          'fgd-4': 'hsl(0, 0%, 0%, 70%)',
          'fgd-5': 'hsl(0, 0%, 0%)',
        },
        'darker-theme': {
          'bkg-1': 'hsl(240, 6%, 7%)',
          'bkg-2': 'hsl(240, 6%, 12%)',
          'bkg-3': 'hsl(240, 6%, 17%)',
          'bkg-4': 'hsl(240, 6%, 22%)',
          'fgd-1': 'hsl(0, 0%, 100%, 5%)',
          'fgd-2': 'hsl(0, 0%, 100%, 10%)',
          'fgd-3': 'hsl(0, 0%, 100%, 40%)',
          'fgd-4': 'hsl(0, 0%, 100%, 80%)',
          'fgd-5': 'hsl(0, 0%, 100%)',
        },
        'dark-theme': {
          'bkg-1': 'hsl(240, 6%, 12%)',
          'bkg-2': 'hsl(240, 6%, 17%)',
          'bkg-3': 'hsl(240, 6%, 22%)',
          'bkg-4': 'hsl(240, 6%, 27%)',
          'fgd-1': 'hsl(0, 0%, 100%, 5%)',
          'fgd-2': 'hsl(0, 0%, 100%, 10%)',
          'fgd-3': 'hsl(0, 0%, 100%, 40%)',
          'fgd-4': 'hsl(0, 0%, 100%, 80%)',
          'fgd-5': 'hsl(0, 0%, 100%)',
        },
        'high-contrast-theme': {
          'bkg-1': 'hsl(0, 0%, 0%)',
          'bkg-2': 'hsl(0, 0%, 7%)',
          'bkg-3': 'hsl(0, 0%, 14%)',
          'bkg-4': 'hsl(0, 0%, 21%)',
          'fgd-1': 'hsl(0, 0%, 100%, 5%)',
          'fgd-2': 'hsl(0, 0%, 100%, 10%)',
          'fgd-3': 'hsl(0, 0%, 100%, 40%)',
          'fgd-4': 'hsl(0, 0%, 100%, 80%)',
          'fgd-5': 'hsl(0, 0%, 100%)',
        },
        'blueberry-theme': {
          'bkg-1': 'hsl(222, 74%, 21%)',
          'bkg-2': 'hsl(222, 74%, 26%)',
          'bkg-3': 'hsl(222, 74%, 31%)',
          'bkg-4': 'hsl(222, 74%, 36%)',
          'fgd-1': 'hsl(0, 0%, 100%, 5%)',
          'fgd-2': 'hsl(0, 0%, 100%, 10%)',
          'fgd-3': 'hsl(0, 0%, 100%, 40%)',
          'fgd-4': 'hsl(0, 0%, 100%, 80%)',
          'fgd-5': 'hsl(0, 0%, 100%)',
        },
        'banana-theme': {
          'bkg-1': 'hsl(46, 100%, 73%)',
          'bkg-2': 'hsl(46, 100%, 77%)',
          'bkg-3': 'hsla(46, 100%, 80%, 1)',
          'bkg-4': 'hsl(46, 100%, 60%)',
          'fgd-1': 'hsla(46, 100%, 85%, 1)',
          'fgd-2': 'hsl(0, 0%, 0%, 10%)',
          'fgd-3': 'hsl(0, 0%, 0%, 30%)',
          'fgd-4': 'hsl(0, 0%, 0%, 70%)',
          'fgd-5': 'hsl(0, 0%, 0%)',
        },
        'avocado-theme': {
          'bkg-1': 'hsl(65, 78%, 73%)',
          'bkg-2': 'hsl(65, 78%, 77%)',
          'bkg-3': 'hsl(65, 78%, 80%)',
          'bkg-4': 'hsl(65, 78%, 60%)',
          'fgd-1': 'hsl(65, 78%, 86%)',
          'fgd-2': 'hsl(0, 0%, 0%, 10%)',
          'fgd-3': 'hsl(0, 0%, 0%, 30%)',
          'fgd-4': 'hsl(0, 0%, 0%, 70%)',
          'fgd-5': 'hsl(0, 0%, 0%)',
        },
        'olive-theme': {
          'bkg-1': 'hsl(51, 16%, 19%)',
          'bkg-2': 'hsl(51, 16%, 24%)',
          'bkg-3': 'hsl(51, 16%, 29%)',
          'bkg-4': 'hsl(51, 16%, 34%)',
          'fgd-1': 'hsl(0, 0%, 100%, 5%)',
          'fgd-2': 'hsl(0, 0%, 100%, 10%)',
          'fgd-3': 'hsl(0, 0%, 100%, 40%)',
          'fgd-4': 'hsl(0, 0%, 100%, 80%)',
          'fgd-5': 'hsl(0, 0%, 100%)',
        },
        'lychee-theme': {
          'bkg-1': 'hsl(356, 58%, 88%)',
          'bkg-2': 'hsl(356, 58%, 90%)',
          'bkg-3': 'hsl(356, 58%, 89%)',
          'bkg-4': 'hsl(356, 58%, 90%)',
          'fgd-1': 'hsl(356, 58%, 92%)',
          'fgd-2': 'hsl(0, 0%, 0%, 20%)',
          'fgd-3': 'hsl(0, 0%, 0%, 40%)',
          'fgd-4': 'hsl(0, 0%, 0%, 70%)',
          'fgd-5': 'hsl(0, 0%, 0%)',
        },
        'th-bkg-1': 'var(--bkg-1)',
        'th-bkg-2': 'var(--bkg-2)',
        'th-bkg-3': 'var(--bkg-3)',
        'th-bkg-4': 'var(--bkg-4)',
        'th-fgd-1': 'var(--fgd-1)',
        'th-fgd-2': 'var(--fgd-2)',
        'th-fgd-3': 'var(--fgd-3)',
        'th-fgd-4': 'var(--fgd-4)',
        'th-fgd-5': 'var(--fgd-5)',

      },
      
      animation: {
        blob: 'blob 12s infinite',
        tilt: 'tilt 10s infinite linear',
        text:'text 12s ease infinite',
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
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
        text: {
          '0%, 100%': {
             'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
             'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tailwind-typewriter')({
      wordsets: {
          footer: {
              words: ['Germany.', 'France.', 'England.', 'Mexico.', 'Peru.', 'Colombia.', 'New york.', 'California.', 'Australia.', 'Japan.'],
              delay: 1
          },
          url: {
            words: ['https://trade.mango.markets'],
            delay: 1
          },
          clone: {
            words: ['git clone https://github.com/blockworks-foundation/m...'],
            delay: 1
          },
          hero: {
            words: ['//freedom is making it accessible to everyone..'],
            delay: 1
          },
          phone: {
            words: ['//freedom is not needing permission to move..'],
            delay: 1
          },
          desktop: {
            words: ['//freedom is control over your money..'],
            delay: 1
          },
          dao: {
            words: ['//freedom is community driven..'],
            delay: 1
          },
      }
  }),
  
    ],
};

