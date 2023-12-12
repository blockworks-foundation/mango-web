import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  fetchTokenPage,
  fetchTokenPages,
} from '../../../../contentful/tokenPage'
import { CUSTOM_TOKEN_ICONS } from '../../../utils/constants'
import TokenAbout from '../../../components/explore/token-page/TokenAbout'
import { fetchMangoMarketData, fetchMangoTokenData } from '../../../utils/mango'
import { MangoMarketsData, MangoTokenData } from '../../../types/mango'
import Image from 'next/image'
import TokenMangoStats from '../../../components/explore/token-page/TokenMangoStats'
import { fetchCoingeckoData } from '../../../utils/coingecko'
import { CoingeckoData } from '../../../types/coingecko'
import DailyRange from '../../../components/explore/token-page/DailyRange'
import Links from '../../../components/explore/token-page/Links'
import TokenInfo from '../../../components/explore/token-page/TokenInfo'
import dynamic from 'next/dynamic'
import DataDisclaimer from '../../../components/explore/DataDisclaimer'
const TokenPriceChart = dynamic(
  () => import('../../../components/explore/token-page/TokenPriceChart'),
  { ssr: false },
)

const SECTION_WRAPPER_CLASSES = 'border-t border-th-bkg-3 pt-6 mt-12'

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

  const { birdeyeData, coingeckoId, description, mint, symbol, tokenName } =
    tokenPageData

  // get mango specific token data
  const mangoTokenDataPromise: Promise<MangoTokenData> =
    fetchMangoTokenData(mint)

  // get data on all markets listed on mango
  const mangoMarketsDataPromise: Promise<MangoMarketsData> =
    fetchMangoMarketData()

  // get coingecko token data
  const coingeckoDataPromise: Promise<CoingeckoData> =
    fetchCoingeckoData(coingeckoId)

  // Wait for the promises to resolve
  const [mangoTokenData, mangoMarketsData, coingeckoData] = await Promise.all([
    mangoTokenDataPromise,
    mangoMarketsDataPromise,
    coingeckoDataPromise,
  ])

  const hasCustomIcon = Object.keys(CUSTOM_TOKEN_ICONS).find(
    (icon) => icon === mangoTokenData?.symbol?.toLowerCase(),
  )
  const logoPath = hasCustomIcon
    ? `/icons/tokens/${mangoTokenData?.symbol.toLowerCase()}.svg`
    : birdeyeData?.logoURI

  const high24h = coingeckoData?.market_data?.high_24h?.usd
  const low24h = coingeckoData?.market_data?.low_24h?.usd
  const currentPrice = coingeckoData?.market_data?.current_price?.usd
  const lastUpdated = coingeckoData?.last_updated
  const latestChartData =
    currentPrice && lastUpdated
      ? [{ unixTime: new Date(lastUpdated).getTime(), value: currentPrice }]
      : []

  return (
    <div>
      <div className="pb-6 border-b border-th-bkg-3 flex flex-col-reverse md:flex-row md:items-end md:justify-between">
        <div className="flex items-center space-x-3.5 w-full">
          <Image src={logoPath} alt="Logo" height={56} width={56} />
          <div className="w-full">
            <h1 className="mb-1 text-4xl">
              {tokenName}{' '}
              <span className="text-xl font-body font-normal text-th-fgd-4">
                {symbol}
              </span>
            </h1>
            <DailyRange high={high24h} low={low24h} price={currentPrice} />
          </div>
        </div>
        <div className="flex justify-end">
          <Links birdeyeData={birdeyeData} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 border-b border-th-bkg-3">
        <div className="col-span-12 lg:col-span-8 py-6">
          <TokenPriceChart latestChartData={latestChartData} mint={mint} />
        </div>
        <div className="col-span-12 lg:col-span-4 bg-th-bkg-2 p-6 rounded-xl lg:rounded-none">
          <TokenInfo
            coingeckoData={coingeckoData}
            tokenPageData={tokenPageData}
            volume={birdeyeData?.v24hUSD}
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="mb-4 text-2xl">{`${tokenName} on Mango`}</h2>
        <TokenMangoStats
          mangoData={mangoTokenData}
          mangoMarketsData={mangoMarketsData}
          tokenPageData={tokenPageData}
        />
      </div>
      {description ? (
        <div className={SECTION_WRAPPER_CLASSES}>
          <h2 className="mb-4 text-2xl">{`About ${tokenName}`}</h2>
          <TokenAbout content={description} />
        </div>
      ) : null}
      <DataDisclaimer />
    </div>
  )
}

export default TokenPage
