export type MarketData = { [key: string]: MarketsDataItem[] }

export type MangoMarketsData = {
  perp: FormattedMarketData[]
  spot: FormattedMarketData[]
}

export type FormattedMarketData = {
  name: string
  data: MarketsDataItem
}

export type MarketsDataItem = {
  base_volume_1h: number | undefined
  base_volume_24h: number | undefined
  change_1h: number | undefined
  change_7d: number | undefined
  change_24h: number | undefined
  change_30d: number | undefined
  last_price: number | undefined
  price_1h: number | undefined
  price_24h: number | undefined
  price_history: { price: number; time: string }[] | undefined
  quote_volume_1h: number | undefined
  quote_volume_24h: number | undefined
}

export type AppStatsData = {
  weekly_active_mango_accounts: number
  perp_volume_usd_24h: number
  num_perp_fills_24h: number
  swap_volume_usd_24h: number
  num_swaps_24h: number
  openbook_volume_usd_24h: number
  num_openbook_fills_24h: number
  open_interest: number
}

type PriceHistoryData = {
  price: number
  time: string
}

export type MangoTokenData = {
  symbol: string
  mint: string
  price: number
  rolling_24hr_change: number
  rolling_24hr_volume: number
  available: number
  borrow_rate: number
  deposit_rate: number
  price_history: PriceHistoryData[]
  listing_time: string
}
