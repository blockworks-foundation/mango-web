import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeTokenFields {
  tokenName: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  description: EntryFieldTypes.RichText
  tags: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<'Governanace' | 'Liquid Staking' | 'Meme'>
  >
  websiteUrl?: EntryFieldTypes.Symbol
  twitterUrl?: EntryFieldTypes.Symbol
  mint: EntryFieldTypes.Symbol
  coingeckoId: EntryFieldTypes.Symbol
  symbol: EntryFieldTypes.Symbol
}

export type TypeTokenSkeleton = EntrySkeletonType<TypeTokenFields, 'token'>
export type TypeToken<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTokenSkeleton, Modifiers, Locales>
