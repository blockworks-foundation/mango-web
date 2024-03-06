'use client'
import Image from 'next/image'
import {
  HomePageAnnouncement,
  fetchHomePageAnnouncements,
} from '../../../contentful/homePageAnnouncement'
import Slider from 'react-slick'
import { ReactNode, useRef } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'
import { breakpoints, useViewport } from '../../hooks/useViewport'
import { useQuery } from '@tanstack/react-query'
import SectionWrapper from '../shared/SectionWrapper'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MegaphoneIcon,
} from '@heroicons/react/20/solid'

const classNames =
  'border border-th-bkg-4 p-4 rounded-lg lg:h-32 lg:py-0 flex items-center justify-between md:hover:bg-th-bkg-3 lg:py-4'

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
  const { isDesktop } = useViewport()
  return (
    <AnnouncementWrapper isExternal={isExtenalLink} path={linkPath}>
      <span className="flex items-center space-x-3">
        {imageSrc ? (
          <Image
            className="flex-shrink-0 rounded-full"
            src={`https:${imageSrc}`}
            alt={imageAlt}
            height={isDesktop ? 64 : 48}
            width={isDesktop ? 64 : 48}
          />
        ) : null}
        <div>
          <p className="mb-1 text-xs text-th-active leading-none">{category}</p>
          <p className="text-th-fgd-2 text-lg block font-display">{title}</p>
          <p className="text-sm block text-th-fgd-3">{description}</p>
        </div>
      </span>
    </AnnouncementWrapper>
  )
}

const Announcements = () => {
  const { width } = useViewport()

  const { data: announcements } = useQuery({
    queryKey: ['announcements'],
    queryFn: () => fetchHomePageAnnouncements({ preview: false }),
  })

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: breakpoints.xl,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: breakpoints.lg,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const sliderRef = useRef<Slider | null>(null)

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const slides = width >= breakpoints.xl ? 3 : width >= breakpoints.lg ? 2 : 1
  const showArrows = announcements?.length
    ? slides < announcements.length
    : false
  return announcements?.length ? (
    <SectionWrapper
      className="mt-0 lg:mt-6 py-6 lg:py-12 bg-th-bkg-2 xl:rounded-xl px-6"
      noPaddingY
      noPaddingX={showArrows}
    >
      <div
        className={`mb-6 flex items-center justify-center ${
          showArrows ? 'md:px-6 lg:px-14' : ''
        }`}
      >
        <div className="mr-3 flex items-center justify-center w-10 h-10 bg-th-active rounded-full">
          <MegaphoneIcon className="w-6 h-6 text-th-bkg-1 -rotate-[30deg]" />
        </div>
        <h2 className="text-3xl">Latest news</h2>
      </div>
      <div className="flex items-center">
        {showArrows ? (
          <button
            className="mr-4 flex items-center justify-center w-8 h-8 border-2 border-th-bkg-4 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="w-5 h-5 text-th-fgd-1" />
          </button>
        ) : null}
        <div className={` ${showArrows ? 'w-[calc(100%-88px)]' : 'w-full'}`}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {announcements.map((announcement, i) => (
              <div
                className={i !== announcements.length - 1 ? 'pr-3' : 'pr-[1px]'}
                key={announcement.title + i}
              >
                <Announcement data={announcement} />
              </div>
            ))}
          </Slider>
        </div>
        {showArrows ? (
          <button
            className="ml-1 flex items-center justify-center w-8 h-8 border-2 border-th-bkg-4 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="w-5 h-5 text-th-fgd-1" />
          </button>
        ) : null}
      </div>
    </SectionWrapper>
  ) : null
}

export default Announcements
