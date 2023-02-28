import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { LinkButton } from './Button'

const InlineImageWithText = ({
  desc,
  title,
  imageSrc,
  linkPath,
  linkText,
  reverse,
}: {
  desc: string
  title: string
  imageSrc: string
  linkPath: string
  linkText: string
  reverse?: boolean
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center md:space-x-10 mt-12 ${
        reverse ? 'md:flex-row-reverse md:justify-between' : ''
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img className="w-1/2 sm:w-auto h-auto" src={imageSrc} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="mb-3">{title}</h3>
        <p className="mb-6">{desc}</p>
        <a href={linkPath} rel="noopener noreferrer" target="_blank">
          <LinkButton className="flex items-center">
            {linkText}
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </LinkButton>
        </a>
      </div>
    </div>
  )
}

export default InlineImageWithText
