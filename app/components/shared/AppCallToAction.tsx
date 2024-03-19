import Image from 'next/image'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import ButtonLink from './ButtonLink'

type CtaData = {
  ctaDescription: string | undefined
  ctaTitle: string | undefined
  ctaUrl: string | undefined
}

const AppCallToAction = ({ data }: { data: CtaData }) => {
  const { ctaDescription, ctaTitle, ctaUrl } = data
  const logoUrl = `/icons/tokens/mngo.svg`
  return (
    <span className="bg-th-bkg-1 border border-th-bkg-4 p-4 md:px-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between my-4">
      <span className="flex items-center space-x-3">
        {logoUrl ? (
          <Image
            className="flex-shrink-0"
            src={logoUrl}
            alt={`Mango Logo`}
            height={40}
            width={40}
          />
        ) : (
          <QuestionMarkCircleIcon className="h-10 w-10 text-th-fgd-4 flex-shrink-0" />
        )}
        <span>
          {ctaTitle ? (
            <span className="text-th-fgd-2 text-base block font-display">
              {ctaTitle}
            </span>
          ) : null}
          {ctaDescription ? (
            <span className="text-sm block text-th-fgd-2 font-body">
              {ctaDescription}
            </span>
          ) : null}
        </span>
      </span>
      {ctaUrl ? (
        <span className="flex space-x-2 md:pl-4 pt-4 md:pt-0">
          <ButtonLink
            linkText="Let's Go!"
            path={ctaUrl}
            size="small"
            target="_blank"
          />
        </span>
      ) : null}
    </span>
  )
}

export default AppCallToAction
