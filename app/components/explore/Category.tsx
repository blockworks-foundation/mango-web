'use client'

import { useMemo, useState } from 'react'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import CategorySwitcher from './CategorySwitcher'
import TableViewToggle from './TableViewToggle'
import TokenTable from './TokenTable'
import { TokenCategoryPage } from '../../../contentful/tokenCategoryPage'
import { sortTokens } from './ExploreTokens'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import PageHeader from './PageHeader'

const Category = ({
  categoryPages,
  categoryPageData,
  tokensForCategory,
  mangoTokensData,
}: {
  categoryPages: TokenCategoryPage[]
  categoryPageData: TokenCategoryPage
  tokensForCategory: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
}) => {
  const [showTableView, setShowTableView] = useState(true)
  const { category, slug } = categoryPageData

  const sortedTokens = useMemo(() => {
    return sortTokens(tokensForCategory)
  }, [tokensForCategory])

  const backgroundImageUrl = `/images/categories/${slug}.png`

  return (
    <>
      <PageHeader
        title={`Explore ${category}`}
        showBack
        backgroundImageUrl={backgroundImageUrl}
      />
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        <div className="mb-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
          <p>{`${sortedTokens?.length} ${category} ${
            sortedTokens?.length === 1 ? 'token' : 'tokens'
          } listed on Mango`}</p>
          <div className="flex space-x-2 mb-6 sm:mb-0">
            <CategorySwitcher categories={categoryPages} />
            <TableViewToggle
              showTableView={showTableView}
              setShowTableView={setShowTableView}
            />
          </div>
        </div>
        <TokenTable
          tokens={sortedTokens}
          mangoTokensData={mangoTokensData}
          showTableView={showTableView}
        />
      </div>
    </>
  )
}

export default Category
