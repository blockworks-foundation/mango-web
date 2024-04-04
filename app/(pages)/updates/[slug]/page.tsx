import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import {
  fetchMangoUpdate,
  fetchMangoUpdates,
} from '../../../../contentful/mangoUpdate'
import RichText from '../../../components/rich-text/RichText'
import AppCallToAction from '../../../components/shared/AppCallToAction'
import PageHeader from '../../../components/explore/PageHeader'
import dayjs from 'dayjs'

interface MangoUpdatePageParams {
  slug: string
}

interface MangoUpdatePageProps {
  params: MangoUpdatePageParams
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<MangoUpdatePageParams[]> {
  const mangoUpdates = await fetchMangoUpdates({ preview: false })

  return mangoUpdates.map((post) => ({ slug: post.slug }))
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: MangoUpdatePageProps,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const mangoUpdate = await fetchMangoUpdate({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!mangoUpdate) {
    return notFound()
  }

  return {
    title: mangoUpdate?.seoTitle || mangoUpdate.postTitle,
    description: mangoUpdate?.seoDescription,
    openGraph: {
      title: mangoUpdate?.seoTitle || mangoUpdate.postTitle,
      description: mangoUpdate?.seoDescription,
      url: `https://mango.markets/blog/${mangoUpdate.slug}`,
      siteName: 'Mango Markets',
      locale: 'en_US',
      type: 'website',
    },
  }
}

async function MangoUpdatePage({ params }: MangoUpdatePageProps) {
  const mangoUpdate = await fetchMangoUpdate({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!mangoUpdate) {
    return notFound()
  }

  const {
    postTitle,
    postContent,
    ctaTitle,
    ctaDescription,
    ctaUrl,
    createdAt,
  } = mangoUpdate

  const ctaData = { ctaTitle, ctaDescription, ctaUrl }

  return (
    <>
      <PageHeader
        title={postTitle}
        tag={dayjs(createdAt).format('DD MMM YYYY')}
        showBack
      />
      <div
        className={`px-6 lg:px-20 pt-6 md:pt-10 pb-10 md:pb-16 max-w-3xl mx-auto`}
      >
        <div className="flex flex-col md:flex-row md:justify-center">
          <div>
            <RichText document={postContent} />
            {ctaData?.ctaUrl ? (
              <div className="pt-6">
                <AppCallToAction data={ctaData} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default MangoUpdatePage
