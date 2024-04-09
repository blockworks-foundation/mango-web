'use client'
import { ChangeEvent, useMemo, useState } from 'react'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import Input from '../forms/Input'
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

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

const TokensFilter = ({ tokens }: { tokens: TokenPageWithData[] }) => {
  const [searchString, setSearchString] = useState('')

  const filteredTokens = useMemo(() => {
    return searchString ? startSearch(tokens, searchString) : []
  }, [searchString, tokens])

  const handleUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }
  return (
    <div className="relative w-full lg:mb-0 sm:w-44">
      <Input
        heightClass="h-10 pl-8"
        type="text"
        value={searchString}
        onChange={handleUpdateSearch}
      />
      <MagnifyingGlassIcon className="absolute left-2 top-3 h-4 w-4 text-th-fgd-3" />
      {filteredTokens.length && searchString.length > 1 ? (
        <div className="absolute z-30 top-12 bg-th-bkg-2 rounded-lg p-4 space-y-3 w-full">
          {filteredTokens.map((token) => (
            <Link
              className="flex items-center justify-between text-th-fgd-2 md:hover:text-th-active"
              key={token.slug}
              href={`/explore/tokens/${token.slug}`}
            >
              <div className="flex-col flex">
                <span className="text-sm">{token.symbol}</span>
                <span className="text-xs text-th-fgd-4">{token.tokenName}</span>
              </div>
              <ChevronRightIcon className="h-5 w-5 text-th-fgd-4" />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default TokensFilter
