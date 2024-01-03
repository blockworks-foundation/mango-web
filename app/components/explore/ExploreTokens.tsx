'use client'

import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ChangeEvent, useMemo, useState } from 'react'
import Input from '../forms/Input'
import TokenTable from './TokenTable'
import TableViewToggle from './TableViewToggle'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'

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

export const sortTokens = (tokens: TokenPageWithData[]) => {
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

const ExploreTokens = ({
  tokens,
  mangoTokensData,
}: {
  tokens: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
}) => {
  const [showTableView, setShowTableView] = useState(true)
  const [searchString, setSearchString] = useState('')

  const filteredTokens = useMemo(() => {
    return searchString ? startSearch(tokens, searchString) : sortTokens(tokens)
  }, [searchString, tokens])

  const handleUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  return (
    <>
      <div
        className={`flex flex-col items-start justify-end h-[264px] bg-[url('/images/new/cube-bg.png')] bg-repeat`}
      >
        <div className={`${MAX_CONTENT_WIDTH} mx-auto`}>
          <div className="bg-[rgba(0,0,0,0.8)] px-3 py-1 mb-6 mx-6 sm:mx-0">
            <h1 className="text-4xl">Explore listed tokens</h1>
          </div>
        </div>
      </div>
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        <div className="mb-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
          <p>{`${tokens?.length} tokens listed on Mango`}</p>
          <div className="flex space-x-2 mb-6 sm:mb-0">
            <div className="relative w-full lg:mb-0 sm:w-44">
              <Input
                heightClass="h-10 pl-8"
                type="text"
                value={searchString}
                onChange={handleUpdateSearch}
              />
              <MagnifyingGlassIcon className="absolute left-2 top-3 h-4 w-4 text-th-fgd-3" />
            </div>
            <TableViewToggle
              showTableView={showTableView}
              setShowTableView={setShowTableView}
            />
          </div>
        </div>
        <TokenTable
          tokens={filteredTokens}
          mangoTokensData={mangoTokensData}
          showTableView={showTableView}
        />
      </div>
    </>
  )
}

export default ExploreTokens
