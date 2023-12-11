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
import ButtonLink from '../../shared/ButtonLink'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

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
  let usdcSpotMarket
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
    usdcSpotMarket = mangoMarketsData.spot.find(
      (market) => market.name.split('/')[1] === 'USDC',
    )
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
              <Link
                className="text-th-fgd-3"
                href={`https://app.mango.markets/trade?name=${market.name}`}
                key={market.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex items-center justify-center border border-th-fgd-4 rounded-md mt-2 mr-2 px-2 py-0.5">
                  <span className="text-sm">{market.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      <div className="flex space-x-4 mt-4">
        <ButtonLink
          path={`https://app.mango.markets/swap?in=USDC&out=${mangoData?.symbol}`}
          linkText={
            <div className="flex items-center space-x-2">
              <span className="whitespace-nowrap">{`Swap ${tokenPageData?.symbol}`}</span>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0" />
            </div>
          }
          target="_blank"
        />
        {usdcSpotMarket ? (
          <ButtonLink
            path={`https://app.mango.markets/trade?name=${usdcSpotMarket.name}`}
            linkText={
              <div className="flex items-center space-x-2">
                <span className="whitespace-nowrap">{`Trade ${tokenPageData?.symbol}`}</span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0" />
              </div>
            }
            target="_blank"
          />
        ) : null}
      </div>
    </div>
  )
}

export default TokenMangoStats
