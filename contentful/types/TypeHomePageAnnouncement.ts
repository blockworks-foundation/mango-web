import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeHomePageAnnouncementFields {
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Symbol
  linkPath: EntryFieldTypes.Symbol
  image?: EntryFieldTypes.AssetLink
  category: EntryFieldTypes.Symbol<
    | 'Announcement'
    | 'From the Blog'
    | 'New Listing'
    | 'News'
    | 'So Hot Right Now'
  >
}

export type TypeHomePageAnnouncementSkeleton = EntrySkeletonType<
  TypeHomePageAnnouncementFields,
  'homePageAnnouncement'
>
export type TypeHomePageAnnouncement<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeHomePageAnnouncementSkeleton, Modifiers, Locales>
