import { DownTriangle, UpTriangle } from './DirectionTriangles'
import FormatNumericValue from './FormatNumericValue'

const Change = ({
  change,
  decimals,
  prefix,
  size,
  suffix,
}: {
  change: number | typeof NaN
  decimals?: number
  prefix?: string
  size?: 'small' | 'large'
  suffix?: string
}) => {
  return !isNaN(change) ? (
    <div className="flex items-center space-x-1.5">
      {change > 0 ? (
        <div className="mt-[1px]">
          <UpTriangle size={size} />
        </div>
      ) : change < 0 ? (
        <div className="mt-[1px]">
          <DownTriangle size={size} />
        </div>
      ) : null}
      <p
        className={`font-normal ${
          change > 0
            ? 'text-th-up'
            : change < 0
            ? 'text-th-down'
            : 'text-th-fgd-4'
        }`}
      >
        {prefix ? prefix : ''}
        <FormatNumericValue
          value={isNaN(change) ? '0.00' : Math.abs(change)}
          decimals={decimals ? decimals : 2}
        />
        {suffix ? suffix : ''}
      </p>
    </div>
  ) : (
    <div className="flex items-center">
      <p className={`font-normal`}>
        {prefix ? prefix : ''}
        <FormatNumericValue value="0.00" decimals={decimals ? decimals : 2} />
        {suffix ? suffix : ''}
      </p>
    </div>
  )
}

export default Change
