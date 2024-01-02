import { Metadata } from 'next'
import HomePage from '../components/home/HomePage'
import { fetchAppStatsData, fetchMangoMarketData } from '../utils/mango'

const metaTitle = 'Mango Markets | Safer. Smarter. Faster.'
const metaDescription =
  'A magical DeFi experience powered by flashloans. Cross-margin trading with multi-collateral and groudbreaking safety features.'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: 'https://mango.markets',
    siteName: 'Mango Markets',
    images: [
      {
        url: 'https://mango.markets/twitter-card.png',
        width: 1200,
        height: 600,
        alt: metaTitle,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

async function Page() {
  const appStatsData = await fetchAppStatsData()
  const markets = await fetchMangoMarketData()
  const numberOfMarkets =
    (markets?.spot.length || 0) + (markets?.perp.length || 0)
  return (
    <HomePage appStatsData={appStatsData} numberOfMarkets={numberOfMarkets} />
  )
}

export default Page
