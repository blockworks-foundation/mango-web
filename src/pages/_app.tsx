import '../styles/global.css'
import { ThemeProvider } from 'next-themes'

import type { AppProps } from 'next/app'
import { THEME_KEY } from '../utils/constants'

const MangoWeb = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme="Mango" storageKey={THEME_KEY}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MangoWeb;
