import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '../../../../contentful/blogPost'
import RichText from '../../../components/rich-text/RichText'
import { MAX_CONTENT_WIDTH } from '../../../utils/constants'
import BackButton from '../../../components/shared/BackButton'
import { CalendarIcon } from '@heroicons/react/20/solid'

interface BlogPostPageParams {
  slug: string
}

interface BlogPostPageProps {
  params: BlogPostPageParams
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false })

  return blogPosts.map((post) => ({ slug: post.slug }))
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: BlogPostPageProps,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!blogPost) {
    return notFound()
  }

  return {
    title: blogPost?.seoTitle || blogPost.postTitle,
    description: blogPost?.seoDescription || blogPost.postDescription,
  }
}

// The actual BlogPostPage component.
async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!blogPost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound()
  }

  const backgroundImageUrl = '/images/new/cube-bg.png'

  const { postTitle, postDescription, postContent, createdAt } = blogPost

  return (
    <>
      <div
        className={`flex flex-col items-start justify-between h-[264px] py-6`}
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className={`${MAX_CONTENT_WIDTH} w-full mx-auto px-6 lg:px-20`}>
          <BackButton />
        </div>
        <div className={`${MAX_CONTENT_WIDTH} mx-auto`}>
          <div className="bg-[rgba(21,19,27,0.8)] px-3 py-1">
            <h1 className="text-4xl">{postTitle}</h1>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-20 pt-6 pb-10 md:pb-16 max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-xl text-th-fgd-2 mb-1">{postDescription}</p>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-th-fgd-4" />
            <p>{createdAt}</p>
          </div>
        </div>
        <RichText document={postContent} />
      </div>
    </>
  )
}

export default BlogPostPage
