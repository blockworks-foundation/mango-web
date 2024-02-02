import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeCallToActionFields {
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Symbol
  linkPath: EntryFieldTypes.Symbol
  linkText: EntryFieldTypes.Symbol
  image?: EntryFieldTypes.AssetLink
}

export type TypeCallToActionSkeleton = EntrySkeletonType<
  TypeCallToActionFields,
  'callToAction'
>
export type TypeCallToAction<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeCallToActionSkeleton, Modifiers, Locales>
