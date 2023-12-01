import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  fetchTokenPage,
  fetchTokenPages,
} from '../../../../contentful/tokenPage'
import { makeApiRequest } from '../../../utils/birdeye'
import { CUSTOM_TOKEN_ICONS, DAILY_SECONDS } from '../../../utils/constants'
import TokenPriceChart from '../../../components/explore/token-page/TokenPriceChart'
import TokenAbout from '../../../components/explore/token-page/TokenAbout'
import { fetchMangoTokenData } from '../../../utils/mango'
import { MangoTokenData } from '../../../types/mango'
import Image from 'next/image'
import TokenMangoStats from '../../../components/explore/token-page/TokenMangoStats'
import ButtonLink from '../../../components/shared/ButtonLink'
import { fetchCoingeckoData } from '../../../utils/coingecko'
import { CoingeckoData } from '../../../types/coingecko'
import DailyRange from '../../../components/explore/token-page/DailyRange'
import { BirdeyePriceHistoryResponse } from '../../../types/birdeye'
import Links from '../../../components/explore/token-page/Links'
import MarketStats from '../../../components/explore/token-page/MarketStats'

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
  const mangoTokenData: MangoTokenData | undefined =
    await fetchMangoTokenData(mint)

  // get coingecko token data
  const coingeckoData: CoingeckoData | undefined =
    await fetchCoingeckoData(coingeckoId)

  // get token security info from birdeye
  //   const birdeyeSecurityDataResponse = await makeApiRequest(
  //     `defi/token_security?address=${tokenPageData.mint}`,
  //   )
  //   const birdeyeSecurityData = birdeyeSecurityDataResponse?.success
  //     ? birdeyeSecurityDataResponse?.data
  //     : undefined

  // get price history for token price chart
  const queryEnd = Math.floor(Date.now() / 1000)
  const queryStart = queryEnd - 30 * DAILY_SECONDS
  const birdeyeQuery = `defi/history_price?address=${mint}&address_type=token&type=30m&time_from=${queryStart}&time_to=${queryEnd}`
  const birdeyePricesResponse: BirdeyePriceHistoryResponse =
    await makeApiRequest(birdeyeQuery)
  const birdeyePrices = birdeyePricesResponse?.data?.items?.length
    ? birdeyePricesResponse.data.items
    : []
  for (const data of birdeyePrices) {
    data.unixTime = data.unixTime * 1000
  }

  const hasCustomIcon = Object.keys(CUSTOM_TOKEN_ICONS).find(
    (icon) => icon === mangoTokenData?.symbol?.toLowerCase(),
  )
  const logoPath = hasCustomIcon
    ? `/icons/tokens/${mangoTokenData?.symbol.toLowerCase()}.svg`
    : birdeyeData?.logoURI

  const high24h = coingeckoData?.market_data?.high_24h?.usd
  const low24h = coingeckoData?.market_data?.low_24h?.usd
  const currentPrice = birdeyePrices?.length
    ? birdeyePrices[birdeyePrices.length - 1]?.value
    : 0

  return (
    <div>
      <div className="pb-6 border-b border-th-bkg-3 flex items-end justify-between">
        <div className="flex items-center space-x-3.5">
          <Image src={logoPath} alt="Logo" height={56} width={56} />
          <div>
            <h1 className="mb-1 text-4xl">
              {tokenName}{' '}
              <span className="text-xl font-body font-normal text-th-fgd-4">
                {symbol}
              </span>
            </h1>
            <DailyRange high={high24h} low={low24h} price={currentPrice} />
          </div>
        </div>
        <div className="flex space-x-3">
          <Links birdeyeData={birdeyeData} />
          <ButtonLink path="#" linkText="Swap" secondary />
          <ButtonLink path="#" linkText="Trade" secondary />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 border-b border-th-bkg-3">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 py-6">
          <TokenPriceChart chartData={birdeyePrices} />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 space-y-4 bg-[rgba(255,255,255,0.04)] p-6">
          <h2 className="text-base mb-2">Stats</h2>
          <MarketStats
            coingeckoData={coingeckoData}
            volume={birdeyeData?.v24hUSD}
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="mb-4 text-2xl">{`${tokenName} on Mango`}</h2>
        <TokenMangoStats mangoData={mangoTokenData} />
      </div>
      {/* <div className={SECTION_WRAPPER_CLASSES}>
        <h2 className="mb-4 text-2xl">Safety</h2>
        <TokenStats
          tokenData={tokenPageData}
          securityData={birdeyeSecurityData}
        />
      </div> */}
      <div className={SECTION_WRAPPER_CLASSES}>
        <h2 className="mb-4 text-2xl">{`About ${tokenName}`}</h2>
        <TokenAbout content={description} />
      </div>
    </div>
  )
}

export default TokenPage
