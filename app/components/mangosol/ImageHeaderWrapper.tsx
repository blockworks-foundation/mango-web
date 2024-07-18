'use client'
import { ReactNode, useEffect, useState } from 'react'
import SectionWrapper from '../shared/SectionWrapper'
import { useTheme } from 'next-themes'

const ImageHeaderWrapper = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const imageSrc =
    theme === 'Dark'
      ? `bg-[url('/images/mangosol-bg-dark.webp')]`
      : `bg-[url('/images/mangosol-bg.webp')]`

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    <SectionWrapper
      noPaddingY
      className={`${imageSrc} bg-cover bg-center bg-fixed bg-no-repeat border-t border-th-bkg-2 py-20`}
    >
      {children}
    </SectionWrapper>
  ) : (
    <div className="bg-th-bkg-2 py-20">{children}</div>
  )
}

export default ImageHeaderWrapper
