import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'

function App({ Component, pageProps }) {
  const title = 'Mango Pay'
  const description = 'Send money globally, instantly with Mango Pay'

  const keywords =
    'Mango Pay, DEX, DEFI, Decentralized Finance, Decentralised Finance, Crypto, ERC20, Ethereum, Decentralize, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SPL Tokens'

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
        <meta name="twitter:title" content="Mango Pay" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/socials/social-image.png?1234567"
        />
        <meta name="theme-color" content="#141414" />
      </Head>
      <ThemeProvider defaultTheme="Mango">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
