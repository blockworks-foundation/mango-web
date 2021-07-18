import moment from 'moment'
import { useEffect, useState } from 'react'
import { AreaChart, Area, ReferenceLine, XAxis, YAxis, ResponsiveContainer} from 'recharts'
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
    <div className="lg:col-span-1 md:col-span-2 sm:col-span-1">
      <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col-reverse bg-th-fgd-4 rounded-lg py-4 px-4 h-auto w-full shadow-md lg:divide-x-2 md:divide-x-2 sm:divide-x-2 divide-white divide-opacity-10">
        <div className="p-2">
          <div className="pr-6">
            <img
              className="inline-block h-5 w-5 mr-1"
              src={props.icon}
              alt={props.name}
            />
            <p className="inline-block align-middle">{props.name}</p>
          </div>
          <div className="flex flex-row flex-wrap gap-x-2">
            <p className="text-xl">${format(price, props.decimals)}</p>
            <PercentPill value={change} />
          </div>
          <div className="mt-2 text-md">
            <p className="text-white text-opacity-40">Volume:</p> {format(volume)} {props.name.split('/')[0]}
          </div>
        </div>
        <div className="flex align-middle pl-4">
          {graph.length > 0 && (
            <ResponsiveContainer width={80} height={80}>
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
    </div>
  )
}

export default MarketCard
