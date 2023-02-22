import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, ReactNode, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Button from '../shared/Button'

const DesktopNavigation = () => {
  const { t } = useTranslation(['common', 'navigation'])
  return (
    <div className="hidden lg:flex lg:items-center space-x-8">
      <NavigationItem title={t('navigation:about')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="/mango-dao"
            title={t('navigation:mango-dao')}
          />
          <NavigationItemLink path="/token" title={t('navigation:token')} />
        </NavigationItemPanel>
      </NavigationItem>
      <NavigationItem title={t('navigation:products')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="/mango-dao"
            title={t('navigation:mango-dao')}
          />
          <NavigationItemLink path="/token" title={t('navigation:token')} />
        </NavigationItemPanel>
      </NavigationItem>
      <NavigationItem title={t('navigation:developers')}>
        <div />
      </NavigationItem>
      <NavigationItem title={t('navigation:community')}>
        <div />
      </NavigationItem>
      <NavigationItem title={t('navigation:careers')}>
        <div />
      </NavigationItem>
      <a
        href="https://trade.mango.markets"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>{t('trade-now')}</Button>
      </a>
    </div>
  )
}

export default DesktopNavigation

const NavigationItem = ({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) => {
  const buttonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  // const [isOverMenu, setIsOverMenu] = useState(false)

  const toggleMenu = (open) => {
    setIsOpen(!open)
    buttonRef?.current?.click()
  }

  const onHover = (open, action) => {
    if (
      (!open && !isOpen && action === 'onMouseEnter') ||
      (open && isOpen && action === 'onMouseLeave')
    ) {
      toggleMenu(open)
    }
  }

  const handleClick = (open) => {
    setIsOpen(!open)
  }

  // const handleClickOutside = (event) => {
  //   if (buttonRef.current && !buttonRef.current.contains(event.target)) {
  //     event.stopPropagation()
  //   }
  // }
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside)

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // })

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="text-th-fgd-2 md:hover:text-th-active"
            onMouseEnter={() => onHover(open, 'onMouseEnter')}
            onMouseLeave={() => onHover(open, 'onMouseLeave')}
            ref={buttonRef}
          >
            <div onClick={() => handleClick(open)}>
              <span className="font-display text-th-fgd-2">{title}</span>
            </div>
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static className="absolute z-20 w-56 top-8 right-0">
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

const NavigationItemPanel = ({ children }: { children: ReactNode }) => {
  return <div className="bg-th-bkg-2 py-2 space-y-4 rounded-md">{children}</div>
}

const linkClassNames = 'px-4 py-2 font-medium text-th-fgd-2 block'

const NavigationItemLink = ({
  path,
  title,
  isExternal = false,
}: {
  isExternal?: boolean
  path: string
  title: string
}) => {
  return isExternal ? (
    <a className={linkClassNames} href={path}>
      {title}
    </a>
  ) : (
    <Link href={path} shallow>
      <span className={linkClassNames}>{title}</span>
    </Link>
  )
}
