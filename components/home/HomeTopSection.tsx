import { ReactNode } from 'react'
import Button from '../shared/Button'
import { useTranslation } from 'next-i18next'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import SectionWrapper from '../shared/SectionWrapper'
import ColorBlur from '../shared/ColorBlur'
import { useTheme } from 'next-themes'

const HomeTopSection = () => {
  const { t } = useTranslation(['common', 'home'])
  const { theme } = useTheme()
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
    <SectionWrapper>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5">
          <h1 className="mb-6">{t('home:long-short-everything')}</h1>
          <CheckBullet>{t('home:bullet-1')}</CheckBullet>
          <CheckBullet showNewBadge>{t('home:bullet-2')}</CheckBullet>
          <CheckBullet>{t('home:bullet-3')}</CheckBullet>
          <CheckBullet>{t('home:bullet-4')}</CheckBullet>
          {/* <CheckBullet showNewBadge>{t('home:bullet-5')}</CheckBullet> */}
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
        <div className="col-span-12 lg:col-span-7 relative h-48 sm:h-56 md:h-80 lg:h-full">
          <img
            className="w-full mt-10 lg:mt-0 absolute h-auto -bottom-50 lg:-right-40 z-10 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            src={
              theme === 'Light'
                ? '/images/@1x-home-hero-desktop-light.png'
                : '/images/@1x-home-hero-desktop-dark.png'
            }
            alt=""
          />
        </div>
        {/* <img
        className="w-auto absolute h-1/2 left-0 z-10 -bottom-4"
        src="/images/@1x-home-hero-mobile-dark.png"
        alt=""
      /> */}
      </div>
      <ColorBlur
        className="right-0 top-40 animate-blob"
        height="100%"
        width="50%"
      />
    </SectionWrapper>
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
    <div className="mb-2 flex items-center space-x-2.5">
      <CheckCircleIcon className="h-6 w-6 text-th-fgd-4 flex-shrink-0" />
      <p className="intro-p">{children}</p>
      {showNewBadge ? (
        <div className="p-1 rounded bg-th-active leading-none font-medium text-xxs uppercase text-th-bkg-1">
          {t('new')}
        </div>
      ) : null}
    </div>
  )
}
