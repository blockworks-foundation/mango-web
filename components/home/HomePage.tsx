import {
  ArrowPathRoundedSquareIcon,
  BoltIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import LiquidIcon from '../icons/LiquidIcon'
import ButtonLink from '../shared/ButtonLink'
import IconWithText from '../shared/IconWithText'
import SectionWrapper from '../shared/SectionWrapper'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import ColorBlur from '../shared/ColorBlur'

const tokenIcons = [
  { icon: 'coin-orange.png', x: '10%', y: '20%' },
  { icon: 'coin-silver.png', x: '2%', y: '10%' },
  { icon: 'cube-pink.png', x: '90%', y: '23%' },
  { icon: 'spring-chrome.png', x: '79%', y: '25%' },
  { icon: 'pyramid-blue.png', x: '95%', y: '80%' },
  { icon: 'ring-white.png', x: '3%', y: '65%' },
  { icon: 'ring-white.png', x: '88%', y: '40%' },
  { icon: 'coin-silver.png', x: '86%', y: '48%' },
  { icon: 'cube-pink.png', x: '10%', y: '73%' },
  { icon: 'spring-chrome.png', x: '14%', y: '78%' },
  { icon: 'pyramid-blue.png', x: '12%', y: '40%' },
  { icon: 'coin-orange.png', x: '81%', y: '68%' },
]

const MOBILE_IMAGE_CLASSES = 'h-auto w-3/4 sm:w-1/2 max-w-[480px] mb-6 lg:mb-0'

const HomePage = () => {
  const { t } = useTranslation(['common', 'home'])

  const topSection = useRef()
  const callouts = useRef()
  const swapPanel = useRef()
  const coreFeatures = useRef()

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin)
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.highlight-features')
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity: 1,
          y: -40,
          ease: 'power3.inOut',
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
      const spheres = self.selector('.sphere')
      spheres.forEach((sphere, i) => {
        gsap.to(sphere, {
          y: i % 2 ? -200 : 200,
          scrollTrigger: {
            trigger: sphere,
            start: 'center center',
            scrub: true,
          },
        })
      })
    }, topSection) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <>
      <SectionWrapper className="overflow-hidden h-screen">
        <div className="grid grid-cols-12" ref={topSection}>
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0 relative z-10">
            <h1 className="mb-6 text-center lg:text-left">
              Safer. Smarter. Faster.
            </h1>
            <p className="intro-p mb-10 text-center lg:text-left">
              A magical new way to interact with DeFi. Groundbreaking safety
              features designed to keep your funds secure. The easiest way to
              margin trade any token pair. All powered by flashloans.
            </p>
            <ButtonLink
              className="mt-8 mx-auto lg:mx-0"
              linkText={t('trade-now')}
              path="https://app.mango.markets"
              size="large"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 relative h-full flex justify-center">
            <img
              className="sphere absolute -top-12 sm:-top-28 opacity-60 -left-6 sm:left-6 w-56 h-auto xl:-left-12"
              src="/images/new/black-sphere.png"
              alt=""
            />
            <img
              className="w-3/4 lg:w-full absolute h-auto lg:-right-40 lg:top-1/2 lg:transform lg:-translate-y-1/2 xl:right-0 xl:w-[740px]"
              src="/images/new/trade-desktop.png"
              alt=""
            />
            <img
              className="sphere absolute lg:-bottom-16 -right-28 sm:-right-24 md:-right-14 lg:right-0 lg:left-0 xl:-left-16 w-80 h-auto"
              src="/images/new/orange-sphere.png"
              alt=""
            />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div
          className="grid grid-cols-6 gap-4 md:gap-6 xl:gap-8"
          ref={callouts}
        >
          <IconWithText
            desc={t('home:competitive-fees-desc')}
            icon={<CurrencyDollarIcon className="h-7 w-7 text-th-fgd-2" />}
            title={t('home:competitive-fees')}
            showBackground
          />
          <IconWithText
            desc={t('home:lightning-execution-desc')}
            icon={<BoltIcon className="h-7 w-7 text-th-fgd-2" />}
            title={t('home:lightning-execution')}
            showBackground
          />
          <IconWithText
            desc={t('home:deeply-liquid-desc')}
            icon={<LiquidIcon className="h-7 w-7 text-th-fgd-2" />}
            title={t('home:deeply-liquid')}
            showBackground
          />
          <IconWithText
            desc={t('home:cross-margin-desc')}
            icon={
              <ArrowPathRoundedSquareIcon className="h-7 w-7 text-th-fgd-2" />
            }
            title={t('home:cross-margin')}
            showBackground
          />
          <IconWithText
            desc={t('home:community-governed-desc')}
            icon={<BuildingLibraryIcon className="h-7 w-7 text-th-fgd-2" />}
            title={t('home:community-governed')}
            showBackground
          />
          <IconWithText
            desc={t('home:trade-your-way-desc')}
            icon={<DevicePhoneMobileIcon className="h-7 w-7 text-th-fgd-2" />}
            title={t('home:trade-your-way')}
            showBackground
          />
        </div>
      </SectionWrapper>
      <div className="bg-[url('/images/new/stage-slice.png')] bg-repeat-x bg-contain">
        <SectionWrapper className="relative overflow-hidden">
          <ColorBlur
            className="-top-20 left-1/2 -translate-x-1/2"
            height="1000px"
            width="600px"
          />
          <div className="w-full h-full" ref={swapPanel}>
            <div className="relative min-h-[580px] md:min-h-[640px] lg:min-h-[730px]">
              <div className="relative z-10">
                <h2 className="mb-4 text-center">{t('home:swap-heading')}</h2>
                <p className="intro-p text-center max-w-lg mx-auto">
                  {t('home:swap-desc')}
                </p>
              </div>
              <ButtonLink
                className="mx-auto mt-10"
                path="https://app.mango.markets/"
                linkText={t('home:swap-now')}
                size="large"
              />
              <img
                className="shadow-lg mt-12 w-full sm:w-3/4 max-w-[800px] h-auto absolute left-1/2 -translate-x-1/2 bottom-10"
                src="/images/new/swap-desktop.png"
                alt=""
              />
            </div>
            {tokenIcons.map((icon) => (
              <img
                className={`absolute token-icon w-10 md:w-16 xl:w-20 h-auto`}
                key={icon.icon}
                src={`/images/new/${icon.icon}`}
                style={{ top: icon.y, left: icon.x }}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div
          className="core-features flex flex-col justify-center"
          ref={coreFeatures}
        >
          <div className="h-full max-w-[1200px] xl:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center pb-12 lg:pb-28">
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/trade-favorites.png"
              />
              <div>
                <h2 className="mb-4">Leverage trade your favorite markets</h2>
                <p className="intro-p">
                  Up to 10x leverage on the spot and perp markets you want to
                  trade. Cross-margined accounts allow you to make the most of
                  your capital.
                </p>
                <ButtonLink
                  className="mt-10"
                  path="https://app.mango.markets/"
                  linkText="Start Trading"
                  size="large"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:items-center py-12 lg:py-28">
              <div>
                <h2 className="mb-4">Unparalleled safety</h2>
                <p className="intro-p">
                  Innovative safety features to protect your funds. Mango is
                  manipulation resistant to minimize potential losses from bad
                  actors or extreme volatility.
                </p>
                <ButtonLink
                  className="mt-10"
                  path="https://docs.mango.markets/"
                  linkText={t('learn-more')}
                  size="large"
                />
              </div>
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/unparalleled-safety.png"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center py-12 lg:py-28">
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/token-listings.png"
              />
              <div>
                <h2 className="mb-4 max-w-lg">Permissionless token listings</h2>
                <p className="intro-p">
                  Anyone can easily list any token on Mango. A governance
                  proposal is created upon submission and if successful the
                  token will list automatically.
                </p>
                <ButtonLink
                  className="mt-10"
                  path="https://app.mango.markets/governance/listToken"
                  linkText="List a Token"
                  size="large"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:items-center pt-12 lg:pt-28">
              <div>
                <h2 className="mb-4">Borrow and earn interest</h2>
                <p className="intro-p">
                  All tokens on Mango can be borrowed for use in other DeFi
                  activities. Plus, all deposits earn interest without unlock
                  periods.
                </p>
                <ButtonLink
                  className="mt-10"
                  path="https://app.mango.markets/"
                  linkText="Get Started"
                  size="large"
                />
              </div>
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/borrow.png"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
      <div className="bg-[url('/images/new/cube-bg.png')] bg-repeat">
        <SectionWrapper className="relative overflow-hidden">
          <ColorBlur className="-top-10 left-0" height="600px" width="600px" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 w-[800px] rounded-full h-[800px]" />
          <div className="flex flex-col items-center relative">
            <img className="w-64 h-auto mb-12" src="/images/new/build.png" />
            <h2 className="mb-4 text-center">Build on Mango</h2>
            <p className="intro-p text-center max-w-lg mx-auto">
              Mango is 100% open source and highly composable. Build trading
              bots, new product integrations, community tools or whatever you
              desire. Explore the code and get building.
            </p>

            <ButtonLink
              className="mx-auto mt-10"
              path="https://github.com/blockworks-foundation"
              linkText={t('home:explore-the-code')}
              size="large"
            />
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}

export default HomePage
