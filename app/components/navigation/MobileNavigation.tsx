import { Fragment, useState } from 'react'
import { IconButton } from '../shared/Button'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
import NavigationItemLink from './NavigationItemLink'

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="lg:hidden">
      <div className="flex items-center space-x-2">
        <IconButton hideBg onClick={() => setShowMenu(true)} size="medium">
          <Bars3Icon className="h-6 w-6" />
        </IconButton>
      </div>
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
  const closeOnClick = () => {
    setShowMenu(false)
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-30 h-screen w-[90%] overflow-hidden bg-th-bkg-1 transition duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end py-3 px-6">
          <IconButton onClick={() => setShowMenu(false)} hideBg size="medium">
            <XMarkIcon className="h-8 w-8" />
          </IconButton>
        </div>
        <div className="grid grid-cols-2 grid-row-flow gap-6 px-4">
          <div>
            <h4 className="px-4 mb-2">Explore</h4>
            <NavigationItemLink
              path="/explore/tokens"
              onClick={closeOnClick}
              title="Listed tokens"
            />
            <NavigationItemLink
              path="/explore/categories"
              onClick={closeOnClick}
              title="Token categories"
            />
            <NavigationItemLink
              path="/mangosol"
              onClick={closeOnClick}
              title="mangoSOL"
            />
          </div>
          <div>
            <h4 className="px-4 mb-2">Insights</h4>
            {/* <NavigationItemLink
              path="/updates"
              onClick={closeOnClick}
              title="Updates"
            /> */}
            <NavigationItemLink
              path="/blog"
              onClick={closeOnClick}
              title="Blog"
            />
            <NavigationItemLink
              path="/learn"
              onClick={closeOnClick}
              title="Learn"
            />
          </div>
          <div>
            <h4 className="px-4 mb-2">Developers</h4>
            <NavigationItemLink
              path="https://docs.mango.markets"
              onClick={closeOnClick}
              isExternal
              title="Docs"
            />
            <NavigationItemLink
              path="https://github.com/blockworks-foundation"
              onClick={closeOnClick}
              isExternal
              title="Github"
            />
            <NavigationItemLink
              path="https://github.com/blockworks-foundation/mango-v4/tree/dev/ts/client/scripts/mm"
              onClick={closeOnClick}
              isExternal
              title="Market maker bot"
            />
            <NavigationItemLink
              path="https://github.com/blockworks-foundation/mango-v4/tree/dev/bin/liquidator"
              onClick={closeOnClick}
              isExternal
              title="Liquidator bot"
            />
            <NavigationItemLink
              path="https://trello.com/b/tIj7K3FD/mango-development"
              onClick={closeOnClick}
              isExternal
              title="Contribute"
            />
          </div>
          <div>
            <h4 className="px-4 mb-2">Governance</h4>
            <NavigationItemLink
              path="https://dao.mango.markets"
              onClick={closeOnClick}
              isExternal
              title="Vote"
            />
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={showMenu}
        enter="transition-all ease-in duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`fixed top-0 right-0 z-20 backdrop-brightness-[0.3] w-full h-screen`}
          aria-hidden="true"
        />
      </Transition>
    </>
  )
}
