import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeMangoUpdateFields {
  postTitle: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  updateImage?: EntryFieldTypes.AssetLink
  postContent: EntryFieldTypes.RichText
  showOnHomePage?: EntryFieldTypes.Boolean
  shortenedTitle?: EntryFieldTypes.Symbol
  shortenedDescription: EntryFieldTypes.Symbol
  seoTitle?: EntryFieldTypes.Symbol
  seoDescription?: EntryFieldTypes.Text
  ctaTitle?: EntryFieldTypes.Symbol
  ctaDescription?: EntryFieldTypes.Symbol
  ctaUrl?: EntryFieldTypes.Symbol
}

export type TypeMangoUpdateSkeleton = EntrySkeletonType<
  TypeMangoUpdateFields,
  'mangoUpdate'
>
export type TypeMangoUpdate<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeMangoUpdateSkeleton, Modifiers, Locales>
