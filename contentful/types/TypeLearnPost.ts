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
  category: EntryFieldTypes.Symbol<'Repost'>
  authorProfileImage?: EntryFieldTypes.AssetLink
  postDescription: EntryFieldTypes.Text
  postContent: EntryFieldTypes.RichText
  postHeroImage?: EntryFieldTypes.AssetLink
  seoTitle?: EntryFieldTypes.Symbol
  seoDescription?: EntryFieldTypes.Text
}

export type TypeLearnPostSkeleton = EntrySkeletonType<
  TypeLearnPostFields,
  'learnPost'
>
export type TypeLearnPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeLearnPostSkeleton, Modifiers, Locales>
