import { useTranslation } from 'next-i18next'
import SectionWrapper from '../shared/SectionWrapper'
import ButtonLink from '../shared/ButtonLink'

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
    <SectionWrapper className="overflow-x-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5">
          <h1 className="mb-6">
            Safer. Smarter. Faster.
            {/* <span className="bg-gradient-to-b from-th-active via-th-warning to-th-down bg-clip-text text-transparent">
                {t('home:everything')}
              </span> */}
          </h1>
          <p className="intro-p mb-10">
            A magical new way to interact with DeFi. Groundbreaking safety
            features designed to keep your funds secure. The easiest way to
            margin trade any token pair. All powered by flashloans.
          </p>
          {/* <CheckBullet>{t('home:bullet-1')}</CheckBullet>
            <CheckBullet>{t('home:bullet-2')}</CheckBullet>
            <CheckBullet>{t('home:bullet-3')}</CheckBullet>
            <CheckBullet showNewBadge>{t('home:bullet-4')}</CheckBullet>
            <CheckBullet showNewBadge>{t('home:bullet-5')}</CheckBullet> */}
          <ButtonLink
            className="mt-8"
            linkText={t('trade-now')}
            path="https://app.mango.markets"
            size="large"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 relative h-48 sm:h-56 md:h-80 lg:h-full">
          <img
            className="w-full mt-10 lg:mt-0 absolute h-auto lg:-right-40 xl:right-0 z-10 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            src="/images/@1x-trade-desktop-dark-2.png"
            alt=""
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default HomeTopSection
