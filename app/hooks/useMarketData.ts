import { useQuery } from '@tanstack/react-query'
import { fetchMarketData } from '../utils/mango'

export default function useMarketsData() {
  return useQuery({
    queryKey: ['market-data'],
    queryFn: fetchMarketData,
  })
}
