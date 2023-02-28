import { useTheme } from 'next-themes'
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
  const { theme } = useTheme()
  return (
    <div
      className={`bg-th-bkg-1 ${
        noPaddingX ? '' : 'page-x-padding'
      } py-16 md:py-24 relative overflow-hidden ${className} ${
        theme === 'Light' ? 'border-b border-th-bkg-3' : ''
      }`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
