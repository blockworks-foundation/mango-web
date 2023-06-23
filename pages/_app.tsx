import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import { appWithTranslation } from 'next-i18next'

const metaTitle = 'Mango Markets – Safer. Smarter. Faster.'
const metaDescription =
  'A magical new way to interact with DeFi. Groundbreaking safety features designed to keep your funds secure. The easiest way to margin trade any token pair. All powered by flashloans.'
const keywords =
  'Mango Markets, DEFI, Decentralized Finance, Decentralized Finance, Crypto, ERC20, Ethereum, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SPL Tokens'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mango Markets</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://mango.markets/twitter-card.png?123456789"
        />
      </Head>
      <ThemeProvider defaultTheme="Mango">
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
