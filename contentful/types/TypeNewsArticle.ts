import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeNewsArticleFields {
  title: EntryFieldTypes.Symbol
  articleUrl: EntryFieldTypes.Symbol
  imageUrl?: EntryFieldTypes.Symbol
  sourceSiteName: EntryFieldTypes.Symbol
  datePublished: EntryFieldTypes.Symbol
  categories: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | 'AI'
      | 'ALL'
      | 'AMM'
      | 'BONK'
      | 'Bridged (Portal)'
      | 'CHAI'
      | 'CORN'
      | 'CROWN'
      | 'Communication'
      | 'DUAL'
      | 'DeFi'
      | 'DePIN'
      | 'Dog Coin'
      | 'Domains'
      | 'ETH (Portal)'
      | 'Exchange'
      | 'GUAC'
      | 'Gambling'
      | 'Gaming'
      | 'Governance'
      | 'HNT'
      | 'Infrastructure'
      | 'JLP'
      | 'JTO'
      | 'JitoSOL'
      | 'KIN'
      | 'LDO'
      | 'Layer 1'
      | 'Liquid Staking'
      | 'MNGO'
      | 'Meme'
      | 'NEON'
      | 'NOS'
      | 'OPOS'
      | 'ORCA'
      | 'Options'
      | 'Oracle'
      | 'PYTH'
      | 'Payments'
      | 'Perps'
      | 'RAY'
      | 'RENDER'
      | 'RLB'
      | 'SAMO'
      | 'SLCL'
      | 'SOL'
      | 'Social'
      | 'Stablecoin'
      | 'TBTC'
      | 'Tokenized Asset'
      | 'USDC'
      | 'USDH'
      | 'USDT'
      | 'WIF'
      | 'Yield Bearing'
      | 'bSOL'
      | 'mSOL'
      | 'wBTC (Portal)'
    >
  >
}

export type TypeNewsArticleSkeleton = EntrySkeletonType<
  TypeNewsArticleFields,
  'newsArticle'
>
export type TypeNewsArticle<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeNewsArticleSkeleton, Modifiers, Locales>
