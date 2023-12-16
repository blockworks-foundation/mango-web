'use client'

import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  TableCellsIcon,
} from '@heroicons/react/20/solid'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import Input from '../forms/Input'
import { useViewport } from '../../hooks/useViewport'
import DataDisclaimer from './DataDisclaimer'
import TokenTable from './TokenTable'
import CategorySwitcher from './CategorySwitcher'

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
  const { isDesktop } = useViewport()
  const [showTableView, setShowTableView] = useState(true)
  const [searchString, setSearchString] = useState('')

  const filteredTokens = useMemo(() => {
    return searchString ? startSearch(tokens, searchString) : sortTokens(tokens)
  }, [searchString, tokens])

  const handleUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-4xl mb-4 lg:mb-0">Explore listed tokens</h1>
        <div className="flex space-x-2">
          <CategorySwitcher tokens={tokens} />
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
      <TokenTable
        tokens={filteredTokens}
        mangoTokensData={mangoTokensData}
        showTableView={showTableView}
      />
      <DataDisclaimer />
    </>
  )
}

export default Explore
