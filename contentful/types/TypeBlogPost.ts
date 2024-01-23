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
  author?: EntryFieldTypes.Symbol
  category: EntryFieldTypes.Symbol<'Meme Coins' | 'Repost'>
  authorProfileImage?: EntryFieldTypes.AssetLink
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

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>
