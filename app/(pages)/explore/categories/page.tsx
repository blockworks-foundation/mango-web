import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { MAX_CONTENT_WIDTH } from '../../../utils/constants'
import { fetchTokenCategoryPages } from '../../../../contentful/tokenCategoryPage'
import DataDisclaimer from '../../../components/explore/DataDisclaimer'
import ExploreCategories from '../../../components/explore/ExploreCategories'

export const metadata: Metadata = {
  title: 'Explore Listed Token Categories on Mango Markets',
  description:
    'Discover and learn about the different types of tokens listed on Mango',
}

function ExploreCategoriesFallback() {
  return <></>
}

async function ExploreCategoriesPage() {
  const categoryPages = await fetchTokenCategoryPages({
    preview: draftMode().isEnabled,
  })
  return categoryPages && categoryPages?.length ? (
    <Suspense fallback={<ExploreCategoriesFallback />}>
      <ExploreCategories categoryPages={categoryPages} />
      <div className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto pb-10`}>
        <DataDisclaimer />
      </div>
    </Suspense>
  ) : (
    <div
      className={`px-6 lg:px-20 py-10 md:py-16 ${MAX_CONTENT_WIDTH} mx-auto min-h-screen`}
    >
      <div className="p-6 rounded-xl border border-th-bkg-3">
        <p className="text-center">
          Something went wrong. Try refreshing the page.
        </p>
      </div>
    </div>
  )
}

export default ExploreCategoriesPage
