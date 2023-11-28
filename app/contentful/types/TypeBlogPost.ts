import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeBlogPostFields {
  postTitle: EntryFieldTypes.Symbol
  postDescription: EntryFieldTypes.Text
  postHeroImage: EntryFieldTypes.AssetLink
  postContent: EntryFieldTypes.RichText
  slug: EntryFieldTypes.Symbol
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>
