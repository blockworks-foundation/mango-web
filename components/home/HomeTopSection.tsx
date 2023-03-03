import { useTranslation } from 'next-i18next'
import SectionWrapper from '../shared/SectionWrapper'
import ColorBlur from '../shared/ColorBlur'
import { useTheme } from 'next-themes'
import CheckBullet from '../shared/CheckBullet'
import ButtonLink from '../shared/ButtonLink'

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
    <div className="relative overflow-hidden">
      <SectionWrapper>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="mb-6">{t('home:long-short-everything')}</h1>
            <CheckBullet>{t('home:bullet-1')}</CheckBullet>
            <CheckBullet>{t('home:bullet-2')}</CheckBullet>
            <CheckBullet>{t('home:bullet-3')}</CheckBullet>
            <CheckBullet showNewBadge>{t('home:bullet-4')}</CheckBullet>
            {/* <CheckBullet showNewBadge>{t('home:bullet-5')}</CheckBullet> */}
            <ButtonLink
              className="mt-8"
              linkText={t('trade-now')}
              path="https://trade.mango.markets"
              size="large"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 relative h-48 sm:h-56 md:h-80 lg:h-full">
            <img
              className="w-full mt-10 lg:mt-0 absolute h-auto lg:-right-40 xl:right-0 z-10 lg:top-1/2 lg:transform lg:-translate-y-1/2"
              src={
                theme === 'Light'
                  ? '/images/@1x-home-hero-desktop-light.png'
                  : '/images/@1x-home-hero-desktop-dark.png'
              }
              alt=""
            />
          </div>
        </div>
      </SectionWrapper>
      <ColorBlur
        className="right-0 top-40 animate-blob"
        height="100%"
        width="50%"
      />
    </div>
  )
}

export default HomeTopSection
