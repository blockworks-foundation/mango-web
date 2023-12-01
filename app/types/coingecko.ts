export interface CoingeckoData {
  market_data: {
    ath: {
      usd: number
    }
    ath_change_percentage: {
      usd: number
    }
    ath_date: {
      usd: string
    }
    atl: {
      usd: number
    }
    atl_change_percentage: {
      usd: number
    }
    atl_date: {
      usd: string
    }
    low_24h: {
      usd: number
    }
    high_24h: {
      usd: number
    }
    market_cap: {
      usd: number
    }
    market_cap_rank: number
    fully_diluted_valuation: {
      usd: number
    }
  }
}
