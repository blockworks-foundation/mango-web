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
        noPaddingY ? '' : 'py-24 lg:py-32 xl:py-40'
      } max-w-[1600px] mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
