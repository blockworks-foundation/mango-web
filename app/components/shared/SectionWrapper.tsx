import { ReactNode } from 'react'

const SectionWrapper = ({
  children,
  className,
  noPaddingX,
  noPaddingY,
}: {
  children: ReactNode
  className?: string
  noPaddingX?: boolean
  noPaddingY?: boolean
}) => {
  return (
    <div
      className={`${noPaddingX ? '' : 'page-x-padding'} ${
        noPaddingY ? '' : 'py-12 md:py-24 lg:py-32'
      } max-w-[1600px] mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
