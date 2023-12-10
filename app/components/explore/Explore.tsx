'use client'

import Image from 'next/image'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import {
  SortableColumnHeader,
  Table,
  Td,
  Th,
  TrBody,
  TrHead,
} from '../shared/TableElements'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import { useRouter, useSearchParams } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { formatNumericValue, numberCompacter } from '../../utils/numbers'
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid'
import { useCallback, useMemo } from 'react'
import { useSortableData } from '../../hooks/useSortableData'

type FormattedTableData = {
  change: number | undefined
  fdv: number
  logoURI: string | undefined
  price: number
  tokenName: string
  volume: number
  mangoSymbol: string | undefined
  mint: string
  symbol: string
  slug: string
}

export const goToTokenPage = (slug: string, router: AppRouterInstance) => {
  router.push(`/explore/${slug}`, { shallow: true })
}

const Explore = ({
  tokens,
  mangoTokensData,
}: {
  tokens: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const filteredTokens = useMemo(() => {
    if (!category) return tokens
    const filteredByCategory = tokens.filter((token) =>
      token.tags.includes(category),
    )
    return filteredByCategory
  }, [category, tokens])

  const formattedTableData = useCallback(() => {
    const formatted: FormattedTableData[] = []
    for (const token of filteredTokens) {
      const { tokenName, slug, symbol, birdeyeData, mint } = token
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
      const change = birdeyeData?.priceChange24hPercent
        ? birdeyeData.priceChange24hPercent
        : mangoTokenData?.rolling_24hr_change
      const volume = birdeyeData?.v24hUSD
        ? birdeyeData.v24hUSD
        : mangoTokenData?.rolling_24hr_volume
          ? mangoTokenData.rolling_24hr_volume
          : 0
      const fdv = birdeyeData?.mc ? birdeyeData.mc : 0
      const logoURI = birdeyeData?.logoURI

      const data = {
        tokenName,
        change,
        price,
        volume,
        fdv,
        logoURI,
        mangoSymbol,
        mint,
        symbol,
        slug,
      }
      formatted.push(data)
    }
    return formatted
  }, [filteredTokens, mangoTokensData])

  const {
    items: tableData,
    requestSort,
    sortConfig,
  } = useSortableData(formattedTableData())

  return (
    <>
      <h1 className="text-4xl mb-10">{`Explore ${
        category ? category : 'listed tokens'
      }`}</h1>
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
              price,
              volume,
              fdv,
              mangoSymbol,
              logoURI,
              symbol,
              slug,
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
                      <Image src={logoPath} alt="Logo" height={32} width={32} />
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
                  <p className="text-right">
                    {fdv ? `$${numberCompacter.format(fdv)}` : '–'}
                  </p>
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
    </>
  )
}

export default Explore
