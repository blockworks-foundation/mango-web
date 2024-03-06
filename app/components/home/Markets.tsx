'use client'
import { useQuery } from '@tanstack/react-query'
import {
  TokenPageWithData,
  fetchTokenPages,
} from '../../../contentful/tokenPage'
import ButtonLink from '../shared/ButtonLink'
import SectionWrapper from '../shared/SectionWrapper'
import HeroStat from './HeroStat'
import {
  fetchAppStatsData,
  fetchMangoMarketData,
  fetchMangoTokensData,
} from '../../utils/mango'
import { useMemo } from 'react'
import SheenLoader from '../shared/SheenLoader'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRightIcon,
  FaceFrownIcon,
  NoSymbolIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
} from '@heroicons/react/20/solid'
import { formatNumericValue, numberCompacter } from '../../utils/numbers'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Markets = () => {
  const { data: markets, isLoading: loadingMarkets } = useQuery({
    queryKey: ['markets-data'],
    queryFn: () => fetchMangoMarketData(),
  })

  const { data: appStatsData, isLoading: loadingAppStatsData } = useQuery({
    queryKey: ['app-stats-data'],
    queryFn: () => fetchAppStatsData(),
  })

  const { data: tokens, isLoading: loadingTokens } = useQuery({
    queryKey: ['cms-tokens-data'],
    queryFn: () => fetchTokenPages({ preview: false }),
  })

  const numberOfMarkets =
    (markets?.spot.length || 0) + (markets?.perp.length || 0)

  const [gainers, losers] = useMemo(() => {
    if (!tokens?.length) return [[], []]
    const sortedTokens = tokens.sort((a, b) => {
      const aChange = a?.birdeyePrices?.length
        ? ((a.birdeyePrices[a.birdeyePrices.length - 1].value -
            a.birdeyePrices[0].value) /
            a.birdeyePrices[0].value) *
          100
        : a?.birdeyeData?.priceChange24hPercent
          ? a.birdeyeData.priceChange24hPercent
          : 0
      const bChange = b?.birdeyePrices?.length
        ? ((b.birdeyePrices[b.birdeyePrices.length - 1].value -
            b.birdeyePrices[0].value) /
            b.birdeyePrices[0].value) *
          100
        : b?.birdeyeData?.priceChange24hPercent
          ? b.birdeyeData.priceChange24hPercent
          : 0
      return bChange - aChange
    })
    const gainers = sortedTokens.slice(0, 5).filter((token) => {
      const { birdeyeData, birdeyePrices } = token
      const change = birdeyePrices?.length
        ? ((birdeyePrices[birdeyePrices.length - 1].value -
            birdeyePrices[0].value) /
            birdeyePrices[0].value) *
          100
        : birdeyeData?.priceChange24hPercent
          ? birdeyeData.priceChange24hPercent
          : 0
      return change > 0
    })
    const losers = sortedTokens.slice(-5).filter((token) => {
      const { birdeyeData, birdeyePrices } = token
      const change = birdeyePrices?.length
        ? ((birdeyePrices[birdeyePrices.length - 1].value -
            birdeyePrices[0].value) /
            birdeyePrices[0].value) *
          100
        : birdeyeData?.priceChange24hPercent
          ? birdeyeData.priceChange24hPercent
          : 0
      return change < 0
    })
    return [gainers, losers.reverse()]
  }, [tokens])

  const formattedAppStatsData = useMemo(() => {
    if (!appStatsData || !Object.keys(appStatsData).length)
      return { totalVol24h: 0, totalTrades24h: 0, weeklyActiveTraders: 0 }
    // volume
    const spotVol24h = appStatsData?.openbook_volume_usd_24h || 0
    const perpVol24h = appStatsData?.perp_volume_usd_24h || 0
    const swapVol24h = appStatsData?.swap_volume_usd_24h || 0
    const totalVol24h = spotVol24h + perpVol24h + swapVol24h

    // number of trades
    const spotTrades24h = appStatsData?.num_openbook_fills_24h || 0
    const perpTrades24h = appStatsData?.num_perp_fills_24h || 0
    const swapTrades24h = appStatsData?.num_swaps_24h || 0
    const totalTrades24h = spotTrades24h + perpTrades24h + swapTrades24h

    const weeklyActiveTraders = appStatsData?.weekly_active_mango_accounts || 0

    return { totalVol24h, totalTrades24h, weeklyActiveTraders }
  }, [appStatsData])
  return (
    <SectionWrapper className="pb-12 md:pb-24 lg:pb-32" noPaddingY>
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <h2>Markets</h2>
        <ButtonLink path="/explore/tokens" linkText="Explore" size="large" />
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        <HeroStat
          title="Markets"
          value={numberOfMarkets.toString()}
          loading={loadingMarkets}
        />
        <HeroStat
          title="Daily Volume"
          tooltipContent="Volume across spot, swap and perp"
          value={`$${numberCompacter.format(
            formattedAppStatsData.totalVol24h,
          )}`}
          loading={loadingAppStatsData}
        />
        <HeroStat
          title="Daily Trades"
          tooltipContent="Number of trades across spot, swap and perp"
          value={formatNumericValue(formattedAppStatsData.totalTrades24h)}
          loading={loadingAppStatsData}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
        <RecentlyListed tokens={tokens} />
        <GainersLosers tokens={gainers} isGainers loading={loadingTokens} />
        <GainersLosers tokens={losers} loading={loadingTokens} />
      </div>
    </SectionWrapper>
  )
}

