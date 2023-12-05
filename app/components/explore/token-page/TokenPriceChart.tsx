'use client'

import { useState } from 'react'
import { BirdeyePriceHistoryData } from '../../../types/birdeye'
import { formatYAxis } from '../../../utils/numbers'
import DetailedAreaOrBarChart from '../../shared/DetailedAreaOrBarChart'

const TokenPriceChart = ({
  chartData,
}: {
  chartData: BirdeyePriceHistoryData[]
}) => {
  const [daysToShow, setDaysToShow] = useState('30')
  return (
    <DetailedAreaOrBarChart
      changeAsPercent
      data={chartData}
      daysToShow={daysToShow}
      setDaysToShow={setDaysToShow}
      heightClass="h-[180px] lg:h-[260px]"
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
