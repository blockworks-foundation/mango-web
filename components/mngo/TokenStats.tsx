import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { formatCurrencyValue, formatNumericValue } from '../../utils'
import SectionWrapper from '../shared/SectionWrapper'
import SheenLoader from '../shared/SheenLoader'

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
      <h2 className="mb-12">{t('mngo-stats')}</h2>
      <div className="flex items-center justify-between">
        {coingeckoMngoInfo?.data?.market_data ? (
          <div className="border-b border-th-bkg-3 w-full md:w-2/3">
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
                coingeckoMngoInfo?.data?.market_data?.fully_diluted_valuation
                  ?.usd
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
        ) : coingeckoMngoInfo?.isLoading || coingeckoMngoInfo?.isFetching ? (
          <div className="space-y-0.5">
            {[...Array(5)].map((x, i) => (
              <SheenLoader className="flex flex-1" key={i}>
                <div className="h-[77px] w-full bg-th-bkg-2" />
              </SheenLoader>
            ))}
          </div>
        ) : null}
        <div className="hidden md:flex md:w-1/3 justify-center">
          <img
            className="w-auto h-48"
            src="/images/img-placeholder.png"
            alt=""
          />
        </div>
      </div>
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
  const { t } = useTranslation('mngo')
  return (
    <div className="flex justify-between p-6 border-t border-th-bkg-3">
      <p>{t(title)}</p>
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
