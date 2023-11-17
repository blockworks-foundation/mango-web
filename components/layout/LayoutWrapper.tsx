import { ReactNode, useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import TopNavigation from '../navigation/TopNavigation'
import { ttCommons, ttCommonsExpanded, ttCommonsMono } from '../../utils/fonts'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main
      className={`bg-th-bkg-1 ${ttCommons.variable} ${ttCommonsExpanded.variable} ${ttCommonsMono.variable} font-sans`}
    >
      <TopNavigation />
      <div>{children}</div>
      <Footer />
    </main>
  )
}

export default LayoutWrapper
