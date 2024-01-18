import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  TokenPageWithData,
  fetchTokenPagesForCategory,
} from '../../../../../contentful/tokenPage'
import {
  fetchTokenCategoryPage,
  fetchTokenCategoryPages,
} from '../../../../../contentful/tokenCategoryPage'
import { fetchMangoTokenData } from '../../../../utils/mango'
import Category from '../../../../components/explore/Category'
import { MAX_CONTENT_WIDTH } from '../../../../utils/constants'
import RichTextDisplay from '../../../../components/rich-text/RichTextDisplay'
import DataDisclaimer from '../../../../components/explore/DataDisclaimer'
import {
  NewsArticle,
  fetchNewsArticles,
} from '../../../../../contentful/newsArticle'
import NewsArticleCard from '../../../../components/explore/NewsArticleCard'

interface TokenCategoryPageParams {
  category: string
}

interface TokenCategoryPageProps {
  params: TokenCategoryPageParams
}

// Tell Next.js about all our category pages so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<
  TokenCategoryPageParams[]
> {
  const tokenCategoryPages = await fetchTokenCategoryPages({ preview: false })

  return tokenCategoryPages.map((page) => ({ category: page.slug }))
}

// For each category page, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: TokenCategoryPageProps,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const tokenCategoryPage = await fetchTokenCategoryPage({
    slug: params.category,
    preview: draftMode().isEnabled,
  })

  if (!tokenCategoryPage) {
    return notFound()
  }
  return {
    title: tokenCategoryPage?.seoTitle,
    description: tokenCategoryPage?.seoDescription,
  }
}

async function TokenCategoryPage({ params }: TokenCategoryPageProps) {
  const categoryPages = await fetchTokenCategoryPages({
    preview: draftMode().isEnabled,
  })

  const tokenCategoryPageData = categoryPages.find(
    (page) => page.slug === params.category,
  )

  if (!tokenCategoryPageData) {
    return notFound()
  }

  const { category, description } = tokenCategoryPageData

  const newsArticlesPromise: Promise<NewsArticle[]> = fetchNewsArticles({
    category: category,
    preview: draftMode().isEnabled,
  })

  // fetch token pages from contentful where the entry contains the category (tag)
  const tokensForCategoryPromise: Promise<TokenPageWithData[]> =
    fetchTokenPagesForCategory({
      category,
      preview: draftMode().isEnabled,
    })

  const [newsArticles, tokensForCategory] = await Promise.all([
    newsArticlesPromise,
    tokensForCategoryPromise,
  ])

  // fetch mango token data for each token page
  const promises = tokensForCategory.map((token) =>
    fetchMangoTokenData(token.mint),
  )
  const mangoTokensData = await Promise.all(promises)

  return (
    <>
      <Category
        categoryPages={categoryPages}
        categoryPageData={tokenCategoryPageData}
        tokensForCategory={tokensForCategory}
        mangoTokensData={mangoTokensData}
      />
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
            </div>
          </div>
        </div>
      ) : null}
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

export default TokenCategoryPage
