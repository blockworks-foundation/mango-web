import { useMemo } from 'react'
import FormatNumericValue from '../../shared/FormatNumericValue'

interface DailyRangeProps {
  high: number | undefined
  low: number | undefined
  price: number | undefined
}

const DailyRange = ({ high, low, price }: DailyRangeProps) => {
  if (!high || !low || !price) return null
  const rangePercent = useMemo(() => {
    return ((price - low) * 100) / (high - low)
  }, [high, low, price])

  return (
    <div className="flex items-center justify-between w-auto md:block">
      <div className="flex w-full items-center">
        <span className={`pr-2 font-mono text-th-fgd-2`}>
          <FormatNumericValue value={low} isUsd />
        </span>
        <div className="mt-[1px] w-full flex h-2 rounded-sm bg-th-bkg-3 sm:w-32">
          <div
            style={{
              width: `${rangePercent}%`,
            }}
            className="flex rounded-sm bg-th-active"
          ></div>
        </div>
        <span className={`flex justify-end pl-2 font-mono text-th-fgd-2`}>
          <FormatNumericValue value={high} isUsd />
        </span>
      </div>
    </div>
  )
}

export default DailyRange
