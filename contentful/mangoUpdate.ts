import { TypeMangoUpdateSkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type MangoUpdateEntry = Entry<TypeMangoUpdateSkeleton, undefined, string>

// Our simplified version of a MangoUpdate.
// We don't need all the data that Contentful gives us.
export interface MangoUpdate {
  postTitle: string
  postContent: RichTextDocument | undefined
  updateImage: ContentImage | null
  slug: string
  createdAt: string
  seoTitle: string | undefined
  seoDescription: string | undefined
  ctaTitle: string | undefined
  ctaDescription: string | undefined
  ctaUrl: string | undefined
  lastModified: string
  showOnHomePage: boolean | undefined
  shortenedTitle: string | undefined
  shortenedDescription: string
}

// A function to transform a Contentful blog post
// into our own MangoUpdate object.
export function parseContentfulMangoUpdate(
  mangoUpdateEntry?: MangoUpdateEntry,
): MangoUpdate | null {
  if (!mangoUpdateEntry) {
    return null
  }

  return {
    postTitle: mangoUpdateEntry.fields.postTitle || '',
    postContent: mangoUpdateEntry.fields.postContent || undefined,
    updateImage: parseContentfulContentImage(
      mangoUpdateEntry.fields.updateImage,
    ),
    slug: mangoUpdateEntry.fields.slug,
    createdAt: mangoUpdateEntry.sys.createdAt,
    seoTitle: mangoUpdateEntry.fields.seoTitle,
    seoDescription: mangoUpdateEntry.fields.seoDescription,
    ctaTitle: mangoUpdateEntry.fields.ctaTitle,
    ctaDescription: mangoUpdateEntry.fields.ctaDescription,
    ctaUrl: mangoUpdateEntry.fields.ctaUrl,
    lastModified: mangoUpdateEntry.sys.updatedAt,
    showOnHomePage: mangoUpdateEntry.fields.showOnHomePage,
    shortenedTitle: mangoUpdateEntry.fields.shortenedTitle,
    shortenedDescription: mangoUpdateEntry.fields.shortenedDescription,
  }
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchMangoUpdatesOptions {
  preview: boolean
}
export async function fetchMangoUpdates({
  preview,
}: FetchMangoUpdatesOptions): Promise<MangoUpdate[]> {
  const contentful = contentfulClient({ preview })

  const mangoUpdatesResult =
    await contentful.getEntries<TypeMangoUpdateSkeleton>({
      content_type: 'mangoUpdate',
      include: 2,
      order: ['-sys.createdAt'],
    })

  return mangoUpdatesResult.items.map(
    (mangoUpdateEntry) =>
      parseContentfulMangoUpdate(mangoUpdateEntry) as MangoUpdate,
  )
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchMangoUpdateOptions {
  slug: string
  preview: boolean
}
export async function fetchMangoUpdate({
  slug,
  preview,
}: FetchMangoUpdateOptions): Promise<MangoUpdate | null> {
  const contentful = contentfulClient({ preview })

  const mangoUpdatesResult =
    await contentful.getEntries<TypeMangoUpdateSkeleton>({
      content_type: 'mangoUpdate',
      'fields.slug': slug,
      include: 2,
    })

  return parseContentfulMangoUpdate(mangoUpdatesResult.items[0])
}
