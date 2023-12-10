'use client'

import Image from 'next/image'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import { Table, Td, Th, TrBody, TrHead } from '../shared/TableElements'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { formatNumericValue, numberCompacter } from '../../utils/numbers'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export const goToTokenPage = (slug: string, router: AppRouterInstance) => {
  router.push(`/explore/${slug}`, { shallow: true })
}

const Explore = ({
  tokens,
  mangoTokensData,
}: {
  tokens: TokenPageWithData[]
  mangoTokensData: MangoTokenData[]
}) => {
  const router = useRouter()
  return (
    <>
      <h1 className="text-4xl mb-10">Explore Listed Assets</h1>
      <Table>
        <thead>
          <TrHead>
            <Th className="text-left">Token</Th>
            <Th className="text-right">Price</Th>
            <Th className="text-right">24h Change</Th>
            <Th className="text-right">24h Volume</Th>
            <Th />
          </TrHead>
        </thead>
        <tbody>
          {tokens.map((token) => {
            const { tokenName, slug, symbol, birdeyeData, mint } = token
            const mangoTokenData: MangoTokenData | undefined =
              mangoTokensData.find((mangoToken) => mangoToken?.mint === mint)
            let mangoSymbol
            if (mangoTokenData) {
              mangoSymbol = mangoTokenData.symbol
            }
            const price = birdeyeData?.price
              ? `$${formatNumericValue(birdeyeData.price)}`
              : mangoTokenData?.price
                ? `$${formatNumericValue(mangoTokenData.price)}`
                : '–'
            const rawChange = birdeyeData?.priceChange24hPercent
              ? birdeyeData.priceChange24hPercent
              : mangoTokenData?.rolling_24hr_change
            const change = rawChange ? `${rawChange.toFixed(2)}%` : '–'
            const volume = birdeyeData?.v24hUSD
              ? `$${numberCompacter.format(birdeyeData.v24hUSD)}`
              : mangoTokenData?.rolling_24hr_volume
                ? `$${numberCompacter.format(
                    mangoTokenData.rolling_24hr_volume,
                  )}`
                : '–'
            const hasCustomIcon = CUSTOM_TOKEN_ICONS[mangoSymbol?.toLowerCase()]
            const logoPath = hasCustomIcon
              ? `/icons/tokens/${mangoSymbol.toLowerCase()}.svg`
              : birdeyeData?.logoURI
            return (
              <TrBody
                key={slug}
                className="default-transition md:hover:cursor-pointer md:hover:bg-th-bkg-2"
                onClick={() => goToTokenPage(slug, router)}
              >
                <Td>
                  <div className="flex items-center space-x-3">
                    <Image src={logoPath} alt="Logo" height={32} width={32} />
                    <div>
                      <p>{tokenName}</p>
                      <p className="text-sm text-th-fgd-4">
                        {symbol || mangoSymbol}
                      </p>
                    </div>
                  </div>
                </Td>
                <Td>
                  <p className="text-right">{price}</p>
                </Td>
                <Td>
                  <p
                    className={`text-right ${
                      !rawChange
                        ? 'text-th-fgd-3'
                        : rawChange > 0
                          ? 'text-th-up'
                          : rawChange < 0
                            ? 'text-th-down'
                            : 'text-th-fgd-3'
                    }`}
                  >
                    {change}
                  </p>
                </Td>
                <Td>
                  <p className="text-right">{volume}</p>
                </Td>
                <Td>
                  <div className="flex items-center justify-end">
                    <ChevronRightIcon className="h-5 w-5 text-th-fgd-4" />
                  </div>
                </Td>
              </TrBody>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default Explore
