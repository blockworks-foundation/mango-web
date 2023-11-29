import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeBlogPostFields {
  postTitle: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  postDescription: EntryFieldTypes.Text
  postHeroImage: EntryFieldTypes.AssetLink
  postContent: EntryFieldTypes.RichText
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>
