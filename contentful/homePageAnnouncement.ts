import { TypeHomePageAnnouncementSkeleton } from './types'
import { Entry } from 'contentful'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type HomePageAnnouncementEntry = Entry<
  TypeHomePageAnnouncementSkeleton,
  undefined,
  string
>

export interface HomePageAnnouncement {
  title: string
  description?: string
  image: ContentImage | null
  linkPath: string
  category: string
}

export function parseContentfulHomePageAnnouncement(
  homePageAnnouncementEntry?: HomePageAnnouncementEntry,
): HomePageAnnouncement | null {
  if (!homePageAnnouncementEntry) {
    return null
  }

  return {
    title: homePageAnnouncementEntry.fields.title || '',
    description: homePageAnnouncementEntry.fields.description || '',
    linkPath: homePageAnnouncementEntry.fields.linkPath || '',
    image: parseContentfulContentImage(homePageAnnouncementEntry.fields.image),
    category: homePageAnnouncementEntry.fields.category,
  }
}

interface FetchHomePageAnnouncementsOptions {
  preview: boolean
}
export async function fetchHomePageAnnouncements({
  preview,
}: FetchHomePageAnnouncementsOptions): Promise<HomePageAnnouncement[]> {
  const contentful = contentfulClient({ preview })

  const homePageAnnouncementsResult =
    await contentful.getEntries<TypeHomePageAnnouncementSkeleton>({
      content_type: 'homePageAnnouncement',
      include: 2,
      limit: 3,
    })

  return homePageAnnouncementsResult.items.map(
    (homePageAnnouncementEntry) =>
      parseContentfulHomePageAnnouncement(
        homePageAnnouncementEntry,
      ) as HomePageAnnouncement,
  )
}
