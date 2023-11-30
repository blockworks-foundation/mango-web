'use client'

import Image from 'next/image'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { MangoTokenData } from '../../types/mango'
import { Table, Td, Th, TrBody, TrHead } from '../shared/TableElements'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

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
    <Table>
      <thead>
        <TrHead>
          <Th className="text-left">Token</Th>
          <Th className="text-left">Price</Th>
          <Th className="text-left">Change</Th>
        </TrHead>
      </thead>
      <tbody>
        {tokens.map((token) => {
          const { tokenName, slug, symbol, birdeyeData, mint } = token
          const mangoTokenData: MangoTokenData | undefined =
            mangoTokensData.find((mangoToken) => mangoToken?.mint === mint)
          let price
          let change24Hour
          let mangoSymbol
          if (mangoTokenData) {
            price = mangoTokenData?.price || '–'
            const change =
              mangoTokenData?.price && mangoTokenData?.['24_hr_price']
                ? ((mangoTokenData['24_hr_price'] - mangoTokenData.price) /
                    mangoTokenData['24_hr_price']) *
                  100
                : '–'
            change24Hour = change
            mangoSymbol = mangoTokenData.symbol
          }
          const hasCustomIcon = CUSTOM_TOKEN_ICONS[mangoSymbol.toLowerCase()]
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
                      {mangoSymbol || symbol}
                    </p>
                  </div>
                </div>
              </Td>
              <Td>
                <p>{price}</p>
              </Td>
              <Td>
                <p>{change24Hour}</p>
              </Td>
            </TrBody>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Explore
