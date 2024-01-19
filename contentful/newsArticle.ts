import { TypeNewsArticleSkeleton } from './types'
import { Entry } from 'contentful'
import contentfulClient from './contentfulClient'

type NewsArticleEntry = Entry<TypeNewsArticleSkeleton, undefined, string>

// Our simplified version of a NewsArticle.
// We don't need all the data that Contentful gives us.
export interface NewsArticle {
  title: string
  articleUrl: string
  imageUrl: string | undefined
  sourceSiteName: string
  datePublished: string
  categories: string[]
}

// A function to transform a Contentful blog post
// into our own NewsArticle object.
export function parseContentfulNewsArticle(
  newsArticleEntry?: NewsArticleEntry,
): NewsArticle | null {
  if (!newsArticleEntry) {
    return null
  }

  return {
    title: newsArticleEntry.fields.title || '',
    articleUrl: newsArticleEntry.fields.articleUrl,
    imageUrl: newsArticleEntry.fields.imageUrl || '',
    sourceSiteName: newsArticleEntry.fields.sourceSiteName,
    datePublished: newsArticleEntry.fields.datePublished,
    categories: newsArticleEntry.fields.categories,
  }
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchNewsArticlesOptions {
  preview: boolean
  category: any
  limit: number
  skip: number
}
export async function fetchNewsArticles({
  preview,
  category,
  limit,
  skip,
}: FetchNewsArticlesOptions): Promise<NewsArticle[]> {
  const contentful = contentfulClient({ preview })

  const newsArticlesResult =
    await contentful.getEntries<TypeNewsArticleSkeleton>({
      content_type: 'newsArticle',
      include: 2,
      'fields.categories[in]': category,
      limit: limit,
      skip: skip,
    })

  return newsArticlesResult.items.map(
    (newsArticleEntry) =>
      parseContentfulNewsArticle(newsArticleEntry) as NewsArticle,
  )
}
