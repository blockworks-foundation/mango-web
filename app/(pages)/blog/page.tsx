import { draftMode } from 'next/headers'
import Link from 'next/link'
import { fetchBlogPosts } from '../../contentful/blogPost'

async function BlogPage() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <div>
      <h1>My Contentful Blog</h1>
      <ul>
        {blogPosts.map((blogPost) => {
          return (
            <li key={blogPost.slug}>
              <Link href={`/${blogPost.slug}`}>{blogPost.postTitle}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogPage
