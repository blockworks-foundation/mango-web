export interface BirdeyeOverviewData {
  extensions: {
    website: string
    twitter: string
    discord: string
    telegram: string
  }
  decimals: number
  liquidity: number
  logoURI: string
  numberMarkets: number
  mc: number
  price: number
  priceChange24hPercent: number
  supply: number
  v24hUSD: number
}

export interface BirdeyePriceHistoryResponse {
  data: {
    items: BirdeyePriceHistoryData[]
  }
  success: boolean
}

export interface BirdeyePriceHistoryData {
  address: string
  unixTime: number
  value: number
}
