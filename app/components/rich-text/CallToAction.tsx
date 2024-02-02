import Image from 'next/image'
import ButtonLink from '../shared/ButtonLink'

type Image = {
  fields: {
    title?: string
    file: {
      url: string
    }
  }
}

type CtaData = {
  title: string
  description?: string
  linkPath: string
  linkText: string
  image?: Image | null
}

const CallToAction = ({ data }: { data: CtaData }) => {
  const { linkPath, linkText, description, image, title } = data
  const imageSrc = image?.fields?.file?.url
  const imageAlt = image?.fields?.title || 'CTA Image'
  const isExtenalLink = linkPath.includes('http')
  return (
    <span className="bg-th-bkg-1 border border-th-bkg-4 p-4 md:px-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between my-4">
      <span className="flex items-center space-x-3">
        {imageSrc ? (
          <Image
            className="flex-shrink-0"
            src={`https:${imageSrc}`}
            alt={imageAlt}
            height={56}
            width={56}
          />
        ) : null}
        <span>
          <span className="text-th-fgd-2 text-base block font-display">
            {title}
          </span>
          <span className="text-sm block text-th-fgd-2">{description}</span>
        </span>
      </span>
      <span className="flex space-x-2 md:pl-4 pt-4 md:pt-0">
        <ButtonLink
          linkText={linkText}
          path={linkPath}
          size="small"
          target={isExtenalLink ? '_blank' : undefined}
        />
      </span>
    </span>
  )
}

export default CallToAction
