import { useQuery } from '@tanstack/react-query'
import { fetchMangoMarketData } from '../utils/mango'

export default function useMarketsData() {
  return useQuery({
    queryKey: ['market-data'],
    queryFn: fetchMangoMarketData,
  })
}
