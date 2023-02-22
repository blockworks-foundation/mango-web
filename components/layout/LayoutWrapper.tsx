import { ReactNode } from 'react'
import Footer from '../footer/Footer'
import TopNavigation from '../navigation/TopNavigation'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-th-bkg-1">
      <TopNavigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
