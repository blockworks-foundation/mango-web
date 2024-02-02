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
      | 'BONK'
      | 'Bridged (Portal)'
      | 'CHAI'
      | 'CORN'
      | 'CROWN'
      | 'DAI'
      | 'DUAL'
      | 'DeFi'
      | 'DePIN'
      | 'Derivatives'
      | 'ELON'
      | 'ETH (Portal)'
      | 'EURC'
      | 'Exchange'
      | 'GECKO'
      | 'GUAC'
      | 'Gaming'
      | 'Governance'
      | 'HNT'
      | 'Infrastructure'
      | 'JLP'
      | 'JTO'
      | 'JUP'
      | 'JitoSOL'
      | 'KIN'
      | 'LDO'
      | 'Layer 1'
      | 'Liquid Staking'
      | 'MNGO'
      | 'MOUTAI'
      | 'Meme'
      | 'NEON'
      | 'NOS'
      | 'OPOS'
      | 'ORCA'
      | 'PYTH'
      | 'Payments'
      | 'RAY'
      | 'RENDER'
      | 'RLB'
      | 'SAMO'
      | 'SLCL'
      | 'SOL'
      | 'Stablecoin'
      | 'TBTC'
      | 'USDC'
      | 'USDH'
      | 'USDT'
      | 'WEN'
      | 'WIF'
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
