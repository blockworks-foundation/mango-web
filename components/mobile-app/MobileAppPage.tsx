import {
  ChevronRightIcon,
  CurrencyEuroIcon,
  GlobeAsiaAustraliaIcon,
  KeyIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import { LinkButton } from '../shared/Button'
import HeadingTagline from '../shared/HeadingTagline'
import IconWithText from '../shared/IconWithText'
import InlineImageWithText from '../shared/InlineImageWithText'
import SectionWrapper from '../shared/SectionWrapper'
import Steps from '../shared/Steps'
import AppTopSection from './AppTopSection'

const STEPS = (t) => [
  {
    desc: 'mobile-app:get-wallet-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'mobile-app:get-wallet',
    children: (
      <div className="flex items-center space-x-6 mt-4 lg:mt-6">
        <a
          href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {t('mobile-app:get-phantom')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {t('mobile-app:get-solflare')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
      </div>
    ),
  },
  {
    desc: 'mobile-app:fund-wallet-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'mobile-app:fund-wallet',
  },
  {
    desc: 'mobile-app:connect-mango-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'mobile-app:connect-mango',
  },
  {
    desc: 'mobile-app:trade-earn-borrow-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'mobile-app:trade-earn-borrow',
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
          desc={t('mobile-app:token-listings-desc')}
          title={t('mobile-app:token-listings')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('learn-more')}
        />
        <InlineImageWithText
          desc={t('mobile-app:earn-interest-desc')}
          title={t('mobile-app:earn-interest')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('mobile-app:deposit-now')}
          reverse
        />
        <InlineImageWithText
          desc={t('mobile-app:risk-engine-desc')}
          title={t('mobile-app:risk-engine')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('learn-more')}
        />
        <InlineImageWithText
          desc={t('mobile-app:borrow-any-token-desc')}
          title={t('mobile-app:borrow-any-token')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('mobile-app:borrow-now')}
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
            <HeadingTagline text={t('mobile-app:getting-started')} />
          </div>
          <div className="col-span-12 sm:col-span-6 page-x-padding">
            <h2>{t('mobile-app:new-to-mango')}</h2>
          </div>
        </div>
        <Steps steps={STEPS(t)} />
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
