export const API_URL = 'https://public-api.birdeye.so/'

// Make requests to Birdeye API
export async function makeApiRequest(path: string, chain = 'solana') {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_BIRDEYE_API_KEY!,
      'x-chain': chain,
    },
    next: { revalidate: 120 },
  })
  return response.json()
}
