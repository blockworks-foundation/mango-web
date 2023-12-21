import Image from 'next/image'
import { CUSTOM_TOKEN_ICONS } from '../../utils/constants'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import ButtonLink from '../shared/ButtonLink'

type CtaData = {
  bankName: string
  description: string
  spotMarketName: string
  title: string
}

const TokenCallToAction = ({ data }: { data: CtaData }) => {
  const { bankName, description, spotMarketName, title } = data
  const hasCustomIcon = bankName
    ? CUSTOM_TOKEN_ICONS[bankName.toLowerCase()]
    : false
  const logoUrl = hasCustomIcon
    ? `/icons/tokens/${bankName.toLowerCase()}.svg`
    : ''
  return (
    <div className="bg-gradient-to-br from-th-bkg-3 to-th-bkg-4 p-4 md:px-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between my-4">
      <div className="flex items-center space-x-3">
        {logoUrl ? (
          <Image
            className="flex-shrink-0"
            src={logoUrl}
            alt={`${bankName} Logo`}
            height={40}
            width={40}
          />
        ) : (
          <QuestionMarkCircleIcon className="h-10 w-10 text-th-fgd-4 flex-shrink-0" />
        )}
        <div>
          <p className="mb-1 text-th-fgd-2 font-display">{title}</p>
          <p className="text-sm text-th-fgd-2">{description}</p>
        </div>
      </div>
      <div className="flex space-x-2 md:pl-4 pt-4 md:pt-0">
        <ButtonLink
          linkText={`Swap ${bankName}`}
          path={`https://app.mango.markets/swap?in=USDC&out=${bankName}`}
          //   secondary
          size="small"
          target="_blank"
        />
        <ButtonLink
          linkText={`Trade ${bankName}`}
          path={`https://app.mango.markets/trade?name=${spotMarketName}`}
          //   secondary
          size="small"
          target="_blank"
        />
      </div>
    </div>
  )
}

export default TokenCallToAction
