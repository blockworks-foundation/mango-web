import { useQuery } from '@tanstack/react-query'
import { MANGO_DATA_API_URL } from '../utils/constants'
import { MarketData } from '../types'

const fetchMarketData = async () => {
  const promises = [
    fetch(`${MANGO_DATA_API_URL}/stats/perp-market-summary`),
    fetch(`${MANGO_DATA_API_URL}/stats/spot-market-summary`),
  ]
  try {
    const data = await Promise.all(promises)
    const perpData: MarketData = await data[0].json()
    const spotData: MarketData = await data[1].json()
    return { perpData, spotData }
  } catch (e) {
    console.error('Failed to fetch market data', e)
    return { perpData: undefined, spotData: undefined }
  }
}

export default function useMarketsData() {
  return useQuery({
    queryKey: ['market-data'],
    queryFn: fetchMarketData,
  })
}
