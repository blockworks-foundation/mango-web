import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  fetchTokenPage,
  fetchTokenPages,
} from '../../../../contentful/tokenPage'
import { makeApiRequest } from '../../../utils/birdeye'
import { DAILY_SECONDS } from '../../../utils/constants'
import TokenPriceChart from '../../../components/explore/TokenPriceChart'
import TokenMarketStats from '../../../components/explore/TokenMarketStats'

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

  // get price history for token price chart
  const queryEnd = Math.floor(Date.now() / 1000)
  const queryStart = queryEnd - 30 * DAILY_SECONDS
  const birdeyeQuery = `defi/history_price?address=${tokenPageData.mint}&address_type=token&type=30m&time_from=${queryStart}&time_to=${queryEnd}`
  const birdeyePricesResponse = await makeApiRequest(birdeyeQuery)
  const birdeyePrices = birdeyePricesResponse?.data?.items?.length
    ? birdeyePricesResponse.data.items
    : []
  for (const data of birdeyePrices) {
    data.unixTime = data.unixTime * 1000
  }

  //   const hasCustomIcon = CUSTOM_TOKEN_ICONS[tokenPageData.symbol.toLowerCase()]
  //           const logoPath = hasCustomIcon
  //             ? `/icons/tokens/${mangoSymbol.toLowerCase()}.svg`
  //             : birdeyeData?.logoURI

  return (
    <div>
      <div className="mb-4 pb-4 border-b border-th-bkg-3 flex items-center">
        <h1 className="text-4xl">
          {tokenPageData.tokenName}{' '}
          <span className="text-xl font-body font-normal text-th-fgd-4">
            {tokenPageData.symbol}
          </span>
        </h1>
      </div>
      <TokenPriceChart chartData={birdeyePrices} />
      <h2 className="mb-4 text-2xl">Mango stats</h2>
      <TokenMarketStats tokenData={tokenPageData} />
      <h2 className="mb-4 text-2xl">{`About ${tokenPageData.tokenName}`}</h2>
    </div>
  )
}

export default TokenPage
