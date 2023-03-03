import { Fragment, useState } from 'react'
import { IconButton } from '../shared/Button'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
import NavigationItemLink from './NavigationItemLink'
import { useTranslation } from 'next-i18next'
import ThemeToggle from './ThemeToggle'

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="lg:hidden">
      <div className="flex items-center space-x-2">
        <ThemeToggle />
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
  const { t } = useTranslation(['common', 'navigation'])
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
            <h4 className="px-4 mb-2">{t('navigation:about')}</h4>
            <NavigationItemLink
              path="/mango-dao"
              title={t('navigation:mango-dao')}
            />
            <NavigationItemLink
              path="/mngo"
              title={t('navigation:mngo-token')}
            />
            <NavigationItemLink
              path="#"
              isExternal
              title={t('navigation:v4-stats')}
            />
            <NavigationItemLink path="/brand" title={t('navigation:brand')} />
          </div>
          <div>
            <h4 className="px-4 mb-2">{t('navigation:products')}</h4>
            <NavigationItemLink
              path="https://app.mango.markets"
              isExternal
              title={t('navigation:mango-v4')}
            />
            <NavigationItemLink
              path="/mobile-app"
              title={t('navigation:mobile-app')}
            />
          </div>
          <div>
            <h4 className="px-4 mb-2">{t('navigation:developers')}</h4>
            <NavigationItemLink
              path="https://docs.mango.markets"
              isExternal
              title={t('navigation:docs')}
            />
            <NavigationItemLink
              path="https://github.com/blockworks-foundation"
              isExternal
              title={t('navigation:github')}
            />
            <NavigationItemLink
              path="https://github.com/blockworks-foundation/mango-v4/tree/dev/ts/client/scripts/mm"
              isExternal
              title={t('navigation:market-maker')}
            />
            <NavigationItemLink
              path="https://github.com/blockworks-foundation"
              isExternal
              title={t('navigation:liquidator')}
            />
            <NavigationItemLink
              path="https://github.com/blockworks-foundation"
              isExternal
              title={t('navigation:contribute')}
            />
          </div>
          <div>
            <h4 className="px-4 mb-2">{t('navigation:community')}</h4>
            <NavigationItemLink
              path="https://dao.mango.markets"
              isExternal
              title={t('navigation:governance')}
            />
            <NavigationItemLink
              path="https://discord.gg/2uwjsBc5yw"
              isExternal
              title={t('navigation:discord')}
            />
            <NavigationItemLink
              path="https://twitter.com/mangomarkets"
              isExternal
              title={t('navigation:twitter')}
            />
            <NavigationItemLink
              path="https://forum.mango.markets"
              isExternal
              title={t('navigation:forum')}
            />
          </div>
          <div>
            <h4 className="px-4 mb-2">{t('navigation:careers')}</h4>
            <NavigationItemLink
              path="/careers"
              title={t('navigation:work-with-us')}
            />
          </div>
        </div>
        {/* <div
        className="border-b border-th-bkg-4"
        onClick={() => setShowMenu(false)}
      ></div> */}
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
