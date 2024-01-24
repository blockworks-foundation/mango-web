'use client'

import Image from 'next/image'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import {
  SortableColumnHeader,
  Table,
  Td,
  Th,
  TrBody,
  TrHead,
} from '../shared/TableElements'
import TokenCard from './TokenCard'
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid'
import { formatNumericValue, numberCompacter } from '../../utils/numbers'
import SimpleAreaChart from '../shared/SimpleAreaChart'
import { useSortableData } from '../../hooks/useSortableData'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { useCallback } from 'react'
import { MangoTokenData } from '../../types/mango'
import { useViewport } from '../../hooks/useViewport'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import {
  BirdeyeOverviewData,
  BirdeyePriceHistoryData,
} from '../../types/birdeye'
import SheenLoader from '../shared/SheenLoader'
import NoResults from './NoResults'
import Solana from '../icons/Solana'

export type FormattedTableData = {
  change: number | undefined
  chartData: BirdeyePriceHistoryData[] | undefined
  fdv: number
  logoURI: string | undefined
  price: number
  tokenName: string
  volume: number
  mangoSymbol: string | undefined
  mint: string
  symbol: string
  slug: string
  tags: string[]
  birdeyeEthData: BirdeyeOverviewData | undefined
}

const goToTokenPage = (slug: string, router: AppRouterInstance) => {
  router.push(`/explore/tokens/${slug}`)
}

