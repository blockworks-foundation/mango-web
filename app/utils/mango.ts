import { FormattedMarketData, MarketData } from '../types'
import { MANGO_DATA_API_URL } from './constants'

export const fetchMarketData = async () => {
  const promises = [
    fetch(`${MANGO_DATA_API_URL}/stats/perp-market-summary`, {
      cache: 'no-store',
    }),
    fetch(`${MANGO_DATA_API_URL}/stats/spot-market-summary`, {
      cache: 'no-store',
    }),
  ]
  try {
    const data = await Promise.all(promises)
    const perpData: MarketData = await data[0].json()
    const spotData: MarketData = await data[1].json()

    let formattedPerpData: FormattedMarketData[] = []
    if (perpData && Object.keys(perpData)?.length) {
      formattedPerpData = Object.entries(perpData)
        .sort((a, b) => {
          const aVolume = a[1][0]?.quote_volume_24h || 0
          const bVolume = b[1][0]?.quote_volume_24h || 0
          return bVolume - aVolume
        })
        .map(([key, value]) => {
          const data = value[0]
          return { name: key, data }
        })
    }

    let formattedSpotData: FormattedMarketData[] = []
    if (spotData && Object.keys(spotData)?.length) {
      formattedSpotData = Object.entries(spotData)
        .sort((a, b) => {
          const aVolume = a[1][0]?.quote_volume_24h || 0
          const bVolume = b[1][0]?.quote_volume_24h || 0
          return bVolume - aVolume
        })
        .map(([key, value]) => {
          const data = value[0]
          return { name: key, data }
        })
    }
    return { perp: formattedPerpData, spot: formattedSpotData }
  } catch (e) {
    console.error('Failed to fetch market data', e)
    return { perp: [], spot: [] }
  }
}
