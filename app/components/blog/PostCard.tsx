import Link from 'next/link'
import { BlogPost } from '../../../contentful/blogPost'
import CardImage from '../shared/CardImage'
import { LearnPost } from '../../../contentful/learnPost'
import { UserCircleIcon } from '@heroicons/react/20/solid'

const PostCard = ({
  blogPost,
  type,
}: {
  blogPost: BlogPost | LearnPost
  type: 'blog' | 'learn'
}) => {
  const {
    author,
    authorProfileImage,
    // createdAt,
    postDescription,
    postTitle,
    slug,
  } = blogPost
  const customImagePath =
    type === 'blog'
      ? `/images/blog/${slug}-small.webp`
      : `/images/learn/${slug}-small.webp`
  return (
    <div
      className="col-span-4 sm:col-span-2 lg:col-span-1 border border-th-bkg-3 rounded-xl group relative"
      key={slug}
    >
      <Link href={`/${type}/${slug}`}>
        <div className="overflow-hidden rounded-t-xl">
          <CardImage customImagePath={customImagePath} />
        </div>
        <div className="p-6">
          <h2 className="text-th-fgd-2 text-2xl mb-2">{postTitle}</h2>
          <p>{postDescription}</p>
          <div className="mt-3 flex items-center">
            {authorProfileImage?.src ? (
              <img
                className="rounded-full w-6 h-6"
                src={authorProfileImage.src}
                alt={authorProfileImage?.alt}
              />
            ) : (
              <UserCircleIcon className="w-6 h-6 text-th-fgd-4" />
            )}
            <p className="ml-2 text-th-fgd-2">{author}</p>
            {/* <p className="text-sm">{dayjs(createdAt).format('D MMM YYYY')}</p> */}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
