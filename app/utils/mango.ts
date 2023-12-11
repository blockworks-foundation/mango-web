import { FormattedMarketData, MarketData } from '../types/mango'
import { MANGO_DATA_API_URL } from './constants'

export const fetchAppStatsData = async () => {
  try {
    const response = await fetch(
      `${MANGO_DATA_API_URL}/stats/mango-protocol-summary`,
      {
        next: { revalidate: 120 },
      },
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error('failed to fetch mango app stats data', e)
    return undefined
  }
}

export const fetchMangoTokensData = async () => {
  try {
    const response = await fetch(`${MANGO_DATA_API_URL}/stats/tokens-summary`, {
      next: { revalidate: 120 },
    })
    const data = await response.json()
    if (data && data?.length) {
      return data
    } else return []
  } catch (e) {
    console.error('Failed to fetch mango token data', e)
    return []
  }
}

export const fetchMangoTokenData = async (mint: string) => {
  try {
    const response = await fetch(
      `${MANGO_DATA_API_URL}/stats/token-mint-summary?token-mint=${mint}`,
      { next: { revalidate: 120 } },
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error('Failed to fetch mango token data', e)
    return undefined
  }
}

export const fetchMangoMarketData = async () => {
  const promises = [
    fetch(`${MANGO_DATA_API_URL}/stats/perp-market-summary`, {
      next: { revalidate: 120 },
    }),
    fetch(`${MANGO_DATA_API_URL}/stats/spot-market-summary`, {
      next: { revalidate: 120 },
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
    console.error('Failed to fetch mango market data', e)
    return { perp: [], spot: [] }
  }
}
