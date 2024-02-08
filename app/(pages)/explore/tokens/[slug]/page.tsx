import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  fetchContentfulTokenPages,
  fetchTokenPage,
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
import { ARTICLE_LIMIT, MAX_CONTENT_WIDTH } from '../../../../utils/constants'
import {
  NewsArticle,
  fetchNewsArticles,
} from '../../../../../contentful/newsArticle'
import NewsArticleCard from '../../../../components/explore/NewsArticleCard'
import MoreArticles from '../../../../components/explore/MoreArticles'

interface TokenPageParams {
  slug: string
}

interface TokenPageProps {
  params: TokenPageParams
}

// Tell Next.js about all our token pages so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<TokenPageParams[]> {
  const tokenPages = await fetchContentfulTokenPages({ preview: false })

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
    openGraph: {
      title: tokenPage?.seoTitle || tokenPage.tokenName,
      description: tokenPage?.seoDescription || tokenPage.symbol,
      url: `https://mango.markets/explore/tokens/${tokenPage.slug}`,
      siteName: 'Mango Markets',
      images: [
        {
          url: tokenPage.metaImageUrl, // Must be an absolute URL
          width: 1200,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
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

  const { description, mint, tokenName, symbol } = tokenPageData

  // get mango specific token data
  const mangoTokenDataPromise: Promise<MangoTokenData> =
    fetchMangoTokenData(mint)

  // get data on all markets listed on mango
  const mangoMarketsDataPromise: Promise<MangoMarketsData> =
    fetchMangoMarketData()

  const newsArticlesPromise: Promise<NewsArticle[]> = fetchNewsArticles({
    category: symbol,
    preview: draftMode().isEnabled,
    limit: ARTICLE_LIMIT,
    skip: 0,
  })

  // Wait for the promises to resolve
  const [mangoTokenData, mangoMarketsData, newsArticles] = await Promise.all([
    mangoTokenDataPromise,
    mangoMarketsDataPromise,
    newsArticlesPromise,
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
      {newsArticles?.length ? (
        <div className="border-t border-th-bkg-3 pt-10 md:pt-16">
          <div
            className={`px-6 lg:px-20 pb-10 md:pb-16 ${MAX_CONTENT_WIDTH} mx-auto`}
          >
            <h2 className="mb-4 text-2xl">News</h2>
            <div className="grid grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <NewsArticleCard article={article} key={article.articleUrl} />
              ))}
              <MoreArticles category={symbol} />
            </div>
          </div>
        </div>
      ) : null}
      {description ? (
        <div className="bg-th-bkg-2 py-10 md:py-16">
          <div className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto`}>
            <RichTextDisplay
              content={description}
              currentPrice={tokenPageData?.birdeyeData?.price}
            />
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
