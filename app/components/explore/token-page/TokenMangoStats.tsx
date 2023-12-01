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
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-6">
      <KeyValuePairDisplay
        label="Deposit rate"
        value={<span className="text-th-up">5.42%</span>}
      />
      <KeyValuePairDisplay
        label="Borrow rate"
        value={<span className="text-th-down">7.33%</span>}
      />
      <KeyValuePairDisplay
        label="Available"
        value={numberCompacter.format(234956688)}
      />
      <KeyValuePairDisplay label="Asset weight" value="0.00x" />
      <KeyValuePairDisplay label="Liability weight" value="1.80x" />
      <KeyValuePairDisplay label="Max leverage" value="5x" />
    </div>
  )
}

export default TokenMangoStats
