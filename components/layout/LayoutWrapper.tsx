import { ReactNode, useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import TopNavigation from '../navigation/TopNavigation'
// import ColorBlur from '../shared/ColorBlur'

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
      {/* <ColorBlur
        className="left-0 top-0 animate-blob"
        height="25%"
        width="50%"
      /> */}
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
