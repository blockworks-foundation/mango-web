import { MetadataRoute } from 'next'
import { fetchTokenPages } from '../contentful/tokenPage'
import { fetchTokenCategoryPages } from '../contentful/tokenCategoryPage'

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
    const tokenPages = await fetchTokenPages({ preview: false })

    return tokenPages.map((page) => ({
      slug: page.slug,
      tags: page.tags,
      updated: page.lastModified,
    }))
  }
  const tokenPageSlugs = await getTokenSlugs()
  const sitemap: Sitemap[] = []
  // Generate URLs and add them to the sitemap
  tokenPageSlugs.map((page) => {
    for (const tag of page.tags) {
      const categorySlug = tag
        .toLowerCase() // convert to lowercase
        .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-') // replace consecutive hyphens with a single hyphen
      const url = `https://mango.markets/explore/${categorySlug}/${page.slug}`
      const lastModified = new Date(page.updated)
      sitemap.push({
        url,
        lastModified,
      })
    }
  })
  const categoryPageSlugs = await getCategorySlugs()
  categoryPageSlugs.map((page) => {
    const url = `https://mango.markets/explore/${page.slug}`
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
      url: 'https://mango.markets/explore',
      lastModified: new Date(lastUpdate),
    },
  )

  return sitemap
}

export default sitemap
