import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchTokenPagesForCategory } from '../../../../contentful/tokenPage'
import DataDisclaimer from '../../../components/explore/DataDisclaimer'
import {
  fetchTokenCategoryPage,
  fetchTokenCategoryPages,
} from '../../../../contentful/tokenCategoryPage'
import RichTextDisplay from '../../../components/shared/RichTextDisplay'
import { fetchMangoTokenData } from '../../../utils/mango'
import TokenTable from '../../../components/explore/TokenTable'
import CategorySwitcher from '../../../components/explore/CategorySwitcher'

const SECTION_WRAPPER_CLASSES = 'border-t border-th-bkg-3 pt-6 mt-12'

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

  const { category, description, slug } = tokenCategoryPageData

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
    <>
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-4xl mb-4 lg:mb-0">{`Explore ${category}`}</h1>
        <CategorySwitcher tokens={tokensForCategory} />
      </div>
      <TokenTable
        tokens={tokensForCategory}
        mangoTokensData={mangoTokensData}
        showTableView
        categorySlug={slug}
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

export default TokenCategoryPage
