import { Metadata } from 'next'
import HomePage from '../components/home/HomePage'
import { fetchAppStatsData, fetchMangoMarketData } from '../utils/mango'

export const metadata: Metadata = {
  title: 'Mango Markets',
  description:
    'A magical new way to interact with DeFi. Groundbreaking safety features designed to keep your funds secure. The easiest way to margin trade any token pair. All powered by flashloans.',
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
