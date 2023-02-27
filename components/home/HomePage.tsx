import {
  ArrowPathRoundedSquareIcon,
  BoltIcon,
  BuildingLibraryIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import BotOne from '../icons/BotOne'
import BotThree from '../icons/BotThree'
import BotTwo from '../icons/BotTwo'
import LiquidIcon from '../icons/LiquidIcon'
import Button, { LinkButton } from '../shared/Button'
import ColorBlur from '../shared/ColorBlur'
import HeadingTagline from '../shared/HeadingTagline'
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
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7 h-96 flex justify-center relative">
            <img
              className="absolute z-10 w-full h-auto max-w-[440px]"
              src="/images/swap-mobile.png"
              alt=""
            />
          </div>
          <div className="col-span-5">
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
          className="animate-blob bg-th-down -top-20 left-0 opacity-20"
          height="200px"
          width="50%"
        />
        <ColorBlur
          className="animate-blob -bottom-20 right-0 opacity-10"
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
            linkPath="#"
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
      </SectionWrapper>
      <SectionWrapper noPaddingX>
        <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-8 md:mb-16">
          <div className="col-span-12 sm:col-span-6 lg:px-20 px-6">
            <HeadingTagline text={t('home:getting-started')} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:px-20 px-6">
            <h2>{t('home:new-to-mango')}</h2>
          </div>
        </div>
        <Steps steps={STEPS} />
      </SectionWrapper>
    </>
  )
}

export default HomePage

const IconWithText = ({
  desc,
  icon,
  linkPath,
  linkText,
  noBorder,
  title,
}: {
  desc: string
  icon: ReactNode
  linkPath?: string
  linkText?: string
  noBorder?: boolean
  title: string
}) => {
  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-2">
      <div
        className={`${
          noBorder
            ? ''
            : 'flex items-center justify-center h-10 w-10 rounded-full bg-th-bkg-3'
        } mb-3`}
      >
        {icon}
      </div>
      <h3 className="mb-3">{title}</h3>
      <p>{desc}</p>
      {linkText ? (
        <a
          className="block mt-6"
          href={linkPath}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {linkText}
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </LinkButton>
        </a>
      ) : null}
    </div>
  )
}

const InlineImageWithText = ({
  desc,
  title,
  imageSrc,
  linkPath,
  linkText,
  reverse,
}: {
  desc: string
  title: string
  imageSrc: string
  linkPath: string
  linkText: string
  reverse?: boolean
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center md:space-x-10 mt-12 ${
        reverse ? 'md:flex-row-reverse md:justify-between' : ''
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img className="w-1/2 sm:w-auto h-auto" src={imageSrc} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="mb-3">{title}</h3>
        <p className="mb-6">{desc}</p>
        <a href={linkPath} rel="noopener noreferrer" target="_blank">
          <LinkButton className="flex items-center">
            {linkText}
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </LinkButton>
        </a>
      </div>
    </div>
  )
}
