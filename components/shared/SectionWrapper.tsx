import { ReactNode } from 'react'

const SectionWrapper = ({
  children,
  className,
  noPaddingX,
}: {
  children: ReactNode
  className?: string
  noPaddingX?: boolean
}) => {
  return (
    <div
      className={`${
        noPaddingX ? '' : 'page-x-padding'
      } py-16 lg:py-24 xl:py-32 max-w-[1600px] mx-auto relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
