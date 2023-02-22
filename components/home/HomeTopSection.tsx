import { ReactNode } from 'react'
import Button from '../shared/Button'
import { useTranslation } from 'next-i18next'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const HomeTopSection = () => {
  const { t } = useTranslation(['common', 'home'])
  // const sideImage = useRef(null)
  // const tl = gsap.timeline()

  // useEffect(() => {
  //   //image animation
  //   tl.to(sideImage.current, 0.7, {
  //     opacity: 1,
  //     y: 0,
  //     ease: Power3.easeOut,
  //   })
  // }, [])

  return (
    <div className="lg:pl-12 pl-6 py-24 relative">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <h1 className="mb-6">{t('home:long-short-everything')}</h1>
        <CheckBullet>{t('home:bullet-1')}</CheckBullet>
        <CheckBullet showNewBadge>{t('home:bullet-2')}</CheckBullet>
        <CheckBullet>{t('home:bullet-3')}</CheckBullet>
        <CheckBullet>{t('home:bullet-4')}</CheckBullet>
        <CheckBullet showNewBadge>{t('home:bullet-5')}</CheckBullet>
        <div className="mt-8">
          <a
            href="https://trade.mango.markets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="large">{t('trade-now')}</Button>
          </a>
        </div>
      </div>
      {/* <img
        ref={sideImage}
        className="hidden md:block absolute -bottom-20 z-10 right-0 w-full md:w-2/3 lg:w-3/5 h-auto opacity-0 transform translate-y-40"
        src="../img/trade.png"
        alt=""
      /> */}
      <div className="absolute w-1/2 h-full top-40 right-0 bg-th-button mix-blend-screen rounded-full filter blur-3xl opacity-10 animate-blob"></div>
    </div>
  )
}

export default HomeTopSection

const CheckBullet = ({
  children,
  showNewBadge,
}: {
  children: ReactNode
  showNewBadge?: boolean
}) => {
  const { t } = useTranslation('common')
  return (
    <div className="mb-2 flex items-center space-x-2">
      <CheckCircleIcon className="h-5 w-5 text-th-fgd-4 flex-shrink-0" />
      <p className="text-lg text-th-fgd-2">{children}</p>
      {showNewBadge ? (
        <div className="p-1 rounded bg-th-active leading-none font-medium text-xxs uppercase text-th-bkg-1">
          {t('new')}
        </div>
      ) : null}
    </div>
  )
}
