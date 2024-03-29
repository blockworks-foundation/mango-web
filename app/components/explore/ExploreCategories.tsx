'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ChangeEvent, useMemo, useState } from 'react'
import Input from '../forms/Input'
import { TokenCategoryPage } from '../../../contentful/tokenCategoryPage'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import Link from 'next/link'
import NoResults from './NoResults'
import PageHeader from './PageHeader'
import CardImage from '../shared/CardImage'

const generateSearchTerm = (item: TokenCategoryPage, searchValue: string) => {
  const normalizedSearchValue = searchValue.toLowerCase()
  const value = item.category.toLowerCase()

  const isMatching = value.includes(normalizedSearchValue)
  const matchingPercent = isMatching
    ? normalizedSearchValue.length / item.category.length
    : 0

  const matchingIdx = value.indexOf(normalizedSearchValue)

  return {
    category: item,
    matchingIdx,
    matchingPercent,
  }
}

const startSearch = (items: TokenCategoryPage[], searchValue: string) => {
  return items
    .map((item) => generateSearchTerm(item, searchValue))
    .filter((item) => item.matchingIdx >= 0)
    .sort((i1, i2) => i1.matchingIdx - i2.matchingIdx)
    .sort((i1, i2) => i2.matchingPercent - i1.matchingPercent)
    .map((item) => item.category)
}

const ExploreCategories = ({
  categoryPages,
}: {
  categoryPages: TokenCategoryPage[]
}) => {
  const [searchString, setSearchString] = useState('')

  const filteredCategories = useMemo(() => {
    return searchString
      ? startSearch(categoryPages, searchString)
      : categoryPages
  }, [searchString, categoryPages])

  const handleUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  return (
    <>
      <PageHeader title="Explore listed token categories" />
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        <div className="mb-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
          <p>{`${categoryPages?.length} token categories`}</p>
          <div className="relative w-full lg:mb-0 sm:w-44 mb-6 sm:mb-0">
            <Input
              heightClass="h-10 pl-8"
              type="text"
              value={searchString}
              onChange={handleUpdateSearch}
            />
            <MagnifyingGlassIcon className="absolute left-2 top-3 h-4 w-4 text-th-fgd-3" />
          </div>
        </div>
        {filteredCategories?.length ? (
          <div className="grid grid-cols-4 gap-6">
            {filteredCategories.map((cat) => {
              const { category, slug } = cat
              return (
                <div
                  className="col-span-4 sm:col-span-2 lg:col-span-1 border border-th-bkg-3 rounded-xl group relative"
                  key={slug}
                >
                  <Link href={`/explore/categories/${slug}`}>
                    <div className="overflow-hidden rounded-t-xl">
                      <CardImage
                        customImagePath={`/images/categories/${slug}-small.webp`}
                      />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-th-fgd-2 font-display">{category}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        ) : (
          <NoResults message="No categories found..." />
        )}
      </div>
    </>
  )
}

export default ExploreCategories
