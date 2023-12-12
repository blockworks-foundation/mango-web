import { draftMode } from 'next/headers'
import Link from 'next/link'
import SectionWrapper from '../../components/shared/SectionWrapper'
import { fetchBlogPosts } from '../../../contentful/blogPost'

async function BlogPage() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <SectionWrapper>
      <h1 className="text-5xl mb-10">Learn</h1>
      <ul>
        {blogPosts && blogPosts.length ? (
          blogPosts.map((blogPost) => {
            return (
              <li key={blogPost.slug}>
                <Link href={`/learn/${blogPost.slug}`}>
                  {blogPost.postTitle}
                </Link>
              </li>
            )
          })
        ) : (
          <div className="p-6 rounded-xl border border-th-bkg-3">
            <p className="text-center">Nothing to see here yet...</p>
          </div>
        )}
      </ul>
    </SectionWrapper>
  )
}

export default BlogPage