export default Markets

const RecentlyListed = ({
  tokens,
}: {
  tokens: TokenPageWithData[] | undefined
}) => {
  const { data: mangoTokensData, isLoading: loadingMangoTokensData } = useQuery(
    {
      queryKey: ['recently-listed-data'],
      queryFn: () => fetchMangoTokensData(),
    },
  )
  const recentlyListed = useMemo(() => {
    if (!mangoTokensData?.length) return []
    return mangoTokensData
      .sort((a, b) => {
        const dateA = a?.listing_time
          ? new Date(a.listing_time).getTime()
          : -Infinity
        const dateB = b?.listing_time
          ? new Date(b.listing_time).getTime()
          : -Infinity

        return dateB - dateA
      })
      .slice(0, 5)
  }, [mangoTokensData])

  return (
    <div className="border border-th-bkg-3 rounded-xl p-8 col-span-3 lg:col-span-1">
      <h3 className="mb-3 text-lg">Recently Listed</h3>
      {loadingMangoTokensData ? (
        <div className="space-y-1 mt-2">
          {[...Array(5)].map((x, i) => (
            <SheenLoader className="flex flex-1" key={i}>
              <div className="h-14 w-full bg-th-bkg-2" />
            </SheenLoader>
          ))}
        </div>
      ) : recentlyListed.length ? (
        recentlyListed.map((token) => {
          const { listing_time, symbol } = token
          const tokenPageData = tokens?.find(
            (tkn) => tkn?.symbol?.toLowerCase() === symbol?.toLowerCase(),
          )
          const hasCustomIcon = symbol
            ? CUSTOM_TOKEN_ICONS[symbol.toLowerCase()]
            : false
          const logoPath = hasCustomIcon
            ? `/icons/tokens/${symbol?.toLowerCase()}.svg`
            : ''
          return (
            <Link
              href={
                tokenPageData?.slug
                  ? `/explore/tokens/${tokenPageData.slug}`
                  : '/explore/tokens'
              }
              key={symbol}
              className="flex items-center justify-between py-2 md:hover:bg-th-bkg-2 -mx-3 rounded-lg"
              shallow
            >
              <div className="flex items-center space-x-3 pl-3">
                {logoPath ? (
                  <Image
                    className="rounded-full"
                    src={logoPath}
                    alt="Logo"
                    height={32}
                    width={32}
                  />
                ) : (
                  <QuestionMarkCircleIcon className="h-8 w-8 text-th-fgd-4" />
                )}
                <div>
                  <p className="font-bold text-th-fgd-1">{symbol}</p>
                  {tokenPageData?.tokenName ? (
                    <p className="text-sm">{tokenPageData.tokenName}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center space-x-3 pr-2">
                <div>
                  {listing_time ? (
                    <p className="text-right text-xs text-th-fgd-3">
                      {dayjs().to(listing_time)}
                    </p>
                  ) : null}
                </div>
                <ChevronRightIcon className="h-6 w-6 text-th-fgd-4" />
                {/* <ButtonLink
                      path={`https://app.mango.markets/trade?name=${symbol}/USDC`}
                      linkText="Trade"
                      secondary
                    /> */}
              </div>
            </Link>
          )
        })
      ) : (
        <div className="flex items-center justify-center h-full -mt-8">
          <div className="flex flex-col items-center py-10">
            <NoSymbolIcon className="mb-2 h-8 w-8 text-th-down" />
            <p>Failed to fetch recently listed tokens</p>
          </div>
        </div>
      )}
    </div>
  )
}

const GainersLosers = ({
  tokens,
  loading,
  isGainers,
}: {
  tokens: TokenPageWithData[]
  loading: boolean
  isGainers?: boolean
}) => {
  return (
    <div className="border border-th-bkg-3 rounded-xl p-8 col-span-3 lg:col-span-1">
      <h3 className="mb-3 text-lg">{isGainers ? 'Gainers' : 'Losers'}</h3>
      {loading ? (
        <div className="space-y-1 mt-2">
          {[...Array(5)].map((x, i) => (
            <SheenLoader className="flex flex-1" key={i}>
              <div className="h-14 w-full bg-th-bkg-2" />
            </SheenLoader>
          ))}
        </div>
      ) : tokens.length ? (
        tokens.map((token) => {
          const {
            birdeyeData,
            birdeyePrices,
            symbol,
            slug,
            // spotSymbol,
            tokenName,
          } = token
          const hasCustomIcon = symbol
            ? CUSTOM_TOKEN_ICONS[symbol.toLowerCase()]
            : false
          const logoPath = hasCustomIcon
            ? `/icons/tokens/${symbol?.toLowerCase()}.svg`
            : birdeyeData?.logoURI

          const change = birdeyePrices?.length
            ? ((birdeyePrices[birdeyePrices.length - 1].value -
                birdeyePrices[0].value) /
                birdeyePrices[0].value) *
              100
            : birdeyeData?.priceChange24hPercent
              ? birdeyeData.priceChange24hPercent
              : 0
          return (
            <Link
              href={`/explore/tokens/${slug}`}
              key={slug}
              className="flex items-center justify-between py-2 md:hover:bg-th-bkg-2 -mx-3 rounded-lg"
              shallow
            >
              <div className="flex items-center space-x-3 pl-3">
                {logoPath ? (
                  <Image
                    className="rounded-full"
                    src={logoPath}
                    alt="Logo"
                    height={32}
                    width={32}
                  />
                ) : (
                  <QuestionMarkCircleIcon className="h-8 w-8 text-th-fgd-4" />
                )}
                <div>
                  <p className="font-bold text-th-fgd-1">{symbol}</p>
                  <p className="text-sm">{tokenName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 pr-2">
                <div>
                  <p
                    className={`text-right ${
                      isGainers ? 'text-th-up' : 'text-th-down'
                    }`}
                  >
                    {`${change.toFixed(2)}%`}
                  </p>
                  <p className="text-right text-th-fgd-1 text-sm">
                    {birdeyeData?.price
                      ? `$${formatNumericValue(birdeyeData.price)}`
                      : '–'}
                  </p>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-th-fgd-4" />
                {/* <ButtonLink
                    path={`https://app.mango.markets/trade?name=${spotSymbol}/USDC`}
                    linkText="Trade"
                    secondary
                  /> */}
              </div>
            </Link>
          )
        })
      ) : (
        <div className="flex items-center justify-center h-full -mt-8">
          <div className="flex flex-col items-center py-10">
            {isGainers ? (
              <FaceFrownIcon className="mb-2 h-8 w-8 text-th-active" />
            ) : (
              <RocketLaunchIcon className="mb-2 h-8 w-8 text-th-active" />
            )}
            <p>{`No ${isGainers ? 'gainers' : 'losers'}`}</p>
          </div>
        </div>
      )}
    </div>
  )
}
