import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeTokenCategoryFields {
  category: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.RichText
  seoTitle?: EntryFieldTypes.Symbol
  seoDescription?: EntryFieldTypes.Text
  heroImage?: EntryFieldTypes.AssetLink
}

export type TypeTokenCategorySkeleton = EntrySkeletonType<
  TypeTokenCategoryFields,
  'tokenCategory'
>
export type TypeTokenCategory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTokenCategorySkeleton, Modifiers, Locales>
