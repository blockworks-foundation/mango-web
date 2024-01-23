import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '../../../../contentful/blogPost'
import RichText from '../../../components/rich-text/RichText'
import PostDetails from '../../../components/blog/PostDetails'
import PageHeader from '../../../components/explore/PageHeader'
import AppCallToAction from '../../../components/shared/AppCallToAction'

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

  const { category, postTitle, postContent, ctaTitle, ctaDescription, ctaUrl } =
    blogPost

  const ctaData = { ctaTitle, ctaDescription, ctaUrl }

  return (
    <>
      <PageHeader title={postTitle} tag={category} showBack />
      <div className="px-6 lg:px-20 pb-10 md:pb-16 max-w-3xl mx-auto">
        <PostDetails post={blogPost} />
        <RichText document={postContent} />
        {ctaData?.ctaUrl ? (
          <div className="pt-6">
            <AppCallToAction data={ctaData} />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default BlogPostPage
