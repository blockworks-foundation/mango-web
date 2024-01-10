import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeInlineTextPriceFields {
  priceType: EntryFieldTypes.Symbol<
    'All time high' | 'All time low' | 'Current price'
  >
}

export type TypeInlineTextPriceSkeleton = EntrySkeletonType<
  TypeInlineTextPriceFields,
  'inlineTextPrice'
>
export type TypeInlineTextPrice<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeInlineTextPriceSkeleton, Modifiers, Locales>
