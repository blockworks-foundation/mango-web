import {
  CurrencyEuroIcon,
  GlobeAsiaAustraliaIcon,
  KeyIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import useSectionBg from '../../hooks/useSectionBg'
import ColorBlur from '../shared/ColorBlur'
import HeadingTagline from '../shared/HeadingTagline'
import IconWithText from '../shared/IconWithText'
import InlineImageWithText from '../shared/InlineImageWithText'
import SectionWrapper from '../shared/SectionWrapper'
import Steps from '../shared/Steps'
import AppTopSection from './AppTopSection'
import CtaBar from './CtaBar'

const STEPS = [
  {
    desc: 'mobile-app:buy-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'mobile-app:buy',
  },
  {
    desc: 'mobile-app:invest-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'mobile-app:invest',
  },
  {
    desc: 'mobile-app:stack-growth-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'mobile-app:stack-growth',
  },
]

const MobileAppPage = () => {
  const { t } = useTranslation(['common', 'mobile-app'])
  const sectionBg = useSectionBg()
  return (
    <>
      <AppTopSection />
      <div className={`${sectionBg} z-20 relative`}>
        <SectionWrapper>
          <div className="grid grid-cols-6 gap-12">
            <IconWithText
              icon={<CurrencyEuroIcon className="h-5 w-5 text-th-fgd-2" />}
              title={t('mobile-app:multiple-currencies')}
            />
            <IconWithText
              icon={
                <GlobeAsiaAustraliaIcon className="h-5 w-5 text-th-fgd-2" />
              }
              title={t('mobile-app:access-everywhere')}
            />
            <IconWithText
              icon={<KeyIcon className="h-5 w-5 text-th-fgd-2" />}
              title={t('mobile-app:fully-custodial')}
            />
          </div>
        </SectionWrapper>
      </div>
      <CtaBar />
      <SectionWrapper>
        <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-8 md:mb-16">
          <div className="col-span-12 sm:col-span-6">
            <HeadingTagline text={t('mobile-app:easy-to-use-tagline')} />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <h2>{t('mobile-app:easy-to-use')}</h2>
          </div>
        </div>
        <InlineImageWithText
          desc={t('mobile-app:send-payments-desc')}
          title={t('mobile-app:send-payments')}
          imageSrc="/images/img-placeholder.png"
        />
        <InlineImageWithText
          desc={t('mobile-app:accept-payments-desc')}
          title={t('mobile-app:accept-payments')}
          imageSrc="/images/img-placeholder.png"
          reverse
        />
        <ColorBlur
          className="left-0 top-0 bg-th-down animate-blob"
          height="200px"
          width="50%"
        />
      </SectionWrapper>
      <div className={`${sectionBg}`}>
        <SectionWrapper noPaddingX>
          <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-8 md:mb-12">
            <div className="col-span-12 sm:col-span-6 page-x-padding">
              <h2>{t('mobile-app:steps-heading')}</h2>
            </div>
            <div className="col-span-12 sm:col-span-6 page-x-padding flex justify-end">
              <HeadingTagline text={t('mobile-app:steps-tagline')} />
            </div>
          </div>
          <Steps steps={STEPS} />
        </SectionWrapper>
      </div>
    </>
  )
}

export default MobileAppPage
