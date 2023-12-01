'use client'

import { MangoTokenData } from '../../../types/mango'
import { numberCompacter } from '../../../utils/numbers'
import KeyValuePairDisplay from './KeyValuePairDisplay'

const TokenMangoStats = ({
  mangoData,
}: {
  mangoData: MangoTokenData | undefined
}) => {
  if (!mangoData) return null
  const depositRate = mangoData?.deposit_rate
    ? (mangoData.deposit_rate * 100).toFixed(2)
    : '–'
  const borrowRate = mangoData?.borrow_rate
    ? (mangoData.borrow_rate * 100).toFixed(2)
    : '–'
  const available = mangoData?.available
    ? numberCompacter.format(mangoData.available)
    : '–'
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-6">
      <KeyValuePairDisplay
        label="Deposit rate"
        value={
          <span
            className={
              isNaN(mangoData?.deposit_rate) ? 'text-th-fgd-4' : 'text-th-up'
            }
          >
            {depositRate}%
          </span>
        }
      />
      <KeyValuePairDisplay
        label="Borrow rate"
        value={
          <span
            className={
              isNaN(mangoData?.borrow_rate) ? 'text-th-fgd-4' : 'text-th-down'
            }
          >
            {borrowRate}%
          </span>
        }
      />
      <KeyValuePairDisplay label="Available" value={available} />
    </div>
  )
}

export default TokenMangoStats
