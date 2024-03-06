'use client'

import Link from 'next/link'
import { BlogPost } from '../../../contentful/blogPost'
import CardImage from '../shared/CardImage'
import dayjs from 'dayjs'
import { LearnPost } from '../../../contentful/learnPost'

const PostCard = ({
  blogPost,
  type,
}: {
  blogPost: BlogPost | LearnPost
  type: 'blog' | 'learn'
}) => {
  const { author, createdAt, postDescription, postTitle, slug } = blogPost
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
          <p className="text-th-fgd-2 text-lg font-display mb-1">{postTitle}</p>
          <p>{postDescription}</p>
          <div className="mt-3">
            <p className="text-th-fgd-2">{author}</p>
            <p className="text-sm">{dayjs(createdAt).format('D MMM YYYY')}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
