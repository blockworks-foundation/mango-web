import Link from 'next/link'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import ThemeSwitcher from '../ThemeSwitcher'

const TopNavigation = () => {
  return (
    <div className="lg:px-20 lg:py-6 px-6 py-4 bg-transparent max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/" shallow>
          <div className="flex flex-shrink-0 cursor-pointer items-center">
            <img
              className="h-10 w-10 flex-shrink-0"
              src="/logos/logo-mark.svg"
              alt="Mango"
            />
            <span className="hidden md:block ml-2 font-display text-2xl text-th-fgd-1">
              Mango
            </span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <DesktopNavigation />
          <MobileNavigation />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

export default TopNavigation
