'use client'

import { TokenPageWithData } from '../../../../contentful/tokenPage'
import { BirdeyeSecurityData } from '../../../types/birdeye'
import { numberCompacter } from '../../../utils/numbers'
import KeyValuePairDisplay from './KeyValuePairDisplay'

const TokenStats = ({
  tokenData,
  securityData,
}: {
  tokenData: TokenPageWithData
  securityData: BirdeyeSecurityData | undefined
}) => {
  if (!tokenData?.birdeyeData) return null
  const { birdeyeData } = tokenData
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-6">
      <KeyValuePairDisplay
        label="TVL"
        value={
          birdeyeData?.liquidity
            ? `$${numberCompacter.format(birdeyeData.liquidity)}`
            : '–'
        }
      />
      <KeyValuePairDisplay
        label="Top 10 holder percent"
        value={
          securityData && securityData?.top10UserPercent
            ? `${(securityData.top10UserPercent * 100).toFixed(1)}%`
            : '–'
        }
      />
    </div>
  )
}

export default TokenStats
