import moment from 'moment'
import { useEffect, useState } from 'react'
import {
  AreaChart,
  Area,
  ReferenceLine,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import tailwindConfig from '../tailwind.config.js'

import PercentPill from './PercentPill'

interface MarketCardProps {
  name: string
  icon: string
  decimals: number
}

const MarketCard = (props: MarketCardProps) => {
  const [candles, setCandles] = useState({
    t: [],
    c: [],
    o: [],
    h: [],
    l: [],
    v: [],
  })

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
  const volume = candles.v.reduce((a, b) => a + b, 0)
  const graph =
    candles.t.length > 0
      ? candles.t.map((t, i) => ({
          t,
          p: candles.c[i] - Math.min(...candles.l),
        }))
      : []

  const format = (val: number, decimals = 0) => {
    const significance = Math.pow(10, decimals)
    const roundedVal = Math.round(val * significance) / significance
    return new Intl.NumberFormat('en-US').format(roundedVal)
  }

  const colors = tailwindConfig.theme.extend.colors

  return (
    <div className="flex-1 m-2">
      <div className="flex flex-col bg-th-fgd-4 rounded-xl py-4 px-4 h-auto shadow-md">
        <div className="flex flex-row gap-x-2 align-bottom">
          <div className="flex flex-col flex-auto">
            <p className="text-sm text-white text-opacity-50">{props.name}</p>
            <p className="text-2xl">${format(price, props.decimals)}</p>
          </div>
          <div className="flex w-full">
            {graph.length > 0 && (
              <ResponsiveContainer>
                <AreaChart data={graph}>
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
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-x-2 mt-1 items-center">
          <PercentPill value={change} />
          <p className="text-sm mt-1">
            <span className="text-white text-opacity-50">Vol:</span>{' '}
            {format(volume)} {props.name.split('/')[0]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MarketCard
