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
import { useLayoutEffect, useRef } from 'react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import ColorBlur from '../shared/ColorBlur'
import Ottersec from '../icons/Ottersec'

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)

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

const MOBILE_IMAGE_CLASSES =
  'core-image h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[480px] md:w-[480px] mb-6 lg:mb-0'

const HomePage = () => {
  const { t } = useTranslation(['common', 'home'])

  const topSection = useRef()
  const callouts = useRef()
  const swapPanel = useRef()
  const coreFeatures = useRef()
  const build = useRef()

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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#swap-desktop',
            scrub: true,
          },
        })
        .from('#swap-desktop', {
          rotateX: -45,
        })
    }, swapPanel) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const features = self.selector('.core-feature')
      const text = self.selector('.core-text')
      const image = self.selector('.core-image')
      features.forEach((feature, i) => {
        gsap.from(text[i], {
          opacity: 0.4,
          y: 60,
          ease: 'power3.inOut',
          scrollTrigger: {
            start: 'top 60%',
            end: 'top 20%',
            trigger: feature,
            scrub: true,
          },
        })
        gsap.from(image[i], {
          opacity: 0.4,
          scale: 0.9,
          ease: 'power3.inOut',
          scrollTrigger: {
            start: 'top 60%',
            end: 'top 20%',
            trigger: feature,
            scrub: true,
          },
        })
      })
    }, coreFeatures) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const spheres = self.selector('.sphere')
      spheres.forEach((sphere, i) => {
        gsap.to(sphere, {
          y: i % 2 ? -150 : 100,
          scrollTrigger: {
            trigger: sphere,
            start: i % 2 ? 'bottom bottom' : 'center center',
            scrub: true,
          },
        })
      })
    }, topSection) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#build',
            scrub: true,
          },
        })
        .from('#build', {
          y: -200,
        })
    }, build) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <>
      <SectionWrapper className="overflow-hidden h-[760px] lg:h-auto">
        <div className="grid grid-cols-12" ref={topSection}>
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0 relative z-10">
            <h1 className="mb-6 text-center lg:text-left">
              {t('home:home-heading')}
            </h1>
            <p className="intro-p mb-10 text-center lg:text-left">
              {t('home:home-desc')}
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
              className="sphere absolute -top-12 sm:-top-28 xl:-top-40 opacity-60 -left-6 sm:left-6 w-56 h-auto xl:-left-12"
              src="/images/new/black-sphere.png"
              alt=""
            />
            <img
              className="w-3/4 lg:w-full absolute h-auto lg:-right-40 lg:top-1/2 lg:transform lg:-translate-y-1/2 xl:right-0 xl:w-[740px]"
              src="/images/new/trade-desktop.png"
              alt=""
            />
            <img
              className="sphere absolute lg:-bottom-24 xl:-bottom-40 -right-28 sm:-right-24 md:-right-14 lg:right-0 lg:left-0 xl:-left-16 w-80 h-auto"
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
            icon={
              <CurrencyDollarIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title={t('home:competitive-fees')}
            showBackground
          />
          <IconWithText
            desc={t('home:lightning-execution-desc')}
            icon={<BoltIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />}
            title={t('home:lightning-execution')}
            showBackground
          />
          <IconWithText
            desc={t('home:deeply-liquid-desc')}
            icon={
              <LiquidIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title={t('home:deeply-liquid')}
            showBackground
          />
          <IconWithText
            desc={t('home:cross-margin-desc')}
            icon={
              <ArrowPathRoundedSquareIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title={t('home:cross-margin')}
            showBackground
          />
          <IconWithText
            desc={t('home:community-governed-desc')}
            icon={
              <BuildingLibraryIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title={t('home:community-governed')}
            showBackground
          />
          <IconWithText
            desc={t('home:trade-your-way-desc')}
            icon={
              <DevicePhoneMobileIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title={t('home:trade-your-way')}
            showBackground
          />
        </div>
      </SectionWrapper>
      <div className="bg-[url('/images/new/stage-slice.png')] bg-repeat-x bg-contain">
        <SectionWrapper className="relative overflow-hidden">
          <ColorBlur
            className="-top-20 left-0 -rotate-25 opacity-20"
            height="800px"
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
                className="shadow-lg mt-12 w-full sm:w-3/4 max-w-[800px] h-auto absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-10"
                src="/images/new/swap-desktop.png"
                alt=""
                id="swap-desktop"
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
          <ColorBlur
            className="-top-20 left-0 -rotate-25 opacity-20"
            height="800px"
            width="600px"
          />
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="flex flex-col justify-center" ref={coreFeatures}>
          <div className="h-full xl:px-12">
            <div className="core-feature flex flex-col lg:flex-row lg:items-center pb-12 lg:pb-24">
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/trade-favorites.png"
              />
              <div className="core-text">
                <h2 className="mb-4">{t('home:leverage-trade-heading')}</h2>
                <p className="intro-p">{t('home:leverage-trade-desc')}</p>
                <ButtonLink
                  className="mt-10"
                  path="https://app.mango.markets/"
                  linkText="Start Trading"
                  size="large"
                />
              </div>
            </div>
            <div className="core-feature flex flex-col-reverse lg:flex-row lg:items-center py-12 lg:py-24">
              <div className="core-text">
                <h2 className="mb-4">{t('home:safety-heading')}</h2>
                <p className="intro-p">{t('home:safety-desc')}</p>
                <div className="flex flex-row flex-wrap items-center mt-4">
                  <ButtonLink
                    className="mr-8 mt-6"
                    path="https://docs.mango.markets/"
                    linkText={t('learn-more')}
                    size="large"
                  />
                  <a
                    className="mt-6 text-th-fgd-1 md:hover:text-th-fgd-3 focus:outline-none"
                    href="https://osec.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Ottersec className="w-40 h-auto" />
                  </a>
                </div>
              </div>
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/unparalleled-safety.png"
              />
            </div>
            <div className="core-feature flex flex-col lg:flex-row lg:items-center py-12 lg:py-24">
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/token-listings.png"
              />
              <div className="core-text">
                <h2 className="mb-4 max-w-lg">
                  {t('home:token-listings-heading')}
                </h2>
                <p className="intro-p">{t('home:token-listings-desc')}</p>
                <ButtonLink
                  className="mt-10"
                  path="https://app.mango.markets/governance/listToken"
                  linkText={t('home:list-token')}
                  size="large"
                />
              </div>
            </div>
            <div className="core-feature flex flex-col-reverse lg:flex-row lg:items-center pt-12 lg:pt-24">
              <div className="core-text">
                <h2 className="mb-4">{t('home:borrow-heading')}</h2>
                <p className="intro-p">{t('home:borrow-desc')}</p>
                <ButtonLink
                  className="mt-10"
                  path="https://app.mango.markets/"
                  linkText={t('home:get-started')}
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
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 bg-gradient-to-tl shadow-xl from-th-bkg-1 to-th-bkg-2 h-[600px] w-[600px] md:h-[800px] md:w-[800px] rounded-full" />
          <ColorBlur
            className="-top-10 left-0 opacity-50"
            height="600px"
            width="600px"
          />
          <div className="flex flex-col items-center relative" ref={build}>
            <div className="relative h-[280px] w-[280px] md:h-[400px] md:w-[400px] mb-4 md:mb-8">
              <img
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 md:w-56 h-auto"
                src="/images/new/build-hori.png"
              />
              <img
                className="absolute left-1/3 -translate-x-1/3 h-40 md:h-56 w-auto"
                src="/images/new/build-vert.png"
                id="build"
              />
            </div>
            <h2 className="mb-4 text-center">{t('home:build-heading')}</h2>
            <p className="intro-p text-center max-w-lg mx-auto">
              {t('home:build-desc')}
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
