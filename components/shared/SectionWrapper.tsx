import { ReactNode } from 'react'

const SectionWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={`bg-th-bkg-1 lg:px-20 px-6 py-24 relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
