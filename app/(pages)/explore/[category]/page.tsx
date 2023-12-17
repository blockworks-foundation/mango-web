import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchTokenPagesForCategory } from '../../../../contentful/tokenPage'
import {
  fetchTokenCategoryPage,
  fetchTokenCategoryPages,
} from '../../../../contentful/tokenCategoryPage'
import { fetchMangoTokenData } from '../../../utils/mango'
import Category from '../../../components/explore/Category'

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
  const tokenCategoryPageData = await fetchTokenCategoryPage({
    slug: params.category,
    preview: draftMode().isEnabled,
  })

  if (!tokenCategoryPageData) {
    return notFound()
  }

  const { category } = tokenCategoryPageData

  // fetch token pages from contentful where the entry contains the category (tag)
  const tokensForCategory = await fetchTokenPagesForCategory({
    category,
    preview: draftMode().isEnabled,
  })

  // fetch mango token data for each token page
  const promises = tokensForCategory.map((token) =>
    fetchMangoTokenData(token.mint),
  )
  const mangoTokensData = await Promise.all(promises)

  return (
    <Category
      categoryPageData={tokenCategoryPageData}
      tokensForCategory={tokensForCategory}
      mangoTokensData={mangoTokensData}
    />
  )
}

export default TokenCategoryPage
