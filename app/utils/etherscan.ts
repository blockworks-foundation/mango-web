const BN = require('bn.js')

const fetchEtherscanData = async (mint: string) => {
  try {
    const response = await fetch(
      `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${mint}&apikey=${process
        .env.NEXT_PUBLIC_ETHERSCAN_API_KEY!}`,
      {
        next: { revalidate: 86400 },
      },
    )

    const data = await response.json()
    return data
  } catch (error) {
    console.error('failed to fetch etherscan data', error)
    throw error // rethrow the error for upper-level handling
  }
}

const fetchEthData = async () => {
  try {
    const response = await fetch(
      `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${process
        .env.NEXT_PUBLIC_ETHERSCAN_API_KEY!}`,
      {
        next: { revalidate: 86400 },
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('failed to fetch etherscan data', error)
    throw error // rethrow the error for upper-level handling
  }
}

const calculateCirculatingSupply = (nativeSupply: string, decimals: number) => {
  const uiSupply = new BN(nativeSupply)
  const decimalsBN = new BN(decimals)

  const circSupply = uiSupply.div(new BN(10).pow(decimalsBN))
  return circSupply.toNumber()
}

export const fetchEthCircSupply = async (mint: string, decimals: number) => {
  try {
    const etherscanData = await fetchEtherscanData(mint)
    if (etherscanData?.message === 'OK') {
      const nativeSupply = etherscanData.result
      const circSupply = calculateCirculatingSupply(nativeSupply, decimals)
      return circSupply
    } else {
      console.error('invalid data received from etherscan api')
      return 0
    }
  } catch (error) {
    console.error('failed to fetch ethereum token supply', error)
    return 0
  }
}

export const fetchEthSupply = async () => {
  try {
    const etherscanData = await fetchEthData()
    if (etherscanData?.message === 'OK') {
      const nativeSupply = etherscanData.result
      const circSupply = calculateCirculatingSupply(nativeSupply, 18)
      return circSupply
    } else {
      console.error('invalid data received from eth api')
      return 0
    }
  } catch (error) {
    console.error('failed to fetch ethereum supply', error)
    return 0
  }
}
