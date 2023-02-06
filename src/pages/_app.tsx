import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { THEME_KEY } from '../utils/constants'
import NavvyAlpha from '@/components/NavvyAlpha'
import { Analytics } from '@vercel/analytics/react';

const MangoWeb = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme="Mango" storageKey={THEME_KEY}>
    <NavvyAlpha />
            <Component {...pageProps} />
            <Analytics />
  </ThemeProvider>


)

export default MangoWeb;
