'use client'

import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import BackButton from '../shared/BackButton'

const PostHeader = ({ backgroundImageUrl, postTitle }) => {
  return (
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
  )
}

export default PostHeader
