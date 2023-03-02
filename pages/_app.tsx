import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  const title = 'Mango Markets'
  const description =
    'Decentralized, cross-margin trading up to 20x leverage with lightning speed and near-zero fees.'
  const keywords =
    'Mango Markets, DEFI, Decentralized Finance, Decentralized Finance, Crypto, ERC20, Ethereum, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SPL Tokens'

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mango Markets" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://www.mango.markets/socials/twitter-image-1200x600.png?34567878"
        />

        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="Mango">
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(App)
