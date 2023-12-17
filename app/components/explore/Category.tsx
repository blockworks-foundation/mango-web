'use client'

import { useMemo, useState } from 'react'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import CategorySwitcher from './CategorySwitcher'
import TableViewToggle from './TableViewToggle'
import TokenTable from './TokenTable'
import { TokenCategoryPage } from '../../../contentful/tokenCategoryPage'
import RichTextDisplay from '../shared/RichTextDisplay'
import DataDisclaimer from './DataDisclaimer'
import { sortTokens } from './Explore'

const SECTION_WRAPPER_CLASSES = 'border-t border-th-bkg-3 pt-6 mt-12'

const Category = ({
  categoryPageData,
  tokensForCategory,
  mangoTokensData,
}: {
  categoryPageData: TokenCategoryPage
  tokensForCategory: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
}) => {
  const [showTableView, setShowTableView] = useState(true)
  const { category, description } = categoryPageData

  const sortedTokens = useMemo(() => {
    return sortTokens(tokensForCategory)
  }, [tokensForCategory])

  return (
    <>
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-4xl mb-4 lg:mb-0">{`Explore ${category}`}</h1>
        <div className="flex space-x-2">
          <CategorySwitcher tokens={tokensForCategory} />
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
      {description ? (
        <div className={SECTION_WRAPPER_CLASSES}>
          <h2 className="mb-4 text-2xl">{`About ${category}`}</h2>
          <RichTextDisplay content={description} />
        </div>
      ) : null}
      <DataDisclaimer />
    </>
  )
}

export default Category
