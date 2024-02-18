import { TypeLearnPostSkeleton } from './types'
import { Entry } from 'contentful'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type LearnPostEntry = Entry<TypeLearnPostSkeleton, undefined, string>

// Our simplified version of a LearnPost.
// We don't need all the data that Contentful gives us.
export interface LearnPost {
  postTitle: string
  postDescription: string
  postContent: RichTextDocument | undefined
  postHeroImage: ContentImage | null
  slug: string
  createdAt: string
  author: string | undefined
  authorProfileImage: ContentImage | null
  category: string
  seoTitle: string | undefined
  seoDescription: string | undefined
  metaImageUrl: string
  ctaTitle: string | undefined
  ctaDescription: string | undefined
  ctaUrl: string | undefined
  lastModified: string
}

// A function to transform a Contentful blog post
// into our own LearnPost object.
export function parseContentfulLearnPost(
  learnPostEntry?: LearnPostEntry,
): LearnPost | null {
  if (!learnPostEntry) {
    return null
  }

  return {
    postTitle: learnPostEntry.fields.postTitle || '',
    postDescription: learnPostEntry.fields.postDescription,
    postContent: learnPostEntry.fields.postContent || undefined,
    postHeroImage: parseContentfulContentImage(
      learnPostEntry.fields.postHeroImage,
    ),
    slug: learnPostEntry.fields.slug,
    createdAt: learnPostEntry.sys.createdAt,
    author: learnPostEntry.fields.author,
    authorProfileImage: parseContentfulContentImage(
      learnPostEntry.fields.authorProfileImage,
    ),
    category: learnPostEntry.fields.category,
    seoTitle: learnPostEntry.fields.seoTitle,
    seoDescription: learnPostEntry.fields.seoDescription,
    metaImageUrl: learnPostEntry.fields.metaImageUrl,
    ctaTitle: learnPostEntry.fields.ctaTitle,
    ctaDescription: learnPostEntry.fields.ctaDescription,
    ctaUrl: learnPostEntry.fields.ctaUrl,
    lastModified: learnPostEntry.sys.updatedAt,
  }
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchLearnPostsOptions {
  preview: boolean
}
export async function fetchLearnPosts({
  preview,
}: FetchLearnPostsOptions): Promise<LearnPost[]> {
  const contentful = contentfulClient({ preview })

  const learnPostsResult = await contentful.getEntries<TypeLearnPostSkeleton>({
    content_type: 'learnPost',
    include: 2,
    order: ['-sys.createdAt'],
  })

  return learnPostsResult.items.map(
    (learnPostEntry) => parseContentfulLearnPost(learnPostEntry) as LearnPost,
  )
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchLearnPostOptions {
  slug: string
  preview: boolean
}
export async function fetchLearnPost({
  slug,
  preview,
}: FetchLearnPostOptions): Promise<LearnPost | null> {
  const contentful = contentfulClient({ preview })

  const learnPostsResult = await contentful.getEntries<TypeLearnPostSkeleton>({
    content_type: 'learnPost',
    'fields.slug': slug,
    include: 2,
  })

  return parseContentfulLearnPost(learnPostsResult.items[0])
}
