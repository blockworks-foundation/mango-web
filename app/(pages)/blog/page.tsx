import { draftMode } from 'next/headers'
import { fetchBlogPosts } from '../../../contentful/blogPost'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import PageHeader from '../../components/explore/PageHeader'
import PostCard from '../../components/blog/PostCard'

async function BlogPage() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <>
      <PageHeader title="Mango Blog" />
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        {blogPosts && blogPosts.length ? (
          <div className="grid grid-cols-3 gap-6">
            {blogPosts.map((blogPost) => {
              return <PostCard blogPost={blogPost} key={blogPost.slug} />
            })}
          </div>
        ) : (
          <div className="p-6 rounded-xl border border-th-bkg-3">
            <p className="text-center">Nothing to see here yet...</p>
          </div>
        )}
      </div>
    </>
  )
}

export default BlogPage
