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
      | 'Bridged (Portal)'
      | 'DeFi'
      | 'DePIN'
      | 'Derivatives'
      | 'Domains'
      | 'Exchange'
      | 'Gaming'
      | 'Governance'
      | 'Infrastructure'
      | 'Layer 1'
      | 'Liquid Staking'
      | 'Meme'
      | 'Payments'
      | 'Social'
      | 'Stablecoin'
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
  ethMint?: EntryFieldTypes.Symbol
  erc20TokenDecimals?: EntryFieldTypes.Integer
}

export type TypeTokenSkeleton = EntrySkeletonType<TypeTokenFields, 'token'>
export type TypeToken<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTokenSkeleton, Modifiers, Locales>
