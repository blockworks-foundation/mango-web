import Image from 'next/image'
import { MarketsDataItem } from '../../types'
import { formatNumericValue, numberCompacter } from '../../utils'
import Change from '../shared/Change'
import SimpleAreaChart from '../shared/SimpleAreaChart'
import { useTranslation } from 'react-i18next'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

const MarketCard = ({
  name,
  data,
}: {
  name: string
  data: MarketsDataItem
}) => {
  const { t } = useTranslation('common')
  const { last_price, price_24h, price_history, quote_volume_24h } = data
  const isSpot = name.includes('/')
  const baseSymbol = isSpot ? name.split('/')[0] : name.split('-')[0]
  const quoteSymbol = isSpot ? name.split('/')[1] : 'USDC'
  const change =
    last_price && price_24h ? ((last_price - price_24h) / last_price) * 100 : 0
  return (
    <div className="p-4 rounded-lg border border-th-bkg-3">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="mt-1.5 flex-shrink-0">
            <Image
              className="flex-shrink-0"
              src={`/icons/markets/${baseSymbol.toLowerCase()}.svg`}
              height={40}
              width={40}
              alt={baseSymbol}
            />
          </div>
          <div>
            <p className="text-th-fgd-4">{name}</p>
            <p className="text-th-fgd-1 font-bold">
              {last_price ? (
                <span>
                  {quoteSymbol === 'USDC' ? '$' : ''}
                  {formatNumericValue(last_price)}{' '}
                  {quoteSymbol !== 'USDC' ? (
                    <span className="text-th-fgd-4 font-normal">
                      {quoteSymbol}
                    </span>
                  ) : null}
                </span>
              ) : (
                '–'
              )}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <Change change={change} suffix="%" />
              <span className="text-th-fgd-4">|</span>
              <p className="whitespace-nowrap">
                {quote_volume_24h ? (
                  <span>
                    {quoteSymbol === 'USDC' ? '$' : ''}
                    {isNaN(quote_volume_24h)
                      ? '0.00'
                      : numberCompacter.format(quote_volume_24h)}{' '}
                    {quoteSymbol !== 'USDC' ? (
                      <span className="text-th-fgd-4 font-normal">
                        {quoteSymbol}
                      </span>
                    ) : null}
                  </span>
                ) : (
                  '0.00'
                )}
              </p>
            </div>
          </div>
        </div>
        {price_history && price_history.length ? (
          <div className="h-12 w-20">
            <SimpleAreaChart
              color={
                price_history[0].price <=
                price_history[price_history.length - 1]?.price
                  ? 'var(--up)'
                  : 'var(--down)'
              }
              data={price_history.sort((a, b) => a.time.localeCompare(b.time))}
              name={name}
              xKey="time"
              yKey="price"
            />
          </div>
        ) : null}
      </div>
      <div className="flex items-center justify-end pt-4 border-t border-th-bkg-4 mt-4">
        <a
          className="flex items-center space-x-2 text-th-fgd-3 md:hover:text-th-fgd-4 text-base"
          href={`https://app.mango.markets/trade?name=${name}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>{t('trade', { token: isSpot ? baseSymbol : name })}</span>
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}

export default MarketCard
