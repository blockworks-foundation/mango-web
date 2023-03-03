import { ReactNode, useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import TopNavigation from '../navigation/TopNavigation'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-th-bkg-1">
      <TopNavigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
