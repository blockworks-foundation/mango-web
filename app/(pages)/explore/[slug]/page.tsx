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
import TokenMarketStats from '../../../components/explore/token-page/TokenMarketStats'
import TokenAbout from '../../../components/explore/token-page/TokenAbout'
import { fetchMangoTokensData } from '../../../utils/mango'
import { MangoTokenData } from '../../../types/mango'
import Image from 'next/image'
import TokenMangoStats from '../../../components/explore/token-page/TokenMangoStats'
import ButtonLink from '../../../components/shared/ButtonLink'

const SECTION_WRAPPER_CLASSES = 'border-t border-th-bkg-3 pt-6 mt-20'

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

  const { birdeyeData, description, mint, symbol, tokenName } = tokenPageData

  const mangoTokensData = await fetchMangoTokensData()
  const mangoTokenData: MangoTokenData | undefined = mangoTokensData.find(
    (mangoToken) => mangoToken?.mint === mint,
  )

  // get price history for token price chart
  const queryEnd = Math.floor(Date.now() / 1000)
  const queryStart = queryEnd - 30 * DAILY_SECONDS
  const birdeyeQuery = `defi/history_price?address=${mint}&address_type=token&type=30m&time_from=${queryStart}&time_to=${queryEnd}`
  const birdeyePricesResponse = await makeApiRequest(birdeyeQuery)
  const birdeyePrices = birdeyePricesResponse?.data?.items?.length
    ? birdeyePricesResponse.data.items
    : []
  for (const data of birdeyePrices) {
    data.unixTime = data.unixTime * 1000
  }

  const hasCustomIcon = Object.keys(CUSTOM_TOKEN_ICONS).find(
    (icon) => icon === mangoTokenData?.symbol.toLowerCase(),
  )
  const logoPath = hasCustomIcon
    ? `/icons/tokens/${mangoTokenData?.symbol.toLowerCase()}.svg`
    : birdeyeData?.logoURI

  return (
    <div>
      <div className="mb-6 pb-6 border-b border-th-bkg-3 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <Image src={logoPath} alt="Logo" height={40} width={40} />
          <h1 className="text-4xl">
            {tokenName}{' '}
            <span className="text-xl font-body font-normal text-th-fgd-4">
              {symbol}
            </span>
          </h1>
        </div>
        <div className="flex space-x-3">
          <ButtonLink path="#" linkText="Swap" secondary />
          <ButtonLink path="#" linkText="Trade" secondary />
        </div>
      </div>
      <TokenPriceChart chartData={birdeyePrices} />
      <div className={SECTION_WRAPPER_CLASSES}>
        <h2 className="mb-4 text-2xl">Mango stats</h2>
        <TokenMangoStats mangoData={mangoTokenData} />
      </div>
      <div className={SECTION_WRAPPER_CLASSES}>
        <h2 className="mb-4 text-2xl">Market stats</h2>
        <TokenMarketStats tokenData={tokenPageData} />
      </div>
      <div className={SECTION_WRAPPER_CLASSES}>
        <h2 className="mb-4 text-2xl">{`About ${tokenName}`}</h2>
        <TokenAbout content={description} />
      </div>
    </div>
  )
}

export default TokenPage
