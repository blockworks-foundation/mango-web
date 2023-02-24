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
      className={`bg-th-bkg-1 ${
        noPaddingX ? '' : 'lg:px-20 px-6'
      } py-24 relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
