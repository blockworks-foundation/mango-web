import { MetadataRoute } from 'next'
import { fetchContentfulTokenPages } from '../contentful/tokenPage'
import { fetchTokenCategoryPages } from '../contentful/tokenCategoryPage'
import { fetchBlogPosts } from '../contentful/blogPost'
import { fetchLearnPosts } from '../contentful/learnPost'

type Sitemap = {
  url: string
  lastModified: Date
}

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getCategorySlugs = async () => {
    const categoryPages = await fetchTokenCategoryPages({ preview: false })

    return categoryPages.map((page) => ({
      slug: page.slug,
      updated: page.lastModified,
    }))
  }
  const getTokenSlugs = async () => {
    const tokenPages = await fetchContentfulTokenPages({ preview: false })

    return tokenPages.map((page) => ({
      slug: page.slug,
      updated: page.lastModified,
    }))
  }
  const getBlogSlugs = async () => {
    const blogPosts = await fetchBlogPosts({ preview: false })

    return blogPosts.map((page) => ({
      slug: page.slug,
      updated: page.lastModified,
    }))
  }
  const getLearnSlugs = async () => {
    const learnPosts = await fetchLearnPosts({ preview: false })

    return learnPosts.map((page) => ({
      slug: page.slug,
      updated: page.lastModified,
    }))
  }
  const sitemap: Sitemap[] = []
  // Generate URLs and add them to the sitemap
  const tokenPageSlugsPromise = getTokenSlugs()
  const categoryPageSlugsPromise = getCategorySlugs()
  const blogPostSlugsPromise = getBlogSlugs()
  const learnPostSlugsPromise = getLearnSlugs()
  const [tokenPageSlugs, categoryPageSlugs, blogPostSlugs, learnPostSlugs] =
    await Promise.all([
      tokenPageSlugsPromise,
      categoryPageSlugsPromise,
      blogPostSlugsPromise,
      learnPostSlugsPromise,
    ])
  tokenPageSlugs.map((page) => {
    const url = `https://mango.markets/explore/tokens/${page.slug}`
    const lastModified = new Date(page.updated)
    sitemap.push({
      url,
      lastModified,
    })
  })
  categoryPageSlugs.map((page) => {
    const url = `https://mango.markets/explore/categories/${page.slug}`
    const lastModified = new Date(page.updated)
    sitemap.push({
      url,
      lastModified,
    })
  })
  blogPostSlugs.map((page) => {
    const url = `https://mango.markets/blog/${page.slug}`
    const lastModified = new Date(page.updated)
    sitemap.push({
      url,
      lastModified,
    })
  })
  learnPostSlugs.map((page) => {
    const url = `https://mango.markets/learn/${page.slug}`
    const lastModified = new Date(page.updated)
    sitemap.push({
      url,
      lastModified,
    })
  })

  async function getLastCommitDate(owner, repo, path) {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}`,
    )
    const data = await response.json()

    if (data.length > 0) {
      const lastCommitDate = data[0].commit.author.date
      return new Date(lastCommitDate).toISOString()
    }

    return null // no commits found
  }

  // get update time for other pages
  const owner = 'blockworks-foundation'
  const repo = 'mango-web'
  const path = '/'
  const lastUpdateData = await getLastCommitDate(owner, repo, path)

  const lastUpdate = lastUpdateData ? new Date(lastUpdateData) : new Date()

  // Add other urls to the sitemap
  sitemap.push(
    {
      url: 'https://mango.markets',
      lastModified: new Date(lastUpdate),
    },
    {
      url: 'https://mango.markets/explore/tokens',
      lastModified: new Date(lastUpdate),
    },
    {
      url: 'https://mango.markets/explore/categories',
      lastModified: new Date(lastUpdate),
    },
    {
      url: 'https://mango.markets/blog',
      lastModified: new Date(lastUpdate),
    },
    {
      url: 'https://mango.markets/learn',
      lastModified: new Date(lastUpdate),
    },
  )

  return sitemap
}

export default sitemap
