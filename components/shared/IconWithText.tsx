import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ReactNode } from 'react'
import { LinkButton } from './Button'

const IconWithText = ({
  desc,
  icon,
  linkPath,
  linkText,
  noBorder,
  title,
  showBackground,
}: {
  desc?: string
  icon: ReactNode
  linkPath?: string
  linkText?: string
  noBorder?: boolean
  title: string
  showBackground?: boolean
}) => {
  return (
    <div
      className={`highlight-features opacity-0 translate-y-[40px] col-span-6 sm:col-span-3 md:col-span-2 ${
        showBackground ? 'border border-th-bkg-3 rounded-xl px-8 py-10' : ''
      }`}
    >
      <div
        className={`${
          noBorder
            ? ''
            : 'flex items-center justify-center h-10 w-10 rounded-full bg-th-bkg-3'
        } mb-3`}
      >
        {icon}
      </div>
      <h3 className="mb-3">{title}</h3>
      <p>{desc}</p>
      {linkText ? (
        <a
          className="block mt-6"
          href={linkPath}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {linkText}
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </LinkButton>
        </a>
      ) : null}
    </div>
  )
}

export default IconWithText
