import { TypeTokenSkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { makeApiRequest } from '../app/utils/birdeye'

type TokenPageEntry = Entry<TypeTokenSkeleton, undefined, string>

export interface TokenPage {
  tokenName: string
  symbol: string
  slug: string
  description: RichTextDocument | null
  tags: string[]
  websiteUrl?: string
  twitterUrl?: string
  mint: string
  coingeckoId: string
}

interface BirdeyeData {
  price: number
  priceChange24hPercent: number
}

export interface TokenPageWithData extends TokenPage {
  birdeyeData: BirdeyeData
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
    description: tokenPageEntry.fields.description || null,
    tags: tokenPageEntry.fields.tags || [],
    websiteUrl: tokenPageEntry.fields.websiteUrl || undefined,
    twitterUrl: tokenPageEntry.fields.twitterUrl || undefined,
    mint: tokenPageEntry.fields.mint,
    coingeckoId: tokenPageEntry.fields.coingeckoId,
  }
}

interface FetchTokenPagesOptions {
  preview: boolean
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

  const tokenPagesWithData: TokenPageWithData[] = []
  for (const tokenPage of parsedTokenPages) {
    const birdeyeDataResponse = await makeApiRequest(
      `defi/token_overview?address=${tokenPage.mint}`,
    )
    const birdeyeData = birdeyeDataResponse?.success
      ? birdeyeDataResponse?.data
      : undefined
    tokenPagesWithData.push({ ...tokenPage, birdeyeData: birdeyeData })
  }
  return tokenPagesWithData
}

interface FetchTokenPageOptions {
  slug: string
  preview: boolean
}
export async function fetchTokenPage({
  slug,
  preview,
}: FetchTokenPageOptions): Promise<TokenPage | null> {
  const contentful = contentfulClient({ preview })

  const blogPostsResult = await contentful.getEntries<TypeTokenSkeleton>({
    content_type: 'token',
    'fields.slug': slug,
    include: 2,
  })

  return parseContentfulTokenPage(blogPostsResult.items[0])
}
