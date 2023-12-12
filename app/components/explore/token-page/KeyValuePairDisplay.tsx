import { ReactNode } from 'react'
import Tooltip from '../../shared/Tooltip'

const KeyValuePairDisplay = ({
  label,
  value,
  tooltipContent,
}: {
  label: string
  value: number | string | ReactNode
  tooltipContent?: string
}) => {
  return (
    <div>
      <div className="w-max">
        <Tooltip content={tooltipContent}>
          <p
            className={`mb-1 leading-tight ${
              tooltipContent ? 'tooltip-underline' : ''
            }`}
          >
            {label}
          </p>
        </Tooltip>
      </div>
      <span className="text-3xl font-display text-th-fgd-1">{value}</span>
    </div>
  )
}

export default KeyValuePairDisplay
