import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeAppAnnouncementFields {
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Symbol
  linkPath: EntryFieldTypes.Symbol
  image?: EntryFieldTypes.AssetLink
}

export type TypeAppAnnouncementSkeleton = EntrySkeletonType<
  TypeAppAnnouncementFields,
  'appAnnouncement'
>
export type TypeAppAnnouncement<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeAppAnnouncementSkeleton, Modifiers, Locales>
