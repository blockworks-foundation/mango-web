import {
  CurrencyEuroIcon,
  GlobeAsiaAustraliaIcon,
  KeyIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
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
  return (
    <>
      <AppTopSection />
      <SectionWrapper>
        <div className="grid grid-cols-6 gap-12">
          <IconWithText
            icon={<CurrencyEuroIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('mobile-app:multiple-currencies')}
          />
          <IconWithText
            icon={<GlobeAsiaAustraliaIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('mobile-app:access-everywhere')}
          />
          <IconWithText
            icon={<KeyIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('mobile-app:fully-custodial')}
          />
        </div>
      </SectionWrapper>
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
      </SectionWrapper>
      {/* <SectionWrapper>
        <h2 className="mb-4">{t('mobile-app:trading-bots-welcome')}</h2>
        <p className="intro-p max-w-[800px]">
          {t('mobile-app:trading-bots-welcome-desc')}
        </p>
        <div className="grid grid-cols-6 gap-x-8 gap-y-12 mt-12">
          <IconWithText
            desc={t('mobile-app:market-maker-desc')}
            icon={<BotOne className="h-16 w-16 mb-4 text-th-fgd-2" />}
            linkPath="https://github.com/blockworks-foundation/mango-v4/tree/dev/ts/client/scripts/mm"
            linkText={t('mobile-app:market-maker-link')}
            noBorder
            title={t('mobile-app:market-maker')}
          />
          <IconWithText
            desc={t('mobile-app:liquidator-desc')}
            icon={<BotTwo className="h-16 w-16 mb-4 text-th-fgd-2" />}
            linkPath="#"
            linkText={t('mobile-app:liquidator-link')}
            noBorder
            title={t('mobile-app:liquidator')}
          />
          <IconWithText
            desc={t('mobile-app:build-your-own-desc')}
            icon={<BotThree className="h-16 w-16 mb-4 text-th-fgd-2" />}
            linkPath="#"
            linkText={t('mobile-app:explore-the-code')}
            noBorder
            title={t('mobile-app:build-your-own')}
          />
        </div>
        <ColorBlur
          className="animate-blob top-0 left-0 opacity-10"
          height="300px"
          width="75%"
        />
      </SectionWrapper> */}
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
      {/* add the below when we have some textimonials */}
      {/* <SectionWrapper>
        <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row sm:items-end mb-12 md:mb-16">
          <div className="col-span-12 order-2 sm:order-1 sm:col-span-6">
            <h2>{t('mobile-app:crypto-loves-mango')}</h2>
          </div>
          <div className="col-span-12 order-1 sm:order-2 sm:col-span-6 flex sm:justify-end">
            <HeadingTagline text={t('mobile-app:saying-about-us')} />
          </div>
        </div>
        <Testimonials />
      </SectionWrapper> */}
    </>
  )
}

export default MobileAppPage
