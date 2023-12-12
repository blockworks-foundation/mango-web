'use client'

import { ReactNode, useEffect, useState } from 'react'
import { CoingeckoData } from '../../../types/coingecko'
import { formatNumericValue, numberCompacter } from '../../../utils/numbers'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { TokenPageWithData } from '../../../../contentful/tokenPage'
import { copyToClipboard } from '../../../utils'
import {
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
dayjs.extend(relativeTime)

const TokenInfo = ({
  coingeckoData,
  tokenPageData,
  volume,
}: {
  coingeckoData: CoingeckoData | undefined
  tokenPageData: TokenPageWithData
  volume: number | undefined
}) => {
  const { mint, tags } = tokenPageData
  const [copied, setCopied] = useState(false)

  const handleCopyMint = (text: string) => {
    copyToClipboard(text)
    setCopied(true)
  }

  useEffect(() => {
    setTimeout(() => setCopied(false), 2000)
  }, [copied])

  return (
    <>
      <h2 className="text-base mb-2">Info and stats</h2>
      <div className="mb-4 space-y-3">
        <KeyValuePair
          label="Mint address"
          value={
            mint ? (
              <button
                className="flex items-center space-x-2 md:hover:text-th-fgd-3 focus:outline-none"
                onClick={() => handleCopyMint(mint)}
              >
                <span>{`${mint.slice(0, 4)}...${mint.slice(-4)}`}</span>
                {copied ? (
                  <CheckCircleIcon className="h-4 w-4 text-th-up" />
                ) : (
                  <DocumentDuplicateIcon className="h-4 w-4 text-th-fgd-3" />
                )}
              </button>
            ) : (
              '–'
            )
          }
        />
        <KeyValuePair
          label="24h Volume"
          value={volume ? `$${numberCompacter.format(volume)}` : '–'}
        />
        <KeyValuePair
          label="Market cap"
          value={`${
            coingeckoData?.market_data?.market_cap?.usd
              ? `$${numberCompacter.format(
                  coingeckoData.market_data.market_cap.usd,
                )}`
              : '–'
          } ${
            coingeckoData?.market_data?.market_cap_rank
              ? `| #${coingeckoData.market_data.market_cap_rank}`
              : ''
          }`}
        />
        <KeyValuePair
          label="Fully diluted value"
          value={
            coingeckoData?.market_data?.fully_diluted_valuation?.usd
              ? `$${numberCompacter.format(
                  coingeckoData.market_data.fully_diluted_valuation.usd,
                )}`
              : '–'
          }
        />
        <KeyValuePair
          label="All-time high"
          value={
            coingeckoData?.market_data?.ath?.usd ? (
              <span className="flex flex-col items-end">
                <span className="text-th-fgd-1 text-sm">
                  {`$${formatNumericValue(coingeckoData.market_data.ath.usd)}`}{' '}
                  {coingeckoData?.market_data?.ath_change_percentage?.usd ? (
                    <span
                      className={
                        coingeckoData.market_data.ath_change_percentage.usd >= 0
                          ? 'text-th-up'
                          : 'text-th-down'
                      }
                    >
                      {formatNumericValue(
                        coingeckoData.market_data.ath_change_percentage.usd,
                        2,
                      )}
                      %
                    </span>
                  ) : null}
                </span>
                {coingeckoData?.market_data?.ath_date?.usd ? (
                  <span className="text-xs text-th-fgd-4 text-right">
                    {dayjs(coingeckoData.market_data.ath_date.usd).format(
                      'DD MMM YYYY',
                    )}{' '}
                    ({dayjs().to(coingeckoData.market_data.ath_date.usd)})
                  </span>
                ) : null}
              </span>
            ) : (
              '–'
            )
          }
        />
        <KeyValuePair
          label="All-time low"
          value={
            coingeckoData?.market_data?.atl?.usd ? (
              <span className="flex flex-col items-end">
                <span className="text-th-fgd-1 text-sm">
                  {`$${formatNumericValue(coingeckoData.market_data.atl.usd)}`}{' '}
                  {coingeckoData?.market_data?.atl_change_percentage?.usd ? (
                    <span
                      className={
                        coingeckoData.market_data.atl_change_percentage.usd >= 0
                          ? 'text-th-up'
                          : 'text-th-down'
                      }
                    >
                      {formatNumericValue(
                        coingeckoData.market_data.atl_change_percentage.usd,
                        2,
                      )}
                      %
                    </span>
                  ) : null}
                </span>
                {coingeckoData?.market_data?.atl_date?.usd ? (
                  <span className="text-xs text-th-fgd-4 text-right">
                    {dayjs(coingeckoData.market_data.atl_date.usd).format(
                      'DD MMM YYYY',
                    )}{' '}
                    ({dayjs().to(coingeckoData.market_data.atl_date.usd)})
                  </span>
                ) : null}
              </span>
            ) : (
              '–'
            )
          }
        />
      </div>
      {tags?.length ? (
        <>
          <h2 className="text-base">Categories</h2>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Link
                className="text-th-fgd-3"
                href={{ pathname: '/explore', query: { category: tag } }}
                key={tag}
                shallow
              >
                <div className="flex items-center justify-center border border-th-fgd-4 rounded-md mt-2 mr-2 px-2 py-0.5">
                  <span className="text-sm">{tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}

export default TokenInfo

const KeyValuePair = ({
  label,
  value,
}: {
  label: string
  value: number | string | ReactNode
}) => {
  return (
    <div className="flex justify-between">
      <p className="text-sm">{label}</p>
      <p className="text-th-fgd-1 text-sm">{value}</p>
    </div>
  )
}
