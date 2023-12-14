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
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  TableCellsIcon,
} from '@heroicons/react/20/solid'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useSortableData } from '../../hooks/useSortableData'
import Input from '../forms/Input'
import Select from '../forms/Select'
import { BirdeyePriceHistoryData } from '../../types/birdeye'
import SimpleAreaChart from '../shared/SimpleAreaChart'
import { useViewport } from '../../hooks/useViewport'
import TokenCard from './TokenCard'
import DataDisclaimer from './DataDisclaimer'

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
}

export const goToTokenPage = (slug: string, router: AppRouterInstance) => {
  router.push(`/explore/${slug}`)
}

const generateSearchTerm = (item: TokenPageWithData, searchValue: string) => {
  const normalizedSearchValue = searchValue.toLowerCase()
  const nameValue = item.tokenName.toLowerCase()
  const symbolValue = item.symbol.toLowerCase()

  const isMatchingName = nameValue.includes(normalizedSearchValue)
  const isMatchingSymbol = symbolValue.includes(normalizedSearchValue)
  const matchingNamePercent = isMatchingName
    ? normalizedSearchValue.length / item.tokenName.length
    : 0
  const matchingSymbolPercent = isMatchingSymbol
    ? normalizedSearchValue.length / item.symbol.length
    : 0

  const matchingPercent = Math.max(matchingNamePercent, matchingSymbolPercent)

  const matchingIdx =
    matchingPercent === matchingNamePercent
      ? nameValue.indexOf(normalizedSearchValue)
      : symbolValue.indexOf(normalizedSearchValue)

  return {
    token: item,
    matchingIdx,
    matchingPercent,
  }
}

const startSearch = (items: TokenPageWithData[], searchValue: string) => {
  return items
    .map((item) => generateSearchTerm(item, searchValue))
    .filter((item) => item.matchingIdx >= 0)
    .sort((i1, i2) => i1.matchingIdx - i2.matchingIdx)
    .sort((i1, i2) => i2.matchingPercent - i1.matchingPercent)
    .map((item) => item.token)
}

const sortTokens = (tokens: TokenPageWithData[]) => {
  return tokens.sort((a, b) => {
    const aValue = a?.birdeyeData?.v24hUSD
    const bValue = b?.birdeyeData?.v24hUSD

    if (aValue === undefined && bValue === undefined) {
      return 0
    } else if (aValue === undefined) {
      return 1
    } else if (bValue === undefined) {
      return -1
    } else {
      return bValue - aValue
    }
  })
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
  const category = searchParams?.get('category')
  const { isDesktop } = useViewport()
  const [showTableView, setShowTableView] = useState(true)
  const [searchString, setSearchString] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(category || 'All')

  useEffect(() => {
    if (!category) {
      setSelectedCategory('All')
    }
  }, [category])

  const categories = useMemo(() => {
    if (!tokens?.length) return []
    const categories: string[] = []
    for (const token of tokens) {
      for (const tag of token.tags) {
        if (!categories.includes(tag)) {
          categories.push(tag)
        }
      }
    }
    return categories.sort((a, b) => a.localeCompare(b))
  }, [tokens])

  const filteredTokens = useMemo(() => {
    if (selectedCategory === 'All')
      return searchString
        ? startSearch(tokens, searchString)
        : sortTokens(tokens)
    const filteredByCategory = tokens.filter(
      (token) => token?.tags.includes(selectedCategory),
    )
    return searchString
      ? startSearch(filteredByCategory, searchString)
      : sortTokens(filteredByCategory)
  }, [selectedCategory, searchString, tokens])

  const handleUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

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
      const chartData = token.birdeyePrices

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
      }
      formatted.push(data)
    }
    return formatted
  }, [filteredTokens, mangoTokensData])

  const handleSetCategory = useCallback(
    (cat: string) => {
      setSelectedCategory(cat)
      if (category && cat === 'All') {
        router.replace('/explore', { shallow: true })
      }
    },
    [category],
  )

  const {
    items: tableData,
    requestSort,
    sortConfig,
  } = useSortableData(formattedTableData())

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-4xl mb-4 lg:mb-0">{`Explore ${
          selectedCategory !== 'All' ? selectedCategory : 'listed tokens'
        }`}</h1>
        <div className="flex space-x-2">
          <Select
            value={selectedCategory}
            onChange={(cat) => handleSetCategory(cat)}
            className="w-1/2 lg:w-44 h-10 text-left whitespace-nowrap"
          >
            <>
              <Select.Option value="All">All</Select.Option>
              {categories.map((cat) => (
                <Select.Option key={cat} value={cat}>
                  {cat}
                </Select.Option>
              ))}
            </>
          </Select>
          <div className="relative w-1/2 lg:mb-0 lg:w-44">
            <Input
              heightClass="h-10 pl-8"
              type="text"
              value={searchString}
              onChange={handleUpdateSearch}
            />
            <MagnifyingGlassIcon className="absolute left-2 top-3 h-4 w-4 text-th-fgd-3" />
          </div>
          {isDesktop ? (
            <div className="flex h-10">
              <button
                className={`flex w-10 items-center justify-center rounded-l-md border border-th-input-border border-r-0 focus:outline-none md:hover:bg-th-bkg-3 ${
                  showTableView ? 'bg-th-bkg-3 text-th-active' : 'text-th-fgd-3'
                }`}
                onClick={() => setShowTableView(!showTableView)}
              >
                <TableCellsIcon className="h-5 w-5" />
              </button>
              <button
                className={`flex w-10 items-center justify-center rounded-r-md border border-th-input-border border-l-0 focus:outline-none md:hover:bg-th-bkg-3 ${
                  !showTableView
                    ? 'bg-th-bkg-3 text-th-active'
                    : 'text-th-fgd-3'
                }`}
                onClick={() => setShowTableView(!showTableView)}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {tableData.length ? (
        isDesktop && showTableView ? (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tableData.map((data) => (
              <TokenCard token={data} key={data.slug} />
            ))}
          </div>
        )
      ) : (
        <NoTokenResults />
      )}
      <DataDisclaimer />
    </>
  )
}

export default Explore

const NoTokenResults = () => {
  return (
    <div className="border border-th-bkg-3 p-6 rounded-xl flex items-center justify-center">
      <p>No tokens found...</p>
    </div>
  )
}
