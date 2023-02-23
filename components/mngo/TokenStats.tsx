import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { formatCurrencyValue, formatNumericValue } from '../../utils'
import SectionWrapper from '../shared/SectionWrapper'

const fetchTokenInfo = async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/mango-markets?localization=false&tickers=false&developer_data=false&sparkline=false'
  )
  const data = await response.json()
  return data
}

const TokenStats = () => {
  const { t } = useTranslation('mngo')

  const coingeckoMngoInfo = useQuery<{ market_data: any; name: string }, Error>(
    ['ip-address'],
    () => fetchTokenInfo(),
    {
      cacheTime: 1000 * 60 * 15,
      staleTime: 1000 * 60 * 5,
      retry: 3,
      refetchOnWindowFocus: false,
      // enabled: !!coingeckoId,
    }
  )

  return (
    <SectionWrapper>
      <h2 className="mb-6">{t('mngo-stats')}</h2>
      {coingeckoMngoInfo?.data?.market_data ? (
        <div className="border-b border-th-bkg-3 w-2/3">
          <StatsRow
            isCurrency
            title={t('mngo:price')}
            value={coingeckoMngoInfo?.data?.market_data?.current_price?.usd}
          />
          <StatsRow
            isCurrency
            title={t('mngo:market-cap')}
            value={coingeckoMngoInfo?.data?.market_data?.market_cap?.usd}
          />
          <StatsRow
            isCurrency
            title={t('mngo:fdv')}
            value={
              coingeckoMngoInfo?.data?.market_data?.fully_diluted_valuation?.usd
            }
          />
          <StatsRow
            title={t('mngo:circulating-supply')}
            value={coingeckoMngoInfo?.data?.market_data?.circulating_supply}
          />
          <StatsRow
            title={t('mngo:total-supply')}
            value={coingeckoMngoInfo?.data?.market_data?.total_supply}
          />
        </div>
      ) : null}
    </SectionWrapper>
  )
}

export default TokenStats

const StatsRow = ({
  title,
  value,
  isCurrency,
}: {
  title: string
  value: string | undefined
  isCurrency?: boolean
}) => {
  return (
    <div className="flex justify-between p-6 border-t border-th-bkg-3">
      <p>{title}</p>
      <p className="font-mono text-th-fgd-1">
        {value
          ? isCurrency
            ? formatCurrencyValue(value)
            : formatNumericValue(value)
          : 'N/A'}
      </p>
    </div>
  )
}
