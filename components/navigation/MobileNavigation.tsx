import { useState } from 'react'
import { IconButton } from '../shared/Button'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
// import { useTranslation } from 'next-i18next'

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="lg:hidden">
      <IconButton hideBg onClick={() => setShowMenu(true)} size="medium">
        <Bars3Icon className="h-6 w-6" />
      </IconButton>
      <MenuPanel showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default MobileNavigation

const MenuPanel = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean
  setShowMenu: (showMenu: boolean) => void
}) => {
  //   const { t } = useTranslation(['common', 'navigation'])
  return (
    <div
      className={`fixed top-0 right-0 z-30 h-screen w-3/4 overflow-hidden bg-th-bkg-2 transition duration-300 ease-in-out ${
        showMenu ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-6">
        <IconButton onClick={() => setShowMenu(false)} hideBg size="medium">
          <XMarkIcon className="h-8 w-8" />
        </IconButton>
      </div>
      {/* <div
        className="border-b border-th-bkg-4"
        onClick={() => setShowMenu(false)}
      ></div> */}
    </div>
  )
}
