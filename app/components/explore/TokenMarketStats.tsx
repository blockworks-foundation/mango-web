'use client'

import { TokenPageWithData } from '../../../contentful/tokenPage'
import { numberCompacter } from '../../utils/numbers'

const TokenMarketStats = ({ tokenData }: { tokenData: TokenPageWithData }) => {
  if (!tokenData?.birdeyeData) return null
  const { birdeyeData } = tokenData
  return (
    <div className="border-t border-th-bkg-3 pt-4 mt-12">
      <h2 className="mb-4 text-2xl">Market stats</h2>
      <div className="grid grid-cols-3 grid-flow-row gap-6">
        <div>
          <p>FDMC</p>
          <span className="text-4xl font-display text-th-fgd-1">
            {birdeyeData?.mc
              ? `$${numberCompacter.format(birdeyeData.mc)}`
              : '–'}
          </span>
        </div>
        <div>
          <p>Supply</p>
          <span className="text-4xl font-display text-th-fgd-1">
            {birdeyeData?.supply
              ? `$${numberCompacter.format(birdeyeData.supply)}`
              : '–'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TokenMarketStats
