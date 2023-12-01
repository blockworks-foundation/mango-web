'use client'

import { ReactNode } from 'react'
import { CoingeckoData } from '../../../types/coingecko'
import { numberCompacter } from '../../../utils/numbers'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const MarketStats = ({
  coingeckoData,
  volume,
}: {
  coingeckoData: CoingeckoData | undefined
  volume: number | undefined
}) => {
  return (
    <>
      <KeyValuePair
        label="24h Volume"
        value={volume ? `$${numberCompacter.format(volume)}` : '–'}
      />
      <KeyValuePair
        label="Market cap"
        value={
          coingeckoData?.market_data?.market_cap?.usd
            ? `$${numberCompacter.format(
                coingeckoData.market_data.market_cap.usd,
              )}`
            : '–'
        }
      />
      <KeyValuePair
        label="Market cap rank"
        value={
          coingeckoData?.market_data?.market_cap_rank
            ? `#${coingeckoData.market_data.market_cap_rank}`
            : '–'
        }
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
                {coingeckoData.market_data.ath.usd}{' '}
                {coingeckoData?.market_data?.ath_change_percentage?.usd ? (
                  <span
                    className={
                      coingeckoData.market_data.ath_change_percentage.usd >= 0
                        ? 'text-th-up'
                        : 'text-th-down'
                    }
                  >
                    {coingeckoData.market_data.ath_change_percentage.usd.toFixed(
                      2,
                    )}
                    %
                  </span>
                ) : null}
              </span>
              {coingeckoData?.market_data?.ath_date?.usd ? (
                <span className="text-xs text-th-fgd-4">
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
                {coingeckoData.market_data.atl.usd}{' '}
                {coingeckoData?.market_data?.atl_change_percentage?.usd ? (
                  <span
                    className={
                      coingeckoData.market_data.atl_change_percentage.usd >= 0
                        ? 'text-th-up'
                        : 'text-th-down'
                    }
                  >
                    {coingeckoData.market_data.atl_change_percentage.usd.toFixed(
                      2,
                    )}
                    %
                  </span>
                ) : null}
              </span>
              {coingeckoData?.market_data?.atl_date?.usd ? (
                <span className="text-xs text-th-fgd-4">
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
    </>
  )
}

export default MarketStats

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
