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
  linkPath?: string
  linkText?: string
  reverse?: boolean
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center mt-12 ${
        reverse ? 'sm:flex-row-reverse sm:justify-between' : ''
      }`}
    >
      <div className="w-full sm:w-1/2 flex sm:justify-center mb-4 sm:mb-0 sm:px-8 md:px-10">
        <img className="w-32 sm:w-auto h-auto" src={imageSrc} alt="" />
      </div>
      <div className="w-full sm:w-1/2">
        <h3 className="mb-3">{title}</h3>
        <p>{desc}</p>
        {linkPath ? (
          <a
            className="mt-6 block"
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
    </div>
  )
}

export default InlineImageWithText
