import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import TokenTable from './TokenTable'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import PageHeader from './PageHeader'
import TokensFilter from './TokensFilter'

export const sortTokens = (tokens: TokenPageWithData[]) => {
  return tokens.sort((a, b) => {
    const aValue = a?.birdeyeData?.v24hUSD
    const bValue = b?.birdeyeData?.v24hUSD

    if (aValue === undefined && bValue === undefined) {
      return 0
    } else if (aValue === undefined) {
      return 1
    } else if (bValue === undefined) {
      return -1
    } else {
      return bValue - aValue
    }
  })
}

const ExploreTokens = ({
  tokens,
  mangoTokensData,
}: {
  tokens: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
}) => {
  return (
    <>
      <PageHeader title="Explore listed tokens" />
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        <div className="mb-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
          <p>{`${tokens?.length} tokens listed on Mango`}</p>
          <div className="flex space-x-2 mb-6 sm:mb-0">
            <TokensFilter tokens={tokens} />
          </div>
        </div>
        <TokenTable
          tokens={sortTokens(tokens)}
          mangoTokensData={mangoTokensData}
        />
      </div>
    </>
  )
}

export default ExploreTokens
