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
  const { category, description, heroImage } = categoryPageData

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
        <div className="my-20">
          {heroImage ? (
            <img
              className="w-full h-auto mb-10"
              src={heroImage.src}
              // Use the Contentful Images API to render
              // responsive images. No next/image required:
              srcSet={`${heroImage.src}?w=300 1x, ${heroImage.src} 2x`}
              alt={heroImage.alt}
            />
          ) : null}
          <RichTextDisplay content={description} />
        </div>
      ) : null}
      <DataDisclaimer />
    </>
  )
}

export default Category
