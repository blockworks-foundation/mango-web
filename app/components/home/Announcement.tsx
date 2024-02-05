import Image from 'next/image'
import { HomePageAnnouncement } from '../../../contentful/homePageAnnouncement'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ReactNode } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

const classNames =
  'border border-th-bkg-4 py-3 px-4 rounded-lg flex items-center justify-between md:hover:bg-th-bkg-3'

const AnnouncementWrapper = ({
  children,
  isExternal,
  path,
}: {
  children: ReactNode
  isExternal: boolean
  path: string
}) => {
  const telemetry = usePlausible()

  const trackClick = () => {
    telemetry('homeAnnouncement', {
      props: {
        path: path,
      },
    })
  }

  return isExternal ? (
    <a
      className={classNames}
      href={path}
      rel="noopener noreferrer"
      onClick={trackClick}
    >
      {children}
    </a>
  ) : (
    <Link className={classNames} href={path} onClick={trackClick} shallow>
      {children}
    </Link>
  )
}

const Announcement = ({ data }: { data: HomePageAnnouncement }) => {
  const { category, linkPath, description, image, title } = data
  const imageSrc = image?.src
  const imageAlt = image?.alt || 'CTA Image'
  const isExtenalLink = linkPath.includes('http')
  return (
    <AnnouncementWrapper isExternal={isExtenalLink} path={linkPath}>
      <span className="flex items-center space-x-3">
        {imageSrc ? (
          <Image
            className="flex-shrink-0 rounded-full"
            src={`https:${imageSrc}`}
            alt={imageAlt}
            height={48}
            width={48}
          />
        ) : null}
        <div>
          <p className="mb-1 text-xs text-th-active leading-none">{category}</p>
          <p className="text-th-fgd-2 text-sm block font-display">{title}</p>
          <p className="text-sm block text-th-fgd-3">{description}</p>
        </div>
      </span>
      {/* <ChevronRightIcon className="ml-3 h-6 w-6 text-th-fgd-4 flex-shrink-0" /> */}
    </AnnouncementWrapper>
  )
}

export default Announcement
