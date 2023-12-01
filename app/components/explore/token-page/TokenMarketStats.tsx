'use client'

import { TokenPageWithData } from '../../../../contentful/tokenPage'
import { numberCompacter } from '../../../utils/numbers'
import KeyValuePairDisplay from './KeyValuePairDisplay'

const TokenMarketStats = ({ tokenData }: { tokenData: TokenPageWithData }) => {
  if (!tokenData?.birdeyeData) return null
  const { birdeyeData } = tokenData
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-6">
      <KeyValuePairDisplay
        label="FDMC"
        value={
          birdeyeData?.mc ? `$${numberCompacter.format(birdeyeData.mc)}` : '–'
        }
        tooltipContent="Fully diluted market cap"
      />
      <KeyValuePairDisplay
        label="Supply"
        value={
          birdeyeData?.supply
            ? `$${numberCompacter.format(birdeyeData.supply)}`
            : '–'
        }
      />
    </div>
  )
}

export default TokenMarketStats
