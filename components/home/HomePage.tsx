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
import HomeTopSection from './HomeTopSection'
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

const HomePage = () => {
  const { t } = useTranslation(['common', 'home'])

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
      const featureText = self.selector('.feature-text')
      gsap.timeline({
        scrollTrigger: {
          trigger: '.core-features',
          start: 'top top',
          end: '+=15000',
          scrub: true,
          markers: true,
          pin: true,
        },
      })

      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.core-features',
          start: 'bottom bottom',
          end: '+=15000',
          scrub: true,
        },
      })
      featureText.forEach(function (elem, i) {
        if (i !== 0) {
          textTl.from(elem, {
            opacity: 0,
            y: 600,
          })
        }
        textTl.to(elem, {
          autoAlpha: 1,
          y: 0,
        })
        if (i !== featureText.length - 1) {
          textTl.to(elem, {
            y: -600,
          })
        }
      })
      const icons = self.selector('.unlimited-icon-wrapper')
      const angle = 360 / 12
      const distanceToken = 150 // distance from origin
      const distanceInterest = 75 // distance from origin
      icons.forEach((icon, i) => {
        const interest = icon.querySelector('.interest-icon')
        const radians = (angle * (i + 1) * Math.PI) / 180
        // Calculate x and y offsets
        const tokenOffsetX = distanceToken * Math.cos(radians)
        const tokenOffsetY = distanceToken * Math.sin(radians)
        const interestOffsetX = distanceInterest * Math.cos(radians)
        const interestOffsetY = distanceInterest * Math.sin(radians)
        const iconTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.core-features',
            start: 'top top',
            end: '+=8500',
            scrub: true,
          },
        })
        iconTl
          .to(icon, {
            x: tokenOffsetX,
            y: tokenOffsetY,
          })
          .to(icon, {
            rotateZ: 360,
          })
          .to(interest, {
            x: interestOffsetX,
            y: interestOffsetY,
            rotateZ: 360,
          })
          .to(interest, {
            opacity: 0,
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
            <p className="intro-p text-center max-w-lg mx-auto">
              {t('home:swap-desc')}
            </p>
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
      <div className="page-x-padding" ref={unlimitedTokens}>
        <div className="flex core-features h-screen flex items-center justify-center">
          <div className="w-1/2 h-full">
            <div className="unlimited-icons h-full w-full flex items-center justify-center">
              {tokenIcons.map((icon) => (
                <div
                  className="unlimited-icon-wrapper relative flex items-center justify-center"
                  key={icon.icon}
                >
                  <div className="interest-icon absolute bg-th-bkg-2 rounded-full h-10 w-10 flex items-center justify-center">
                    {/* <div className="relative"> */}
                    {/* <img
                        className={`w-6 h-6`}
                        src={`/icons/mono/${interestIcons[i].icon}`}
                      /> */}
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-th-fgd-1 text-th-bkg-1">
                      <span className="font-display text-lg">$</span>
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="unlimited-icon absolute bg-th-bkg-2 rounded-full h-16 w-16 flex items-center justify-center">
                    <img
                      className={`w-10 h-10`}
                      src={`/icons/mono/${icon.icon}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 relative h-full flex items-center">
            <div className="feature-text absolute">
              <h2 className="mb-4">{t('home:token-listings')}</h2>
              <p className="intro-p">{t('home:swap-desc')}</p>
            </div>
            <div className="feature-text absolute">
              <h2 className="mb-4">{t('home:earn-interest')}</h2>
              <p className="intro-p max-w-lg">{t('home:swap-desc')}</p>
            </div>
            <div className="feature-text absolute">
              <h2 className="mb-4">{t('home:borrow-any-token')}</h2>
              <p className="intro-p max-w-lg">{t('home:swap-desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
