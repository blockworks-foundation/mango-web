export interface BirdeyeOverviewData {
  logoURI: string
  mc: number
  price: number
  priceChange24hPercent: number
  supply: number
}

export interface BirdeyePriceHistoryData {
  address: string
  unixTime: number
  value: number
}
