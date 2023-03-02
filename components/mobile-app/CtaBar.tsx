import { Transition } from '@headlessui/react'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import AppStoreButtons from './AppStoreButtons'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

const CtaBar = () => {
  const { t } = useTranslation('mobile-app')
  const [show, setShow] = useState(true)
  //   const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight
      if (window.scrollY > 800 && !bottom) {
        setShow(true)
      } else {
        setShow(false)
      }
      //   if (bottom) {
      //     setLastScrollY(0)
      //   } else {
      //     setLastScrollY(window.scrollY)
      //   }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [])

  return (
    <Transition
      className="fixed bottom-0 w-full z-30 flex items-center justify-center md:justify-between page-x-padding py-4 bg-th-bkg-1 border-t border-th-bkg-3"
      show={show}
      enter="transition-all ease-in duration-300"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="transition-all ease-out duration-300"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-full"
    >
      <div className="hidden md:flex md:items-center md:space-x-3">
        <p className="text-th-fgd-1 font-display">{t('available-platforms')}</p>
        <ArrowRightIcon className="sideways-bounce h-6 w-6 text-th-fgd-3" />
      </div>
      <AppStoreButtons />
    </Transition>
  )
}

export default CtaBar
