import { draftMode } from 'next/headers'
import { fetchLearnPosts } from '../../../contentful/learnPost'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import PageHeader from '../../components/explore/PageHeader'
import PostCard from '../../components/blog/PostCard'

async function LearnPage() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const learnPosts = await fetchLearnPosts({ preview: draftMode().isEnabled })

  return (
    <>
      <PageHeader title="Learn" />
      <div
        className={`px-6 lg:px-20 ${MAX_CONTENT_WIDTH} mx-auto py-10 md:py-16`}
      >
        {learnPosts && learnPosts.length ? (
          <div className="grid grid-cols-3 gap-6">
            {learnPosts.map((learnPost) => {
              return (
                <PostCard
                  blogPost={learnPost}
                  key={learnPost.slug}
                  type="learn"
                />
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

export default LearnPage
