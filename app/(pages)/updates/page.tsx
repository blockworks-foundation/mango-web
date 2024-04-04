import { draftMode } from 'next/headers'
import { fetchMangoUpdates } from '../../../contentful/mangoUpdate'
import PageHeader from '../../components/explore/PageHeader'
import Link from 'next/link'
import dayjs from 'dayjs'

async function UpdatePage() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const mangoUpdates = await fetchMangoUpdates({
    preview: draftMode().isEnabled,
  })

  return (
    <>
      <PageHeader title="Updates" />
      <div className="px-6 lg:px-20 py-10 md:py-16 max-w-4xl mx-auto">
        {mangoUpdates && mangoUpdates.length ? (
          <div className="space-y-6">
            {mangoUpdates.map((mangoUpdate) => {
              const {
                postTitle,
                shortenedDescription,
                createdAt,
                slug,
                updateImage,
              } = mangoUpdate

              return (
                <Link
                  className="flex items-center p-4 md:hover:bg-th-bkg-3 rounded-xl"
                  key={slug}
                  href={`/updates/${slug}`}
                >
                  {updateImage?.src ? (
                    <img
                      className="mr-6 w-48 h-auto"
                      src={updateImage.src}
                      alt={updateImage?.alt}
                    />
                  ) : null}
                  <div>
                    <p>{dayjs(createdAt).format('DD MMM YYYY')}</p>
                    <h2 className="mb-2 text-2xl">{postTitle}</h2>
                    <p>{shortenedDescription}</p>
                  </div>
                </Link>
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

export default UpdatePage
