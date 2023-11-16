export type MarketData = { [key: string]: MarketsDataItem[] }

export type MarketsDataItem = {
  base_volume_1h: number
  base_volume_24h: number
  change_1h: number
  change_7d: number
  change_24h: number
  change_30d: number
  last_price: number
  price_1h: number
  price_24h: number
  price_history: { price: number; time: string }[]
  quote_volume_1h: number
  quote_volume_24h: number
}
