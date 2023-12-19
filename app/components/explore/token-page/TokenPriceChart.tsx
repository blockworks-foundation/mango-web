'use client'

import { useState } from 'react'
import { formatYAxis } from '../../../utils/numbers'
import DetailedAreaOrBarChart from '../../shared/DetailedAreaOrBarChart'
import { DAILY_SECONDS } from '../../../utils/constants'
import { useQuery } from '@tanstack/react-query'
import { makeApiRequest } from '../../../utils/birdeye'

type ChartData = {
  unixTime: number
  value: number
}

const fetchBirdeyePrices = async (daysToShow: string, mint: string) => {
  try {
    const queryEnd = Math.floor(Date.now() / 1000)
    const queryStart = queryEnd - parseInt(daysToShow) * DAILY_SECONDS
    const interval =
      daysToShow === '1' ? '15m' : daysToShow === '7' ? '1H' : '4H'
    const birdeyeQuery = `defi/history_price?address=${mint}&address_type=token&type=${interval}&time_from=${queryStart}&time_to=${queryEnd}`
    const birdeyePricesResponse = await makeApiRequest(birdeyeQuery)
    const birdeyePrices = birdeyePricesResponse?.data?.items?.length
      ? birdeyePricesResponse.data.items
      : []
    for (const data of birdeyePrices) {
      data.unixTime = data.unixTime * 1000
    }
    return birdeyePrices
  } catch (e) {
    console.error('failed to fetch token price data from birdeye', e)
    return []
  }
}

const TokenPriceChart = ({
  latestChartData,
  loadingLatestChartData,
  mint,
}: {
  latestChartData: ChartData[]
  loadingLatestChartData: boolean
  mint: string
}) => {
  const [daysToShow, setDaysToShow] = useState('30')

  const { data: chartData, isLoading: loadingChartData } = useQuery({
    queryKey: ['token-chart-data', daysToShow, mint],
    queryFn: () => fetchBirdeyePrices(daysToShow, mint),
  })

  return (
    <DetailedAreaOrBarChart
      changeAsPercent
      data={chartData?.length ? chartData.concat(latestChartData) : chartData}
      daysToShow={daysToShow}
      loading={loadingChartData || loadingLatestChartData}
      setDaysToShow={setDaysToShow}
      heightClass="h-[180px] lg:h-[260px]"
      loaderHeightClass="h-[264px] lg:h-[344px]"
      hideAxis
      prefix="$"
      tickFormat={(x) => `$${formatYAxis(x)}`}
      title=""
      xKey="unixTime"
      yKey="value"
    />
  )
}

export default TokenPriceChart
