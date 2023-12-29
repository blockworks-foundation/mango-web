import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeTokenCallToActionFields {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Symbol
  spotMarketName?: EntryFieldTypes.Symbol
  bankName: EntryFieldTypes.Symbol
}

export type TypeTokenCallToActionSkeleton = EntrySkeletonType<
  TypeTokenCallToActionFields,
  'tokenCallToAction'
>
export type TypeTokenCallToAction<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTokenCallToActionSkeleton, Modifiers, Locales>
