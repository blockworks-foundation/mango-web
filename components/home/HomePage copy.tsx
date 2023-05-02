import {
  ArrowPathRoundedSquareIcon,
  BoltIcon,
  BuildingLibraryIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import useSectionBg from '../../hooks/useSectionBg'
import BotOne from '../icons/BotOne'
import BotThree from '../icons/BotThree'
import BotTwo from '../icons/BotTwo'
import LiquidIcon from '../icons/LiquidIcon'
import { LinkButton } from '../shared/Button'
import ButtonLink from '../shared/ButtonLink'
import ColorBlur from '../shared/ColorBlur'
import HeadingTagline from '../shared/HeadingTagline'
import IconWithText from '../shared/IconWithText'
import InlineImageWithText from '../shared/InlineImageWithText'
import SectionWrapper from '../shared/SectionWrapper'
import Steps from '../shared/Steps'
import HomeTopSection from './HomeTopSection'
import Testimonials from './Testimonials'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)

const tokenIcons = [
  { icon: 'mngo.svg', x: '15%', y: '20%' },
  { icon: 'btc.svg', x: '2%', y: '10%' },
  { icon: 'eth.svg', x: '90%', y: '23%' },
  { icon: 'usdt.svg', x: '79%', y: '25%' },
  { icon: 'sol.svg', x: '95%', y: '80%' },
  { icon: 'usdc.svg', x: '3%', y: '65%' },
  { icon: 'usdc.svg', x: '88%', y: '40%' },
  { icon: 'btc.svg', x: '86%', y: '48%' },
  { icon: 'eth.svg', x: '10%', y: '73%' },
  { icon: 'usdt.svg', x: '14%', y: '78%' },
  { icon: 'sol.svg', x: '12%', y: '40%' },
  { icon: 'mngo.svg', x: '81%', y: '68%' },
]

