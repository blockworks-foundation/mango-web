import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  fetchTokenPage,
  fetchTokenPages,
} from '../../../../../contentful/tokenPage'
import RichTextDisplay from '../../../../components/rich-text/RichTextDisplay'
import {
  fetchMangoMarketData,
  fetchMangoTokenData,
} from '../../../../utils/mango'
import { MangoMarketsData, MangoTokenData } from '../../../../types/mango'
import TokenMangoStats from '../../../../components/explore/token-page/TokenMangoStats'
import DataDisclaimer from '../../../../components/explore/DataDisclaimer'
import InfoAndStats from '../../../../components/explore/token-page/InfoAndStats'
import { MAX_CONTENT_WIDTH } from '../../../../utils/constants'

interface TokenPageParams {
  slug: string
}

interface TokenPageProps {
  params: TokenPageParams
}

// Tell Next.js about all our token pages so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<TokenPageParams[]> {
  const tokenPages = await fetchTokenPages({ preview: false })

  return tokenPages.map((page) => ({ slug: page.slug }))
}

// For each token page, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: TokenPageProps,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const tokenPage = await fetchTokenPage({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!tokenPage) {
    return notFound()
  }
  return {
    title: tokenPage.seoTitle,
    description: tokenPage.seoDescription,
  }
}

async function TokenPage({ params }: TokenPageProps) {
  const tokenPageData = await fetchTokenPage({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!tokenPageData) {
    return notFound()
  }

  const { description, mint, tokenName } = tokenPageData

  // get mango specific token data
  const mangoTokenDataPromise: Promise<MangoTokenData> =
    fetchMangoTokenData(mint)

  // get data on all markets listed on mango
  const mangoMarketsDataPromise: Promise<MangoMarketsData> =
    fetchMangoMarketData()

  // Wait for the promises to resolve
  const [mangoTokenData, mangoMarketsData] = await Promise.all([
    mangoTokenDataPromise,
    mangoMarketsDataPromise,
  ])

  return (
    <>
      <div
        className={`px-6 lg:px-20 pb-10 md:pb-16 pt-6 ${MAX_CONTENT_WIDTH} mx-auto`}
      >
        <InfoAndStats
          tokenPageData={tokenPageData}
          mangoTokenData={mangoTokenData}
        />
        <div className="mt-6">
          <h2 className="mb-4 text-2xl">{`${tokenName} on Mango`}</h2>
          <TokenMangoStats
            mangoData={mangoTokenData}
            mangoMarketsData={mangoMarketsData}
            tokenPageData={tokenPageData}
          />
        </div>
      </div>
      {description ? (
        <div className="bg-th-bkg-2 py-10 md:py-16">
          <div className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto`}>
            <RichTextDisplay content={description} />
          </div>
        </div>
      ) : null}
      <div className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto pb-10`}>
        <DataDisclaimer />
      </div>
    </>
  )
}

export default TokenPage
