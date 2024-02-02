import Image from 'next/image'
import { HomePageAnnouncement } from '../../../contentful/homePageAnnouncement'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ReactNode } from 'react'
import Link from 'next/link'

const AnnouncementWrapper = ({
  children,
  isExternal,
  path,
}: {
  children: ReactNode
  isExternal: boolean
  path: string
}) => {
  const classNames =
    'mx-2 bg-th-bkg-2 py-3 px-4 rounded-lg flex items-center justify-between'
  return isExternal ? (
    <a className={classNames} href={path} rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link className={classNames} href={path} shallow>
      {children}
    </Link>
  )
}

const Announcement = ({ data }: { data: HomePageAnnouncement }) => {
  const { linkPath, description, image, title } = data
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
            height={40}
            width={40}
          />
        ) : null}
        <span>
          <span className="text-th-fgd-2 text-sm block font-display">
            {title}
          </span>
          <span className="text-sm block text-th-fgd-3">{description}</span>
        </span>
      </span>
      <ChevronRightIcon className="ml-3 h-6 w-6 text-th-fgd-4 flex-shrink-0" />
    </AnnouncementWrapper>
  )
}

export default Announcement
