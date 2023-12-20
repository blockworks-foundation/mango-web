import { fetchTokenPages } from '../../../contentful/tokenPage'
import Explore from '../../components/explore/Explore'
import { draftMode } from 'next/headers'
import { fetchMangoTokensData } from '../../utils/mango'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import { fetchTokenCategoryPages } from '../../../contentful/tokenCategoryPage'
import DataDisclaimer from '../../components/explore/DataDisclaimer'

export const metadata: Metadata = {
  title: 'Explore Listed Tokens on Mango Markets',
  description:
    'Live prices, charts, stats and alpha on every token listed on Mango Markets.',
}

function ExploreFallback() {
  return <></>
}

async function ExplorePage() {
  const tokens = await fetchTokenPages({
    preview: draftMode().isEnabled,
  })
  const mangoTokensData = await fetchMangoTokensData()
  const categoryPages = await fetchTokenCategoryPages({
    preview: draftMode().isEnabled,
  })
  return tokens && tokens?.length ? (
    <Suspense fallback={<ExploreFallback />}>
      <Explore
        categoryPages={categoryPages}
        tokens={tokens}
        mangoTokensData={mangoTokensData}
      />
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

export default ExplorePage
