import {
  ArrowPathRoundedSquareIcon,
  BoltIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'
import BotOne from '../icons/BotOne'
import BotThree from '../icons/BotThree'
import BotTwo from '../icons/BotTwo'
import LiquidIcon from '../icons/LiquidIcon'
import Button from '../shared/Button'
import ColorBlur from '../shared/ColorBlur'
import HeadingTagline from '../shared/HeadingTagline'
import IconWithText from '../shared/IconWithText'
import InlineImageWithText from '../shared/InlineImageWithText'
import SectionWrapper from '../shared/SectionWrapper'
import Steps from '../shared/Steps'
import HomeTopSection from './HomeTopSection'

const STEPS = [
  {
    desc: 'home:get-wallet-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'home:get-wallet',
  },
  {
    desc: 'home:fund-wallet-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'home:fund-wallet',
  },
  {
    desc: 'home:connect-mango-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'home:connect-mango',
  },
  {
    desc: 'home:trade-earn-borrow-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'home:trade-earn-borrow',
  },
]

const HomePage = () => {
  const { t } = useTranslation(['common', 'home'])
  const { theme } = useTheme()
  return (
    <>
      <HomeTopSection />
      <SectionWrapper>
        <div className="grid grid-cols-6 gap-12">
          <IconWithText
            desc={t('home:competitive-fees-desc')}
            icon={<CurrencyDollarIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:competitive-fees')}
          />
          <IconWithText
            desc={t('home:lightning-execution-desc')}
            icon={<BoltIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:lightning-execution')}
          />
          <IconWithText
            desc={t('home:deeply-liquid-desc')}
            icon={<LiquidIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:deeply-liquid')}
          />
          <IconWithText
            desc={t('home:cross-margin-desc')}
            icon={
              <ArrowPathRoundedSquareIcon className="h-5 w-5 text-th-fgd-2" />
            }
            title={t('home:cross-margin')}
          />
          <IconWithText
            desc={t('home:community-governed-desc')}
            icon={<BuildingLibraryIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:community-governed')}
          />
          <IconWithText
            desc={t('home:trade-your-way-desc')}
            icon={<DevicePhoneMobileIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:trade-your-way')}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="hidden md:col-span-6 h-96 md:flex justify-center relative">
            <img
              className="absolute z-10 w-auto h-auto md:h-[480px] lg:h-[640px]"
              src={
                theme === 'Light'
                  ? '/images/@1x-swap-light.png'
                  : '/images/@1x-swap-dark.png'
              }
              alt=""
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="mb-4">{t('home:swap-heading')}</h2>
            <p className="intro-p mb-8">{t('home:swap-desc')}</p>
            <h3 className="mb-3">{t('home:swap-highlight-1-heading')}</h3>
            <p className="mb-8">{t('home:swap-highlight-1-desc')}</p>
            <h3 className="mb-3">{t('home:swap-highlight-2-heading')}</h3>
            <p className="mb-8">{t('home:swap-highlight-2-desc')}</p>
            <h3 className="mb-3">{t('home:swap-highlight-3-heading')}</h3>
            <p className="mb-10">{t('home:swap-highlight-3-desc')}</p>
            <Button className="text-lg" size="large">
              {t('home:swap-now')}
            </Button>
          </div>
        </div>
        <ColorBlur
          className="animate-blob -top-20 left-0 opacity-10"
          height="200px"
          width="50%"
        />
        <ColorBlur
          className="animate-blob bg-th-down -bottom-20 right-0 opacity-10"
          height="200px"
          width="66%"
        />
      </SectionWrapper>
      <SectionWrapper>
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="mb-4">{t('home:built-for-traders-holders')}</h2>
          <p className="intro-p">{t('home:built-for-traders-holders-desc')}</p>
        </div>
        <InlineImageWithText
          desc={t('home:token-listings-desc')}
          title={t('home:token-listings')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('learn-more')}
        />
        <InlineImageWithText
          desc={t('home:earn-interest-desc')}
          title={t('home:earn-interest')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('home:deposit-now')}
          reverse
        />
        <InlineImageWithText
          desc={t('home:risk-engine-desc')}
          title={t('home:risk-engine')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('learn-more')}
        />
        <InlineImageWithText
          desc={t('home:borrow-any-token-desc')}
          title={t('home:borrow-any-token')}
          imageSrc="/images/img-placeholder.png"
          linkPath="#"
          linkText={t('home:borrow-now')}
          reverse
        />
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-4">{t('home:trading-bots-welcome')}</h2>
        <p className="intro-p max-w-[800px]">
          {t('home:trading-bots-welcome-desc')}
        </p>
        <div className="grid grid-cols-6 gap-x-8 gap-y-12 mt-12">
          <IconWithText
            desc={t('home:market-maker-desc')}
            icon={<BotOne className="h-16 w-16 mb-4 text-th-fgd-2" />}
            linkPath="https://github.com/blockworks-foundation/mango-v4/tree/dev/ts/client/scripts/mm"
            linkText={t('home:market-maker-link')}
            noBorder
            title={t('home:market-maker')}
          />
          <IconWithText
            desc={t('home:liquidator-desc')}
            icon={<BotTwo className="h-16 w-16 mb-4 text-th-fgd-2" />}
            linkPath="#"
            linkText={t('home:liquidator-link')}
            noBorder
            title={t('home:liquidator')}
          />
          <IconWithText
            desc={t('home:build-your-own-desc')}
            icon={<BotThree className="h-16 w-16 mb-4 text-th-fgd-2" />}
            linkPath="#"
            linkText={t('home:explore-the-code')}
            noBorder
            title={t('home:build-your-own')}
          />
        </div>
        <ColorBlur
          className="animate-blob top-0 left-0 opacity-10"
          height="300px"
          width="75%"
        />
      </SectionWrapper>
      <SectionWrapper noPaddingX>
        <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-8 md:mb-12">
          <div className="col-span-12 sm:col-span-6 page-x-padding">
            <HeadingTagline text={t('home:getting-started')} />
          </div>
          <div className="col-span-12 sm:col-span-6 page-x-padding">
            <h2>{t('home:new-to-mango')}</h2>
          </div>
        </div>
        <Steps steps={STEPS} />
      </SectionWrapper>
      {/* add the below when we have some textimonials */}
      {/* <SectionWrapper>
        <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row sm:items-end mb-12 md:mb-16">
          <div className="col-span-12 order-2 sm:order-1 sm:col-span-6">
            <h2>{t('home:crypto-loves-mango')}</h2>
          </div>
          <div className="col-span-12 order-1 sm:order-2 sm:col-span-6 flex sm:justify-end">
            <HeadingTagline text={t('home:saying-about-us')} />
          </div>
        </div>
        <Testimonials />
      </SectionWrapper> */}
    </>
  )
}

export default HomePage
