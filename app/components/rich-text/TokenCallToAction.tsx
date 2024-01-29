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
    <span className="bg-th-bkg-1 border border-th-bkg-4 p-4 md:px-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between my-4">
      <span className="flex items-center space-x-3">
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
        <span>
          <span className="text-th-fgd-2 text-base block font-display">
            {title}
          </span>
          <span className="text-sm block text-th-fgd-2">{description}</span>
        </span>
      </span>
      <span className="flex space-x-2 md:pl-4 pt-4 md:pt-0">
        <ButtonLink
          linkText={`Swap ${bankName.split(' ')[0]}`}
          path={`https://app.mango.markets/swap?in=USDC&out=${bankName}`}
          size="small"
          target="_blank"
        />
        <ButtonLink
          linkText={`Trade ${bankName.split(' ')[0]}`}
          path={`https://app.mango.markets/trade?name=${spotMarketName}`}
          size="small"
          target="_blank"
        />
      </span>
    </span>
  )
}

export default TokenCallToAction
