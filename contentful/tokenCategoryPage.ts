import { TypeTokenCategorySkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type TokenCategoryPageEntry = Entry<
  TypeTokenCategorySkeleton,
  undefined,
  string
>

export interface TokenCategoryPage {
  category: string
  slug: string
  description: RichTextDocument | undefined
  heroImage: ContentImage | null
  seoTitle: string | undefined
  seoDescription: string | undefined
  lastModified: string
}

export function parseContentfulTokenCategoryPage(
  tokenCategoryPageEntry?: TokenCategoryPageEntry,
): TokenCategoryPage | null {
  if (!tokenCategoryPageEntry) {
    return null
  }

  return {
    category: tokenCategoryPageEntry.fields.category,
    slug: tokenCategoryPageEntry.fields.slug,
    description: tokenCategoryPageEntry.fields.description || undefined,
    heroImage: parseContentfulContentImage(
      tokenCategoryPageEntry.fields.heroImage,
    ),
    seoTitle: tokenCategoryPageEntry.fields?.seoTitle || undefined,
    seoDescription: tokenCategoryPageEntry.fields?.seoDescription || undefined,
    lastModified: tokenCategoryPageEntry.sys.updatedAt,
  }
}

interface FetchTokenCategoryPagesOptions {
  preview: boolean
}

export async function fetchTokenCategoryPages({
  preview,
}: FetchTokenCategoryPagesOptions): Promise<TokenCategoryPage[]> {
  const contentful = contentfulClient({ preview })

  const tokenPagesResult =
    await contentful.getEntries<TypeTokenCategorySkeleton>({
      content_type: 'tokenCategory',
      include: 2,
      order: ['fields.category'],
    })

  const parsedTokenCategoryPages = tokenPagesResult.items.map(
    (tokenCategoryPageEntry) =>
      parseContentfulTokenCategoryPage(
        tokenCategoryPageEntry,
      ) as TokenCategoryPage,
  )
  return parsedTokenCategoryPages
}

interface FetchTokenCategoryPageOptions {
  slug: string
  preview: boolean
}
export async function fetchTokenCategoryPage({
  slug,
  preview,
}: FetchTokenCategoryPageOptions): Promise<TokenCategoryPage | null> {
  const contentful = contentfulClient({ preview })

  const tokenPageResult =
    await contentful.getEntries<TypeTokenCategorySkeleton>({
      content_type: 'tokenCategory',
      'fields.slug': slug,
      include: 2,
    })

  const parsedTokenPage = parseContentfulTokenCategoryPage(
    tokenPageResult.items[0],
  )

  if (parsedTokenPage) {
    return parsedTokenPage
  } else return null
}
