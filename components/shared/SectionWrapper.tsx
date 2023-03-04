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
      } py-24 lg:py-32 xl:py-40 max-w-[1600px] mx-auto relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
