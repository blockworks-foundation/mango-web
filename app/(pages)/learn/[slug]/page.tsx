import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  fetchLearnPost,
  fetchLearnPosts,
} from '../../../../contentful/learnPost'
import RichText from '../../../components/rich-text/RichText'
import PostDetails from '../../../components/blog/PostDetails'
import PageHeader from '../../../components/explore/PageHeader'
import AppCallToAction from '../../../components/shared/AppCallToAction'

interface LearnPostPageParams {
  slug: string
}

interface LearnPostPageProps {
  params: LearnPostPageParams
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<LearnPostPageParams[]> {
  const learnPosts = await fetchLearnPosts({ preview: false })

  return learnPosts.map((post) => ({ slug: post.slug }))
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: LearnPostPageProps,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const learnPost = await fetchLearnPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!learnPost) {
    return notFound()
  }

  return {
    title: learnPost?.seoTitle || learnPost.postTitle,
    description: learnPost?.seoDescription || learnPost.postDescription,
    openGraph: {
      title: learnPost?.seoTitle || learnPost.postTitle,
      description: learnPost?.seoDescription || learnPost.postDescription,
      url: `https://mango.markets/blog/${learnPost.slug}`,
      siteName: 'Mango Markets',
      images: [
        {
          url: learnPost.metaImageUrl, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}

// The actual LearnPostPage component.
async function LearnPostPage({ params }: LearnPostPageProps) {
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const learnPost = await fetchLearnPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!learnPost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound()
  }

  const {
    category,
    postTitle,
    postContent,
    ctaTitle,
    ctaDescription,
    ctaUrl,
    slug,
  } = learnPost

  const ctaData = { ctaTitle, ctaDescription, ctaUrl }
  const headerImageUrl = `/images/learn/${slug}.png`

  return (
    <>
      <PageHeader
        backgroundImageUrl={headerImageUrl}
        title={postTitle}
        tag={category}
        showBack
      />
      <div className="px-6 lg:px-20 pb-10 md:pb-16 max-w-3xl mx-auto">
        <PostDetails post={learnPost} isLearn />
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

export default LearnPostPage
