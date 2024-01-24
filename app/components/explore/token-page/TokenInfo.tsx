'use client'

import { ReactNode, useEffect, useState } from 'react'
import { CoingeckoData } from '../../../types/coingecko'
import { formatNumericValue, numberCompacter } from '../../../utils/numbers'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { TokenPageWithData } from '../../../../contentful/tokenPage'
import { copyToClipboard, tagToSlug } from '../../../utils'
import {
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import SheenLoader from '../../shared/SheenLoader'
import Solana from '../../icons/Solana'
dayjs.extend(relativeTime)

const TokenInfo = ({
  coingeckoData,
  loadingCoingeckoData,
  tokenPageData,
}: {
  coingeckoData: CoingeckoData | undefined
  loadingCoingeckoData: boolean
  tokenPageData: TokenPageWithData
}) => {
  const { mint, tags, birdeyeData, birdeyeEthData } = tokenPageData
  const [copied, setCopied] = useState(false)

  let fdv = 0

  if (birdeyeData?.mc) {
    fdv = birdeyeData.mc + (birdeyeEthData?.mc || 0)
  }

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
                className="flex items-center space-x-1.5 md:hover:text-th-fgd-3 focus:outline-none"
                onClick={() => handleCopyMint(mint)}
              >
                <Solana className="h-3.5 w-3.5" />
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
          value={
            birdeyeData?.v24hUSD
              ? `$${numberCompacter.format(birdeyeData?.v24hUSD)}`
              : '–'
          }
        />
        <KeyValuePair
          label="Market cap"
          value={
            loadingCoingeckoData ? (
              <DataLoader />
            ) : (
              `${
                coingeckoData?.market_data?.market_cap?.usd
                  ? `$${numberCompacter.format(
                      coingeckoData.market_data.market_cap.usd,
                    )}`
                  : '–'
              } ${
                coingeckoData?.market_data?.market_cap_rank
                  ? `| #${coingeckoData.market_data.market_cap_rank}`
                  : ''
              }`
            )
          }
        />
        <KeyValuePair
          label="Fully diluted value"
          value={
            fdv ? (
              <div className="flex items-center">
                {birdeyeEthData && !birdeyeEthData?.mc ? (
                  <Solana className="h-3.5 w-3.5 mr-1.5" />
                ) : null}
                <span>{`$${numberCompacter.format(fdv)}`}</span>
              </div>
            ) : coingeckoData?.market_data?.fully_diluted_valuation?.usd ? (
              `$${numberCompacter.format(
                coingeckoData.market_data.fully_diluted_valuation.usd,
              )}`
            ) : (
              '–'
            )
          }
        />
        <KeyValuePair
          label="All-time high"
          value={
            loadingCoingeckoData ? (
              <div className="space-y-0.5 flex flex-col items-end">
                <DataLoader />
                <DataLoader small />
              </div>
            ) : coingeckoData?.market_data?.ath?.usd ? (
              <span className="flex flex-col items-end">
                <span className="text-th-fgd-1 text-sm text-right">
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
            loadingCoingeckoData ? (
              <div className="space-y-0.5 flex flex-col items-end">
                <DataLoader />
                <DataLoader small />
              </div>
            ) : coingeckoData?.market_data?.atl?.usd ? (
              <span className="flex flex-col items-end">
                <span className="text-th-fgd-1 text-sm text-right">
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
            {tags.map((tag) => {
              const slug = tagToSlug(tag)
              return (
                <Link
                  className="text-th-fgd-3"
                  href={`/explore/categories/${slug}`}
                  key={tag}
                  shallow
                >
                  <div className="flex items-center justify-center border border-th-fgd-4 rounded-md mt-2 mr-2 px-2 py-0.5">
                    <span className="text-sm">{tag}</span>
                  </div>
                </Link>
              )
            })}
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
      <span className="text-th-fgd-1 text-sm">{value}</span>
    </div>
  )
}

const DataLoader = ({ small }: { small?: boolean }) => {
  return (
    <SheenLoader>
      <div className={`${small ? 'h-3 w-32' : 'h-5 w-24'} bg-th-bkg-4`} />
    </SheenLoader>
  )
}
