export const fetchCoingeckoData = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&developer_data=false&sparkline=false&community_data=false
      `,
      {
        next: { revalidate: 120 },
      },
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error('failed to fetch coingecko data', e)
  }
}
