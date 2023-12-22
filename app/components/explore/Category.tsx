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
import BackButton from '../shared/BackButton'

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
  const { category, description, slug } = categoryPageData

  const sortedTokens = useMemo(() => {
    return sortTokens(tokensForCategory)
  }, [tokensForCategory])

  const backgroundImageUrl = description
    ? `/images/categories/${slug}.png`
    : '/images/new/cube-bg.png'

  return (
    <>
      <div
        className={`flex flex-col items-start justify-between h-[264px] py-6 ${
          description ? 'bg-cover bg-center' : 'bg-repeat'
        }`}
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className={`${MAX_CONTENT_WIDTH} w-full mx-auto px-6 lg:px-20`}>
          <BackButton />
        </div>
        <div className={`${MAX_CONTENT_WIDTH} mx-auto`}>
          <div className="bg-[rgba(21,19,27,0.8)] px-3 py-1">
            <h1 className="text-4xl">{`Explore ${category}`}</h1>
          </div>
        </div>
      </div>
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-3 sm:mb-0">{`${sortedTokens?.length} ${category} ${
            sortedTokens?.length === 1 ? 'token' : 'tokens'
          } listed on Mango`}</p>
          <div className="flex space-x-2">
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
