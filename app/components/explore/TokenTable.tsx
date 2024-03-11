import Image from 'next/image'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import { Table, Td, Th, TrBody, TrHead } from '../shared/TableElements'
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid'
import { formatNumericValue, numberCompacter } from '../../utils/numbers'
import SimpleAreaChart from '../shared/SimpleAreaChart'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { useCallback } from 'react'
import { MangoTokenData } from '../../types/mango'
import { BirdeyePriceHistoryData } from '../../types/birdeye'
import NoResults from './NoResults'
import Solana from '../icons/Solana'
import Link from 'next/link'
import TokenCard from './TokenCard'

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
  ethMint: string | undefined
  symbol: string
  slug: string
  tags: string[]
  ethCircSupply: number | undefined
}

const TokenTable = ({
  tokens,
  mangoTokensData,
}: {
  tokens: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
}) => {
  const formattedTableData = useCallback(() => {
    const formatted: FormattedTableData[] = []
    for (const token of tokens) {
      const {
        tokenName,
        slug,
        symbol,
        birdeyeData,
        ethCircSupply,
        mint,
        ethMint,
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
        fdv = birdeyeData.mc
      }
      if (ethCircSupply) {
        fdv = fdv + ethCircSupply * price
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
        ethMint,
        symbol,
        slug,
        tags,
        ethCircSupply,
      }
      formatted.push(data)
    }
    return formatted
  }, [tokens, mangoTokensData])

  return formattedTableData().length ? (
    <>
      <div className="hidden lg:block">
        <Table>
          <thead>
            <TrHead>
              <Th className="text-left">Token</Th>
              <Th className="text-right">Price</Th>
              <Th className="text-right">24h chart</Th>
              <Th className="text-right">24h Change</Th>
              <Th className="text-right">24h Volume</Th>
              <Th className="text-right">FDV</Th>
              <Th />
            </TrHead>
          </thead>
          <tbody>
            {formattedTableData().map((token) => {
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
                ethCircSupply,
                ethMint,
              } = token
              const hasCustomIcon = mangoSymbol
                ? CUSTOM_TOKEN_ICONS[mangoSymbol.toLowerCase()]
                : false
              const logoPath = hasCustomIcon
                ? `/icons/tokens/${mangoSymbol?.toLowerCase()}.svg`
                : logoURI

              return (
                <TrBody className="relative hover:bg-th-bkg-2" key={slug}>
                  <Td>
                    <div className="flex items-center space-x-3">
                      {logoPath ? (
                        <Image
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
                      {ethMint && !ethCircSupply ? (
                        <Solana className="h-3.5 w-3.5 mr-1.5" />
                      ) : null}
                      <p>{fdv ? `$${numberCompacter.format(fdv)}` : '–'}</p>
                    </div>
                  </Td>
                  <Td className="absolute w-full z-20 h-[69px] left-0 pt-0 pb-0 last:pr-2">
                    <Link
                      className="h-[69px] flex items-center justify-end"
                      href={`/explore/tokens/${slug}`}
                    >
                      <ChevronRightIcon className="h-6 w-6 text-th-fgd-4" />
                    </Link>
                  </Td>
                </TrBody>
              )
            })}
          </tbody>
        </Table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
        {formattedTableData().map((data) => (
          <TokenCard token={data} key={data.slug} />
        ))}
      </div>
    </>
  ) : (
    <NoResults message="No tokens found..." />
  )
}

export default TokenTable
