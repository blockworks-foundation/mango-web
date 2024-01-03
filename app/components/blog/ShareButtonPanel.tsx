import {
  FacebookShareButton,
  LinkedInShareButton,
  TwitterShareButton,
} from './SocialShareButtons'

const ShareButtonPanel = ({ description, title, url }) => {
  return (
    <div className="flex items-center justify-between border-y border-th-bkg-3 py-3 px-4 mt-6">
      <p className="text-th-fgd-2">Share post</p>
      <div className="flex items-center space-x-3">
        <TwitterShareButton text={description} url={url} />
        <FacebookShareButton url={url} />
        <LinkedInShareButton title={title} summary={description} url={url} />
      </div>
    </div>
  )
}

export default ShareButtonPanel
