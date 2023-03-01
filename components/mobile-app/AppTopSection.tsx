import { useTranslation } from 'next-i18next'
import SectionWrapper from '../shared/SectionWrapper'
import ColorBlur from '../shared/ColorBlur'
import { useTheme } from 'next-themes'
import CheckBullet from '../shared/CheckBullet'

const AppTopSection = () => {
  const { t } = useTranslation(['common', 'mobile-app'])
  const { theme } = useTheme()

  return (
    <SectionWrapper>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5">
          <h1 className="mb-6">{t('mobile-app:page-heading')}</h1>
          <CheckBullet>{t('mobile-app:bullet-1')}</CheckBullet>
          <CheckBullet>{t('mobile-app:bullet-2')}</CheckBullet>
          <CheckBullet>{t('mobile-app:bullet-3')}</CheckBullet>
          <CheckBullet>{t('mobile-app:bullet-4')}</CheckBullet>
          <CheckBullet>{t('mobile-app:bullet-5')}</CheckBullet>
          <div className="mt-8 flex space-x-6">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-auto h-12 rounded-lg"
                src="/images/app-store-dark.png"
                alt="iOS App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=markets.mango"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-auto h-12 rounded-lg"
                src="/images/google-play-dark.png"
                alt="Google Play Store"
              />
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
      </div>
      <ColorBlur
        className="right-0 top-40 animate-blob"
        height="100%"
        width="50%"
      />
    </SectionWrapper>
  )
}

export default AppTopSection
