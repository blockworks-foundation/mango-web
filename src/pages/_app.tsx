import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { THEME_KEY } from '../utils/constants'
import NavvyAlpha from '@/components/NavvyAlpha'

const MangoWeb = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme="Mango" storageKey={THEME_KEY}>
    <NavvyAlpha />
    <AnimatePresence mode="wait">
      <motion.div        
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration:0.50,
        }}
        variants={{
          initialState: {
            opacity: .5,
            y:50,
          },
          animateState: {
            opacity: 1,
            y:0,
          },
        }}
        className=""
        >
            <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </ThemeProvider>


)

export default MangoWeb;
