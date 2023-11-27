import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PlausibleProvider from 'next-plausible'

const metaTitle = 'Mango Markets – Safer. Smarter. Faster.'
const metaDescription =
  'A magical new way to interact with DeFi. Groundbreaking safety features designed to keep your funds secure. The easiest way to margin trade any token pair. All powered by flashloans.'
const keywords =
  'Mango Markets, DEFI, Decentralized Finance, Decentralized Finance, Crypto, ERC20, Ethereum, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SPL Tokens'

// init react-query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 10,
      staleTime: 1000 * 60,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
})

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mango Markets</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="Mango">
          <PlausibleProvider
            domain="mango.markets"
            customDomain="https://pl.mngo.cloud"
            selfHosted={true}
            trackOutboundLinks={true}
          >
            <LayoutWrapper>
              <Component {...pageProps} />
            </LayoutWrapper>
          </PlausibleProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(App)
