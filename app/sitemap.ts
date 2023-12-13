import { MetadataRoute } from 'next'
import { fetchTokenPages } from '../contentful/tokenPage'

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getTokenSlugs = async () => {
    const tokenPages = await fetchTokenPages({ preview: false })

    return tokenPages.map((page) => ({
      slug: page.slug,
      updated: page.lastModified,
    }))
  }
  const tokenPageSlugs = await getTokenSlugs()
  // Generate URLs and add them to the sitemap
  const sitemap = tokenPageSlugs.map((page) => {
    const url = `https://mango.markets/explore/${page.slug}`
    const lastModified = new Date(page.updated)
    return {
      url,
      lastModified,
    }
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

    return null // No commits found
  }

  // get update time for other pages
  const owner = 'blockworks-foundation'
  const repo = 'mango-web'
  const path = '/'
  const lastUpdateData = await getLastCommitDate(owner, repo, path)

  const lastUpdate = lastUpdateData ? new Date(lastUpdateData) : new Date()

  // Add other URLs to the sitemap
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
