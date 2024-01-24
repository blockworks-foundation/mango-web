import { TypeTokenSkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { makeApiRequest } from '../app/utils/birdeye'
import {
  BirdeyeOverviewData,
  BirdeyePriceHistoryData,
} from '../app/types/birdeye'
import { DAILY_SECONDS } from '../app/utils/constants'

type TokenPageEntry = Entry<TypeTokenSkeleton, undefined, string>

export interface TokenPage {
  tokenName: string
  symbol: string
  slug: string
  description: RichTextDocument | undefined
  tags: string[]
  websiteUrl?: string
  twitterUrl?: string
  mint: string
  ethMint: string | undefined
  coingeckoId: string
  seoTitle: string
  seoDescription: string
  perpSymbol: string | undefined
  spotSymbol: string
  lastModified: string
}

export interface TokenPageWithData extends TokenPage {
  birdeyeData: BirdeyeOverviewData
  birdeyeEthData?: BirdeyeOverviewData
  birdeyePrices?: BirdeyePriceHistoryData[]
}

export function parseContentfulTokenPage(
  tokenPageEntry?: TokenPageEntry,
): TokenPage | null {
  if (!tokenPageEntry) {
    return null
  }

  return {
    tokenName: tokenPageEntry.fields.tokenName,
    symbol: tokenPageEntry.fields.symbol,
    slug: tokenPageEntry.fields.slug,
    description: tokenPageEntry.fields.description || undefined,
    tags: tokenPageEntry.fields.tags || [],
    websiteUrl: tokenPageEntry.fields.websiteUrl || undefined,
    twitterUrl: tokenPageEntry.fields.twitterUrl || undefined,
    mint: tokenPageEntry.fields.mint,
    ethMint: tokenPageEntry.fields.ethMint || undefined,
    coingeckoId: tokenPageEntry.fields.coingeckoId,
    seoTitle: tokenPageEntry.fields.seoTitle,
    seoDescription: tokenPageEntry.fields.seoDescription,
    perpSymbol: tokenPageEntry.fields.perpSymbol || undefined,
    spotSymbol: tokenPageEntry.fields.spotSymbol,
    lastModified: tokenPageEntry.sys.updatedAt,
  }
}

interface FetchTokenPagesOptions {
  preview: boolean
}

const fetchBirdEyeData = async (address: string, chain?: string) => {
  const response = await makeApiRequest(
    `defi/token_overview?address=${address}`,
    chain,
  )
  return response?.success ? response?.data : undefined
}

async function fetchDataForToken(tokenPage) {
  // birdeye overview data
  const birdeyeData = await fetchBirdEyeData(tokenPage.mint)
  const birdeyeEthData = tokenPage?.ethMint
    ? await fetchBirdEyeData(tokenPage.ethMint, 'ethereum')
    : undefined

  // birdeye 24h price data
  const queryEnd = Math.floor(Date.now() / 1000)
  const queryStart = queryEnd - DAILY_SECONDS
  const birdeyeQuery = `defi/history_price?address=${tokenPage.mint}&address_type=token&type=1H&time_from=${queryStart}&time_to=${queryEnd}`
  const birdeyePricesResponse = await makeApiRequest(birdeyeQuery)
  const birdeyePrices =
    birdeyePricesResponse?.data?.items?.map((data) => ({
      ...data,
      unixTime: data.unixTime * 1000,
    })) || []

  return { ...tokenPage, birdeyeData, birdeyePrices, birdeyeEthData }
}

export async function fetchTokenPages({
  preview,
}: FetchTokenPagesOptions): Promise<TokenPageWithData[]> {
  const contentful = contentfulClient({ preview })

  const tokenPagesResult = await contentful.getEntries<TypeTokenSkeleton>({
    content_type: 'token',
    include: 2,
    order: ['fields.tokenName'],
  })

  const parsedTokenPages = tokenPagesResult.items.map(
    (tokenPageEntry) => parseContentfulTokenPage(tokenPageEntry) as TokenPage,
  )

  async function fetchAllDataForTokens(parsedTokenPages) {
    const fetchPromises = parsedTokenPages.map((tokenPage) =>
      fetchDataForToken(tokenPage),
    )

    const tokenPagesWithData = await Promise.all(fetchPromises)

    return tokenPagesWithData
  }

  const tokenPagesWithData = await fetchAllDataForTokens(parsedTokenPages)

  return tokenPagesWithData
}

interface FetchTokenPageOptions {
  slug: string
  preview: boolean
}
export async function fetchTokenPage({
  slug,
  preview,
}: FetchTokenPageOptions): Promise<TokenPageWithData | null> {
  const contentful = contentfulClient({ preview })

  const tokenPageResult = await contentful.getEntries<TypeTokenSkeleton>({
    content_type: 'token',
    'fields.slug': slug,
    include: 2,
  })

  const parsedTokenPage = parseContentfulTokenPage(tokenPageResult.items[0])

  if (parsedTokenPage) {
    const birdeyeData = await fetchBirdEyeData(parsedTokenPage.mint)
    const birdeyeEthData = parsedTokenPage?.ethMint
      ? await fetchBirdEyeData(parsedTokenPage.ethMint, 'ethereum')
      : undefined

    return { ...parsedTokenPage, birdeyeData, birdeyeEthData }
  } else return null
}

interface FetchTokenCategoryPageOptions {
  category: string
  preview: boolean
}
export async function fetchTokenPagesForCategory({
  category,
  preview,
}: FetchTokenCategoryPageOptions): Promise<TokenPageWithData[]> {
  const contentful = contentfulClient({ preview })

  const tokenPagesResult = await contentful.getEntries({
    content_type: 'token',
    'fields.tags[in]': category,
    include: 2,
    order: ['fields.tokenName'],
  })

  const parsedTokenPages = tokenPagesResult.items.map(
    (tokenPageEntry) =>
      parseContentfulTokenPage(tokenPageEntry as TokenPageEntry) as TokenPage,
  )

  async function fetchAllDataForTokens(parsedTokenPages) {
    const fetchPromises = parsedTokenPages.map((tokenPage) =>
      fetchDataForToken(tokenPage),
    )

    const tokenPagesWithData = await Promise.all(fetchPromises)

    return tokenPagesWithData
  }

  const tokenPagesWithData = await fetchAllDataForTokens(parsedTokenPages)

  return tokenPagesWithData
}
