'use client'

import { useQuery } from '@tanstack/react-query'
import { TokenPageWithData } from '../../../../contentful/tokenPage'
import { MangoTokenData } from '../../../types/mango'
import { CUSTOM_TOKEN_ICONS } from '../../../utils/constants'
import Image from 'next/image'
import DailyRange from './DailyRange'
import Links from './Links'
import TokenPriceChart from './TokenPriceChart'
import TokenInfo from './TokenInfo'
import { useEffect, useState } from 'react'
import SheenLoader from '../../shared/SheenLoader'

const fetchCoingeckoData = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&developer_data=false&sparkline=false&community_data=false
        `,
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error('failed to fetch coingecko data', e)
  }
}

const InfoAndStats = ({
  tokenPageData,
  mangoTokenData,
}: {
  tokenPageData: TokenPageWithData
  mangoTokenData: MangoTokenData
}) => {
  const { birdeyeData, coingeckoId, mint, symbol, tokenName } = tokenPageData

  const { data: coingeckoData, isLoading: loadingCoingeckoData } = useQuery({
    queryKey: ['coingecko-data', coingeckoId],
    queryFn: () => fetchCoingeckoData(coingeckoId),
    enabled: !!coingeckoId,
  })

  const hasCustomIcon = Object.keys(CUSTOM_TOKEN_ICONS).find(
    (icon) => icon === mangoTokenData?.symbol?.toLowerCase(),
  )
  const logoPath = hasCustomIcon
    ? `/icons/tokens/${mangoTokenData?.symbol.toLowerCase()}.svg`
    : birdeyeData?.logoURI

  const high24h = coingeckoData?.market_data?.high_24h?.usd
  const low24h = coingeckoData?.market_data?.low_24h?.usd
  const currentPrice = coingeckoData?.market_data?.current_price?.usd
  const lastUpdated = coingeckoData?.last_updated
  const latestChartData =
    currentPrice && lastUpdated
      ? [{ unixTime: new Date(lastUpdated).getTime(), value: currentPrice }]
      : []

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted)
    return (
      <div>
        <div className="flex items-end justify-between mb-6">
          <SheenLoader>
            <div className={`h-16 w-80 rounded-lg bg-th-bkg-2`} />
          </SheenLoader>
          <SheenLoader>
            <div className={`h-8 w-40 rounded-lg bg-th-bkg-2`} />
          </SheenLoader>
        </div>
        <SheenLoader className="flex flex-1">
          <div
            className={`h-[304px] lg:h-[393px] w-full rounded-lg bg-th-bkg-2`}
          />
        </SheenLoader>
      </div>
    )

  return (
    <>
      <div className="pb-6 border-b border-th-bkg-3 flex flex-col-reverse md:flex-row md:items-end md:justify-between">
        <div className="flex items-center space-x-3.5 w-full">
          <Image src={logoPath} alt="Logo" height={56} width={56} />
          <div className="w-full">
            <h1 className="mb-1 text-4xl">
              {tokenName}{' '}
              <span className="text-xl font-body font-normal text-th-fgd-4">
                {symbol}
              </span>
            </h1>
            <DailyRange high={high24h} low={low24h} price={currentPrice} />
          </div>
        </div>
        <div className="flex justify-end">
          <Links birdeyeData={birdeyeData} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 border-b border-th-bkg-3">
        <div className="col-span-12 lg:col-span-8 py-6">
          <TokenPriceChart
            latestChartData={latestChartData}
            loadingLatestChartData={loadingCoingeckoData}
            mint={mint}
          />
        </div>
        <div className="col-span-12 lg:col-span-4 bg-th-bkg-2 p-6 rounded-xl lg:rounded-none">
          <TokenInfo
            coingeckoData={coingeckoData}
            loadingCoingeckoData={loadingCoingeckoData}
            tokenPageData={tokenPageData}
            birdeyeData={birdeyeData}
          />
        </div>
      </div>
    </>
  )
}

export default InfoAndStats
