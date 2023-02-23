import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  Fragment,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
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
          <NavigationItemLink path="/mngo" title={t('navigation:mngo-token')} />
        </NavigationItemPanel>
      </NavigationItem>
      <NavigationItem title={t('navigation:products')}>
        <NavigationItemPanel>
          <NavigationItemLink
            path="/mango-dao"
            title={t('navigation:mango-dao')}
          />
          <NavigationItemLink path="/mngo" title={t('navigation:mngo-token')} />
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
  const [isOverButton, setIsOverButton] = useState(false)
  const [isOverList, setIsOverList] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isTouchInput, setIsTouchInput] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)
  const button = useRef(null)

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click()
      setIsOpen(false)
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click()
      setIsOpen(true)
    }
  }, [isOverButton, isOverList])

  useEffect(() => {
    setIsTouchInput(false)
    setHasClicked(false)
  }, [hasClicked])

  return (
    <Popover className="relative">
      <Popover.Button
        className="h-10"
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true)
        }}
        onMouseEnter={() => {
          setIsOverButton(true)
        }}
        onMouseLeave={() => {
          setIsOverButton(false)
        }}
        onClick={() => {
          setHasClicked(true)
          setIsOpen(!isOpen)
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen)
        }}
      >
        <span className="font-display text-th-fgd-3 md:hover:text-th-fgd-1 default-transition">
          {title}
        </span>
      </Popover.Button>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className="absolute z-20 w-56 right-0"
          onMouseEnter={() => {
            setIsOverList(true)
          }}
          onMouseLeave={() => {
            setIsOverList(false)
          }}
        >
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const NavigationItemPanel = ({ children }: { children: ReactNode }) => {
  return <div className="bg-th-bkg-2 py-2 space-y-4 rounded-md">{children}</div>
}

const linkClassNames =
  'px-4 py-2 font-medium text-th-fgd-2 block md:hover:text-th-fgd-4 default-transition'

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
