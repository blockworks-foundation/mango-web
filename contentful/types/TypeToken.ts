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
  seoTitle: EntryFieldTypes.Symbol
  seoDescription: EntryFieldTypes.Text
  description?: EntryFieldTypes.RichText
  tags: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | 'AI'
      | 'AMM'
      | 'Blue Chip'
      | 'Bridged (Portal)'
      | 'Communication'
      | 'DeFi'
      | 'DePIN'
      | 'Dog Coin'
      | 'Domains'
      | 'Exchange'
      | 'Gambling'
      | 'Gaming'
      | 'Governance'
      | 'Infrastructure'
      | 'Layer 1'
      | 'Liquid Staking'
      | 'Meme'
      | 'Options'
      | 'Oracle'
      | 'Payments'
      | 'Perps'
      | 'Social'
      | 'Stablecoin'
      | 'Tokenized Asset'
      | 'Yield Bearing'
    >
  >
  websiteUrl?: EntryFieldTypes.Symbol
  twitterUrl?: EntryFieldTypes.Symbol
  whitepaper?: EntryFieldTypes.Symbol
  mint: EntryFieldTypes.Symbol
  coingeckoId: EntryFieldTypes.Symbol
  symbol: EntryFieldTypes.Symbol
  spotSymbol: EntryFieldTypes.Symbol
  perpSymbol?: EntryFieldTypes.Symbol
}

export type TypeTokenSkeleton = EntrySkeletonType<TypeTokenFields, 'token'>
export type TypeToken<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTokenSkeleton, Modifiers, Locales>
