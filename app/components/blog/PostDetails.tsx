'use client'

import { CalendarIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { BlogPost } from '../../../contentful/blogPost'
import ShareButtonPanel from './ShareButtonPanel'
import dayjs from 'dayjs'
import { LearnPost } from '../../../contentful/learnPost'

const PostDetails = ({
  post,
  isLearn,
}: {
  post: BlogPost | LearnPost
  isLearn?: boolean
}) => {
  const {
    author,
    authorProfileImage,
    createdAt,
    postDescription,
    postTitle,
    seoTitle,
    seoDescription,
    slug,
  } = post

  const shareUrl = isLearn
    ? `https://mango.markets/learn/${slug}`
    : `https://mango.markets/blog/${slug}`

  return (
    <div className="pb-10">
      <p className="text-xl text-th-fgd-3 my-8">{postDescription}</p>
      {author ? (
        <div className="flex items-center space-x-3">
          {authorProfileImage?.src ? (
            <img
              className="rounded-full w-12 h-12"
              src={authorProfileImage.src}
              alt={authorProfileImage?.alt}
            />
          ) : (
            <UserCircleIcon className="w-12 h-12 text-th-fgd-4" />
          )}
          <div>
            <p className="text-th-fgd-2 font-bold">{author}</p>
            <div className="flex items-center space-x-1.5">
              <CalendarIcon className="h-4 w-4 text-th-fgd-4" />
              <p>{dayjs(createdAt).format('DD MMM YYYY')}</p>
            </div>
          </div>
        </div>
      ) : null}
      <ShareButtonPanel
        description={seoDescription || postDescription}
        title={seoTitle || postTitle}
        url={shareUrl}
      />
    </div>
  )
}

export default PostDetails
