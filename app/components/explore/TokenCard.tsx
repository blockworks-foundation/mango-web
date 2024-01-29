import Image from 'next/image'
import { formatNumericValue, numberCompacter } from '../../utils/numbers'
import Change from '../shared/Change'
import SimpleAreaChart from '../shared/SimpleAreaChart'
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import Link from 'next/link'
import { FormattedTableData } from './TokenTable'
import Solana from '../icons/Solana'

const TokenCard = ({ token }: { token: FormattedTableData }) => {
  const {
    tokenName,
    change,
    chartData,
    price,
    volume,
    fdv,
    mangoSymbol,
    logoURI,
    symbol,
    slug,
    ethCircSupply,
    ethMint,
  } = token
  const hasCustomIcon = mangoSymbol
    ? CUSTOM_TOKEN_ICONS[mangoSymbol.toLowerCase()]
    : false
  const logoPath = hasCustomIcon
    ? `/icons/tokens/${mangoSymbol?.toLowerCase()}.svg`
    : logoURI
  return (
    <div className="p-4 rounded-lg border border-th-bkg-3">
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-2 flex-shrink-0">
            {logoPath ? (
              <Image src={logoPath} alt="Logo" height={32} width={32} />
            ) : (
              <QuestionMarkCircleIcon className="h-8 w-8 text-th-fgd-4" />
            )}
          </div>
          <div>
            <p className="text-th-fgd-1">
              {tokenName}{' '}
              <span className="text-xs text-th-fgd-4">
                ({symbol || mangoSymbol})
              </span>
            </p>
            <p className="text-th-fgd-1 font-bold">
              {price ? `$${formatNumericValue(price)}` : '–'}
            </p>
          </div>
        </div>
        {chartData && chartData.length ? (
          <div className="h-12 w-20">
            <SimpleAreaChart
              color={
                chartData[0].value <= chartData[chartData.length - 1].value
                  ? 'var(--up)'
                  : 'var(--down)'
              }
              data={chartData}
              name={tokenName}
              xKey="unixTime"
              yKey="value"
            />
          </div>
        ) : (
          <p className="text-th-fgd-4">Unavailable</p>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div>
          <p className="text-xs">24h Change</p>
          {change ? <Change change={change} suffix="%" /> : '–'}
        </div>
        <div>
          <p className="text-xs">24h Volume</p>
          <p className="text-th-fgd-1">
            {volume ? `$${numberCompacter.format(volume)}` : '–'}
          </p>
        </div>
        <div>
          <p className="text-xs">FDV</p>
          <div className="flex items-center">
            {ethMint && !ethCircSupply ? (
              <Solana className="h-3.5 w-3.5 mr-1.5" />
            ) : null}
            <p className="text-th-fgd-1">
              {fdv ? `$${numberCompacter.format(fdv)}` : '–'}
            </p>
          </div>
        </div>
      </div>
      <Link
        className="flex items-center justify-between border border-th-bkg-4 py-3 px-4 mx-auto w-full rounded-lg text-sm font-display text-th-fgd-2 mt-6"
        href={`/explore/tokens/${slug}`}
      >
        <span>Stats and info</span>
        <ChevronRightIcon className="h-5 w-5 text-th-fgd-3" />
      </Link>
    </div>
  )
}

export default TokenCard
