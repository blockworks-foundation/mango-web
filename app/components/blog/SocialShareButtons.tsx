import Facebook from '../icons/Facebook'
import LinkedIn from '../icons/LinkedIn'
import Twitter from '../icons/Twitter'

const SHARE_BUTTON_CLASSES =
  'focus:outline-none text-th-fgd-3 md:hover:text-th-fgd-1'

export const TwitterShareButton = ({ text, url }) => {
  const handleTwitterShare = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text,
    )}&url=${encodeURIComponent(url)}`
    window.open(twitterShareUrl, '_blank')
  }

  return (
    <button className={SHARE_BUTTON_CLASSES} onClick={handleTwitterShare}>
      <Twitter className="h-5 w-5" />
    </button>
  )
}

export const FacebookShareButton = ({ url }) => {
  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}`
    window.open(facebookShareUrl, '_blank')
  }

  return (
    <button className={SHARE_BUTTON_CLASSES} onClick={handleFacebookShare}>
      <Facebook className="h-5 w-5" />
    </button>
  )
}

export const LinkedInShareButton = ({ title, url, summary }) => {
  const handleLinkedInShare = () => {
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url,
    )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
      summary,
    )}`
    window.open(linkedInShareUrl, '_blank')
  }

  return (
    <button className={SHARE_BUTTON_CLASSES} onClick={handleLinkedInShare}>
      <LinkedIn className="h-6 w-6" />
    </button>
  )
}
