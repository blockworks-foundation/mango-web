// import { useTranslation } from 'next-i18next'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const TopNavigation = () => {
  // const { t } = useTranslation(['common', 'navigation'])
  return (
    <div className="lg:px-12 lg:py-6 px-6 py-3">
      <div className="flex justify-between items-center">
        <a href="https://mango.markets">
          <div className="flex flex-shrink-0 cursor-pointer items-center">
            <img
              className="h-8 w-8 flex-shrink-0"
              src="/logos/logo-mark.svg"
              alt="Mango"
            />
            <span className="hidden md:block ml-2 font-display text-xl text-th-fgd-1">
              Mango
            </span>
          </div>
        </a>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </div>
  )
}

export default TopNavigation