const STEPS = (t) => [
  {
    desc: 'home:get-wallet-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'home:get-wallet',
    children: (
      <div className="flex items-center space-x-3 sm:space-x-6 mt-4 lg:mt-6">
        <a
          href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {t('home:get-phantom')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {t('home:get-solflare')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
      </div>
    ),
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
    children: (
      <ButtonLink
        className="mt-4 lg:mt-6"
        path="https://app.mango.markets/"
        linkText={t('home:get-started')}
      />
    ),
  },
]

const HomePage = () => {
  const { t } = useTranslation(['common', 'home'])
  const sectionBg = useSectionBg()

  const callouts = useRef()
  const swapPanel = useRef()
  const unlimitedTokens = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.highlight-features')
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity: 1,
          y: -40,
          scrollTrigger: {
            trigger: box,
            end: 'top 40%',
            scrub: true,
          },
        })
      })
    }, callouts) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const icons = self.selector('.token-icon')
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: i % 2 ? 100 : -100,
          rotateZ: i % 2 ? 45 : -45,
          opacity: 0,
          scrollTrigger: {
            trigger: icon,
            scrub: true,
          },
        })
      })
    }, swapPanel) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const icons = self.selector('.unlimited-icon')
      const angle = 360 / 12
      const distance = 150 // distance from origin
      icons.forEach((icon, i) => {
        const radians = (angle * (i + 1) * Math.PI) / 180
        // Calculate x and y offsets
        const offsetX = distance * Math.cos(radians)
        const offsetY = distance * Math.sin(radians)
        const iconTl = gsap.timeline({
          scrollTrigger: {
            trigger: icon,
            start: 'bottom bottom',
            end: 'top -100%',
            scrub: true,
            markers: true,
          },
        })
        iconTl
          .to(icon, {
            x: offsetX,
            y: offsetY,
          })
          .to(icon, {
            rotateZ: 180,
          })
      })
    }, unlimitedTokens) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <>
      <HomeTopSection />
      <SectionWrapper className="pt-24 lg:pt-32 xl:pt-40" noPaddingY>
        <div className="grid grid-cols-6 gap-8" ref={callouts}>
          <IconWithText
            desc={t('home:competitive-fees-desc')}
            icon={<CurrencyDollarIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:competitive-fees')}
            showBackground
          />
          <IconWithText
            desc={t('home:lightning-execution-desc')}
            icon={<BoltIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:lightning-execution')}
            showBackground
          />
          <IconWithText
            desc={t('home:deeply-liquid-desc')}
            icon={<LiquidIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:deeply-liquid')}
            showBackground
          />
          <IconWithText
            desc={t('home:cross-margin-desc')}
            icon={
              <ArrowPathRoundedSquareIcon className="h-5 w-5 text-th-fgd-2" />
            }
            title={t('home:cross-margin')}
            showBackground
          />
          <IconWithText
            desc={t('home:community-governed-desc')}
            icon={<BuildingLibraryIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:community-governed')}
            showBackground
          />
          <IconWithText
            desc={t('home:trade-your-way-desc')}
            icon={<DevicePhoneMobileIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('home:trade-your-way')}
            showBackground
          />
        </div>
      </SectionWrapper>
      <SectionWrapper className="relative overflow-hidden">
        <div className="w-full h-full" ref={swapPanel}>
          <div className="border border-th-bkg-3 px-16 py-24 rounded-xl relative min-h-[730px]">
            <h2 className="mb-4 text-center">{t('home:swap-heading')}</h2>
            <p className="intro-p mb-10 text-center max-w-lg mx-auto">
              {t('home:swap-desc')}
            </p>
            {/* <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1">
              <img
                className="w-20 h-auto"
                src="/images/img-placeholder.png"
                alt=""
              />
              <div>
                <h3 className="mb-3">{t('home:swap-highlight-1-heading')}</h3>
                <p>{t('home:swap-highlight-1-desc')}</p>
              </div>
            </div>
            <div className="col-span-1">
              <img
                className="w-20 h-auto"
                src="/images/img-placeholder.png"
                alt=""
              />
              <div>
                <h3 className="mb-3">{t('home:swap-highlight-2-heading')}</h3>
                <p>{t('home:swap-highlight-2-desc')}</p>
              </div>
            </div>
            <div className="col-span-1">
              <img
                className="w-20 h-auto"
                src="/images/img-placeholder.png"
                alt=""
              />
              <div>
                <h3 className="mb-3">{t('home:swap-highlight-3-heading')}</h3>
                <p>{t('home:swap-highlight-3-desc')}</p>
              </div>
            </div>
          </div> */}
            <ButtonLink
              className="mx-auto"
              path="https://app.mango.markets/"
              linkText={t('home:swap-now')}
              size="large"
            />
            <img
              className="shadow-lg mt-12 w-2/3 h-auto absolute left-1/2 -translate-x-1/2"
              src="/images/@1x-swap-desktop-dark-2.png"
              alt=""
            />
          </div>
          {tokenIcons.map((icon) => (
            <img
              className={`absolute token-icon w-10 h-10`}
              key={icon.icon}
              src={`/icons/mono/${icon.icon}`}
              style={{ top: icon.y, left: icon.x }}
            />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper className="relative sticky top-0">
        <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-10 md:mb-16 relative">
          <div
            className="col-span-12 sm:col-span-6 relative w-full h-full flex items-center justify-center sticky top-0 unlimited-icon-wrapper"
            ref={unlimitedTokens}
          >
            {/* <HeadingTagline text={t('home:risk-engine-desc')} /> */}
            {/* <p>Bubble illustration with token particles inside</p> */}
            {tokenIcons.map((icon) => (
              <div
                className="absolute bg-th-bkg-2 rounded-full h-16 w-16 unlimited-icon flex items-center justify-center"
                key={icon.icon}
              >
                <img className={`w-10 h-10`} src={`/icons/mono/${icon.icon}`} />
              </div>
            ))}
          </div>
          <div className="col-span-12 sm:col-span-6">
            <h2 className="mb-4">{t('home:token-listings')}</h2>
            <p className="intro-p mb-10 max-w-lg">{t('home:swap-desc')}</p>
          </div>
        </div>
        {/* <div className="grid grid-cols-6 gap-x-8 gap-y-12 mt-12">
            <IconWithText
              desc={t('home:risk-engine-1-desc')}
              icon={
                <img
                  src="/images/img-placeholder.png"
                  className="h-20 w-20 mb-4"
                />
              }
              linkPath="#"
              linkText={t('learn-more')}
              noBorder
              title={t('home:risk-engine-1')}
            />
            <IconWithText
              desc={t('home:risk-engine-2-desc')}
              icon={
                <img
                  src="/images/img-placeholder.png"
                  className="h-20 w-20 mb-4"
                />
              }
              linkPath="#"
              linkText={t('learn-more')}
              noBorder
              title={t('home:risk-engine-2')}
            />
            <IconWithText
              desc={t('home:risk-engine-3-desc')}
              icon={
                <img
                  src="/images/img-placeholder.png"
                  className="h-20 w-20 mb-4"
                />
              }
              linkPath="#"
              linkText={t('learn-more')}
              noBorder
              title={t('home:risk-engine-3')}
            />
          </div> */}
      </SectionWrapper>
      <div className={`${sectionBg} z-20 relative`}>
        <SectionWrapper>
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="mb-4">{t('home:built-for-traders-holders')}</h2>
            <p className="intro-p">
              {t('home:built-for-traders-holders-desc')}
            </p>
          </div>
          {/* <InlineImageWithText
            desc={t('home:token-listings-desc')}
            title={t('home:token-listings')}
            imageSrc="/images/img-placeholder.png"
            linkPath="#"
            linkText={t('learn-more')}
          /> */}
          {/* <InlineImageWithText
            desc={t('home:risk-engine-desc')}
            title={t('home:risk-engine')}
            imageSrc="/images/img-placeholder.png"
            linkPath="#"
            linkText={t('learn-more')}
            reverse
          /> */}
          <InlineImageWithText
            desc={t('home:earn-interest-desc')}
            title={t('home:earn-interest')}
            imageSrc="/images/img-placeholder.png"
            linkPath="https://app.mango.markets"
            linkText={t('home:deposit-now')}
            reverse
          />
          <InlineImageWithText
            desc={t('home:borrow-any-token-desc')}
            title={t('home:borrow-any-token')}
            imageSrc="/images/img-placeholder.png"
            linkPath="https://app.mango.markets"
            linkText={t('home:borrow-now')}
            // reverse
          />
        </SectionWrapper>
      </div>
      <div className="relative overflow-hidden">
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
        </SectionWrapper>
        <ColorBlur
          className="animate-blob -top-20 left-0 opacity-10"
          height="300px"
          width="66%"
        />
      </div>
      <div className={`${sectionBg} z-20 relative`}>
        <SectionWrapper noPaddingX>
          <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-10 md:mb-16">
            <div className="col-span-12 sm:col-span-6 page-x-padding">
              <HeadingTagline text={t('home:getting-started')} />
            </div>
            <div className="col-span-12 sm:col-span-6 page-x-padding">
              <h2>{t('home:new-to-mango')}</h2>
            </div>
          </div>
          <Steps steps={STEPS(t)} />
        </SectionWrapper>
      </div>
      {/* add the below when we have some textimonials */}
      <div className="relative overflow-hidden">
        <SectionWrapper>
          <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row sm:items-end mb-10 md:mb-16">
            <div className="col-span-12 order-2 sm:order-1 sm:col-span-6">
              <h2>{t('home:crypto-loves-mango')}</h2>
            </div>
            <div className="col-span-12 order-1 sm:order-2 sm:col-span-6 flex sm:justify-end">
              <HeadingTagline text={t('home:saying-about-us')} />
            </div>
          </div>
          <Testimonials />
        </SectionWrapper>
        <ColorBlur
          className="animate-blob top-0 right-0 opacity-10"
          height="300px"
          width="50%"
        />
      </div>
    </>
  )
}

export default HomePage
