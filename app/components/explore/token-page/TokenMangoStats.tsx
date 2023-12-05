'use client'

import Link from 'next/link'
import { TokenPageWithData } from '../../../../contentful/tokenPage'
import {
  FormattedMarketData,
  MangoMarketsData,
  MangoTokenData,
} from '../../../types/mango'
import { numberCompacter } from '../../../utils/numbers'
import KeyValuePairDisplay from './KeyValuePairDisplay'

const TokenMangoStats = ({
  mangoData,
  mangoMarketsData,
  tokenPageData,
}: {
  mangoData: MangoTokenData | undefined
  mangoMarketsData: MangoMarketsData | undefined
  tokenPageData: TokenPageWithData | null
}) => {
  if (!mangoData) return null
  const depositRate = mangoData?.deposit_rate
    ? (mangoData.deposit_rate * 100).toFixed(2)
    : '–'
  const borrowRate = mangoData?.borrow_rate
    ? (mangoData.borrow_rate * 100).toFixed(2)
    : '–'
  const available = mangoData?.available
    ? numberCompacter.format(mangoData.available)
    : '–'
  const availableValue =
    mangoData?.available && mangoData?.price
      ? numberCompacter.format(mangoData.available * mangoData.price)
      : '–'
  const mangoSpotSymbol = tokenPageData?.spotSymbol
  const mangoPerpSymbol = tokenPageData?.perpSymbol
  const listedMarketsForToken: FormattedMarketData[] = []
  if (mangoMarketsData) {
    for (const markets of Object.entries(mangoMarketsData)) {
      for (const market of markets[1]) {
        if (markets[0] === 'spot') {
          const base = market.name.split('/')[0]
          const quote = market.name.split('/')[1]
          if (
            mangoSpotSymbol?.toLowerCase() === base.toLowerCase() ||
            mangoSpotSymbol?.toLowerCase() === quote.toLowerCase()
          ) {
            listedMarketsForToken.push(market)
          }
        }
        if (markets[0] === 'perp') {
          const base = market.name.split('-')[0]
          if (mangoPerpSymbol?.toLowerCase() === base.toLowerCase()) {
            listedMarketsForToken.push(market)
          }
        }
      }
    }
  }
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-6">
      <KeyValuePairDisplay
        label="Deposit rate"
        value={
          <span
            className={
              isNaN(mangoData?.deposit_rate) ? 'text-th-fgd-4' : 'text-th-up'
            }
          >
            {depositRate}%
          </span>
        }
      />
      <KeyValuePairDisplay
        label="Borrow rate"
        value={
          <span
            className={
              isNaN(mangoData?.borrow_rate) ? 'text-th-fgd-4' : 'text-th-down'
            }
          >
            {borrowRate}%
          </span>
        }
      />
      <div>
        <KeyValuePairDisplay
          label="Available"
          value={
            <span>
              {available}{' '}
              <span className="text-sm text-th-fgd-4">${availableValue}</span>
            </span>
          }
        />
      </div>
      {listedMarketsForToken.length ? (
        <div className="col-span-3">
          <p>Listed markets</p>
          <div className="flex flex-wrap">
            {listedMarketsForToken.map((market) => (
              <Link className="text-th-fgd-3" href="#" key={market.name}>
                <div className="flex items-center justify-center border border-th-fgd-4 rounded-md mt-2 mr-2 px-2 py-0.5">
                  <span className="text-sm">{market.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default TokenMangoStats
