import { draftMode } from 'next/headers'
import Link from 'next/link'
import { fetchBlogPosts } from '../../../contentful/blogPost'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'

async function BlogPage() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <>
      <div
        className={`flex flex-col items-start justify-end h-[264px] bg-[url('/images/new/cube-bg.png')] bg-repeat`}
      >
        <div className={`${MAX_CONTENT_WIDTH} mx-auto`}>
          <div className="bg-[rgba(0,0,0,0.8)] px-3 py-1 mb-6 mx-6 sm:mx-0">
            <h1 className="text-4xl">Learn</h1>
          </div>
        </div>
      </div>
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        {blogPosts && blogPosts.length ? (
          <div className="grid grid-cols-4 gap-6">
            {blogPosts.map((blogPost) => {
              const { postTitle, postDescription, slug } = blogPost
              const imgSrc = '/images/new/cube-bg.png'
              return (
                <div
                  className="col-span-4 sm:col-span-2 lg:col-span-1 border border-th-bkg-3 rounded-xl group relative"
                  key={slug}
                >
                  <Link href={`/learn/${slug}`}>
                    <div className="overflow-hidden rounded-t-xl">
                      <div
                        className={`h-[200px] lg:h-[140px] transition-transform transform md:group-hover:scale-105 duration-300`}
                        style={{ backgroundImage: `url('${imgSrc}')` }}
                      />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-th-fgd-2 font-display mb-1">
                        {postTitle}
                      </p>
                      <p>{postDescription}</p>
                    </div>
                  </Link>
                </div>
              )
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
