import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeLearnPostFields {
  postTitle: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  author?: EntryFieldTypes.Symbol
  category: EntryFieldTypes.Symbol<
    'Guides' | 'Learn to Trade' | 'Listing on Mango' | 'Repost' | 'Spot Trading'
  >
  authorProfileImage?: EntryFieldTypes.AssetLink
  showTableOfContents?: EntryFieldTypes.Boolean
  postDescription: EntryFieldTypes.Text
  postContent: EntryFieldTypes.RichText
  postHeroImage?: EntryFieldTypes.AssetLink
  seoTitle?: EntryFieldTypes.Symbol
  seoDescription?: EntryFieldTypes.Text
  metaImageUrl: EntryFieldTypes.Symbol
  ctaTitle?: EntryFieldTypes.Symbol
  ctaDescription?: EntryFieldTypes.Symbol
  ctaUrl?: EntryFieldTypes.Symbol
}

export type TypeLearnPostSkeleton = EntrySkeletonType<
  TypeLearnPostFields,
  'learnPost'
>
export type TypeLearnPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeLearnPostSkeleton, Modifiers, Locales>