const TokenTable = ({
  tokens,
  mangoTokensData,
  showTableView,
}: {
  tokens: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
  showTableView: boolean
}) => {
  const router = useRouter()
  const { isDesktop, width } = useViewport()

  const formattedTableData = useCallback(() => {
    const formatted: FormattedTableData[] = []
    for (const token of tokens) {
      const {
        tokenName,
        slug,
        symbol,
        birdeyeData,
        birdeyeEthData,
        mint,
        tags,
      } = token
      const mangoTokenData: MangoTokenData | undefined = mangoTokensData.find(
        (mangoToken) => mangoToken?.mint === mint,
      )
      let mangoSymbol
      if (mangoTokenData) {
        mangoSymbol = mangoTokenData.symbol
      }
      const price = birdeyeData?.price
        ? birdeyeData.price
        : mangoTokenData?.price
          ? mangoTokenData.price
          : 0
      const volume = birdeyeData?.v24hUSD
        ? birdeyeData.v24hUSD
        : mangoTokenData?.rolling_24hr_volume
          ? mangoTokenData.rolling_24hr_volume
          : 0
      let fdv = 0

      if (birdeyeData?.mc) {
        fdv = birdeyeData.mc + (birdeyeEthData?.mc || 0)
      }

      const logoURI = birdeyeData?.logoURI
      const chartData = token.birdeyePrices

      const change = chartData?.length
        ? ((chartData[chartData.length - 1].value - chartData[0].value) /
            chartData[0].value) *
          100
        : birdeyeData?.priceChange24hPercent
          ? birdeyeData.priceChange24hPercent
          : mangoTokenData?.rolling_24hr_change

      const data = {
        tokenName,
        change,
        chartData,
        price,
        volume,
        fdv,
        logoURI,
        mangoSymbol,
        mint,
        symbol,
        slug,
        tags,
        birdeyeEthData,
      }
      formatted.push(data)
    }
    return formatted
  }, [tokens, mangoTokensData])

  const {
    items: tableData,
    requestSort,
    sortConfig,
  } = useSortableData(formattedTableData())

  return tableData.length ? (
    !width ? (
      <SheenLoader className="flex flex-1">
        <div className={`h-96 w-full rounded-lg bg-th-bkg-2`} />
      </SheenLoader>
    ) : isDesktop && showTableView ? (
      <Table>
        <thead>
          <TrHead>
            <Th className="text-left">
              <SortableColumnHeader
                sortKey="tokenName"
                sort={() => requestSort('tokenName')}
                sortConfig={sortConfig}
                title="Token"
              />
            </Th>
            <Th>
              <div className="flex justify-end">
                <SortableColumnHeader
                  sortKey="price"
                  sort={() => requestSort('price')}
                  sortConfig={sortConfig}
                  title="Price"
                />
              </div>
            </Th>
            <Th className="text-right">24h chart</Th>
            <Th>
              <div className="flex justify-end">
                <SortableColumnHeader
                  sortKey="change"
                  sort={() => requestSort('change')}
                  sortConfig={sortConfig}
                  title="24h Change"
                />
              </div>
            </Th>
            <Th>
              <div className="flex justify-end">
                <SortableColumnHeader
                  sortKey="volume"
                  sort={() => requestSort('volume')}
                  sortConfig={sortConfig}
                  title="24h Volume"
                />
              </div>
            </Th>
            <Th>
              <div className="flex justify-end">
                <SortableColumnHeader
                  sortKey="fdv"
                  sort={() => requestSort('fdv')}
                  sortConfig={sortConfig}
                  title="FDV"
                />
              </div>
            </Th>
            <Th />
          </TrHead>
        </thead>
        <tbody>
          {tableData.map((token) => {
            const {
              tokenName,
              change,
              chartData,
              price,
              volume,
              fdv,
              mangoSymbol,
              logoURI,
              symbol,
              slug,
              birdeyeEthData,
            } = token
            const hasCustomIcon = mangoSymbol
              ? CUSTOM_TOKEN_ICONS[mangoSymbol.toLowerCase()]
              : false
            const logoPath = hasCustomIcon
              ? `/icons/tokens/${mangoSymbol?.toLowerCase()}.svg`
              : logoURI

            return (
              <TrBody
                key={slug}
                className="default-transition md:hover:cursor-pointer md:hover:bg-th-bkg-2"
                onClick={() => goToTokenPage(slug, router)}
              >
                <Td>
                  <div className="flex items-center space-x-3">
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
                      <p>{tokenName}</p>
                      <p className="text-sm text-th-fgd-4">
                        {symbol || mangoSymbol}
                      </p>
                    </div>
                  </div>
                </Td>
                <Td>
                  <p className="text-right">
                    {price ? `$${formatNumericValue(price)}` : '–'}
                  </p>
                </Td>
                <Td>
                  <div className="flex justify-end">
                    {chartData && chartData.length ? (
                      <div className="h-9 w-20">
                        <SimpleAreaChart
                          color={
                            chartData[0].value <=
                            chartData[chartData.length - 1].value
                              ? 'var(--up)'
                              : 'var(--down)'
                          }
                          data={chartData}
                          name={tokenName}
                          xKey="unixTime"
                          yKey="value"
                        />
                      </div>
                    ) : (
                      <p className="text-th-fgd-4">Unavailable</p>
                    )}
                  </div>
                </Td>
                <Td>
                  <p
                    className={`text-right ${
                      !change
                        ? 'text-th-fgd-3'
                        : change > 0
                          ? 'text-th-up'
                          : change < 0
                            ? 'text-th-down'
                            : 'text-th-fgd-3'
                    }`}
                  >
                    {change ? `${change.toFixed(2)}%` : '–'}
                  </p>
                </Td>
                <Td>
                  <p className="text-right">
                    {volume ? `$${numberCompacter.format(volume)}` : '–'}
                  </p>
                </Td>
                <Td>
                  <div className="flex items-center justify-end">
                    {birdeyeEthData && !birdeyeEthData?.mc ? (
                      <Solana className="h-3.5 w-3.5 mr-1.5" />
                    ) : null}
                    <p>{fdv ? `$${numberCompacter.format(fdv)}` : '–'}</p>
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center justify-end">
                    <ChevronRightIcon className="h-5 w-5 text-th-fgd-4" />
                  </div>
                </Td>
              </TrBody>
            )
          })}
        </tbody>
      </Table>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tableData.map((data) => (
          <TokenCard token={data} key={data.slug} />
        ))}
      </div>
    )
  ) : (
    <NoResults message="No tokens found..." />
  )
}

export default TokenTable
