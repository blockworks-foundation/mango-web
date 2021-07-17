import moment from 'moment'
import { useEffect, useMemo, useState } from 'react'
import { AreaChart, Area, ReferenceLine, XAxis, YAxis, Tooltip } from 'recharts'
import tailwindConfig from '../tailwind.config.js'

import PercentPill from './PercentPill'

interface MarketCardProps {
  name: string
  icon: string
  decimals: number
}

interface CandleResponse {
  t: number[]
  c: number[]
  o: number[]
  h: number[]
  l: number[]
}

const MarketCard = (props: MarketCardProps) => {
  const [candles, setCandles] = useState({ t: [], c: [], o: [], h: [], l: [] })

  useEffect(() => {
    const loadCandles = async () => {
      const symbol = props.name
      const resolution = '60'
      const from = moment().subtract(24, 'hours').format('X')
      const to = moment().format('X')
      const query = new URLSearchParams({
        symbol,
        resolution,
        from,
        to,
      }).toString()
      const response = await fetch(
        `https://serum-history.herokuapp.com/tv/history?${query}`
      )
      setCandles(await response.json())
    }
    loadCandles()
  }, [props.name])

  const price = candles.c.length > 0 ? candles.c[candles.c.length - 1] : 0
  const change =
    candles.o.length > 0 ? ((price - candles.c[0]) / candles.c[0]) * 100 : 0
  const graph =
    candles.t.length > 0
      ? candles.t.map((t, i) => ({
          t,
          p: candles.c[i] - Math.min(...candles.l),
        }))
      : []

  const formatUsd = (val: number) => {
    const significance = Math.pow(10, props.decimals)
    const roundedVal = Math.round(val * significance) / significance
    return new Intl.NumberFormat('en-US').format(roundedVal)
  }

  const colors = tailwindConfig.theme.extend.colors

  return (
    <div className="col-span-1 flex md:col-span-2 lg:col-span-1">
      <a href="#">
        <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-4 h-auto w-auto">
          <div className="pr-4 border-r-2 border-white border-opacity-10">
            <img className="h-6" src={props.icon} alt={props.name} />
            <p className="text-gray-500 font-bold py-1">{props.name}</p>
            <div className="flex flex-row">
              <p className="font-bold text-xl pr-2">${formatUsd(price)}</p>
              <PercentPill value={change} />
            </div>
          </div>
          <div className="flex align-middle pl-4">
            {graph.length > 0 && (
              <AreaChart width={90} height={90} data={graph}>
                <ReferenceLine
                  y={0}
                  stroke={colors[`secondary-${change > 0 ? 1 : 2}`].light}
                  strokeDasharray="3 3"
                  strokeOpacity={0.6}
                />
                <Area
                  isAnimationActive={false}
                  type="monotone"
                  dataKey="p"
                  stroke={colors[`secondary-${change > 0 ? 1 : 2}`].light}
                  fill={colors[`secondary-${change > 0 ? 1 : 2}`].dark}
                  fillOpacity={0.1}
                />
                <XAxis dataKey="t" hide />
                <YAxis dataKey="p" hide />
              </AreaChart>
            )}
          </div>
        </div>
      </a>
    </div>
  )
}

export default MarketCard
