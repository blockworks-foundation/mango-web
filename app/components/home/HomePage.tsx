'use client'
import {
  ArrowPathRoundedSquareIcon,
  BoltIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid'
import LiquidIcon from '../icons/LiquidIcon'
import ButtonLink from '../shared/ButtonLink'
import IconWithText from '../shared/IconWithText'
import SectionWrapper from '../shared/SectionWrapper'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import ColorBlur from '../shared/ColorBlur'
import Ottersec from '../icons/Ottersec'
// import TabsText from '../shared/TabsText'
// import MarketCard from './MarketCard'
import { formatNumericValue, numberCompacter } from '../../utils/numbers'
import HeroStat from './HeroStat'
import useMarketsData from '../../hooks/useMarketData'
import { useQuery } from '@tanstack/react-query'
import { MANGO_DATA_API_URL } from '../../utils/constants'
// import Loading from '../shared/Loading'

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

const fetchAppData = async () => {
  try {
    const response = await fetch(
      `${MANGO_DATA_API_URL}/stats/mango-protocol-summary`,
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error('failed to fetch account followers', e)
    return undefined
  }
}

const HomePage = () => {
  // const [activeMarketTab, setActiveMarketTab] = useState('Spot')
  const { data: marketData, isLoading: loadingMarketData } = useMarketsData()

  const { data: appData, isLoading: loadingAppData } = useQuery({
    queryKey: ['app-data'],
    queryFn: fetchAppData,
  })

  const topSection = useRef<HTMLDivElement>(null)
  const callouts = useRef<HTMLDivElement>(null)
  const swapPanel = useRef<HTMLDivElement>(null)
  const coreFeatures = useRef<HTMLDivElement>(null)
  const build = useRef<HTMLDivElement>(null)

  // const tabsWithCount: [string, number][] = useMemo(() => {
  //   const perpMarketsNumber = marketData?.perp?.length || 0
  //   const spotMarketsNumber = marketData?.spot?.length || 0
  //   const tabs: [string, number][] = [
  //     ['Spot', spotMarketsNumber],
  //     ['Perp', perpMarketsNumber],
  //   ]
  //   return tabs
  // }, [marketData])

  const formattedAppStatsData = useMemo(() => {
    if (!appData || !Object.keys(appData).length)
      return { totalVol24h: 0, totalTrades24h: 0, weeklyActiveTraders: 0 }
    // volume
    const spotVol24h = appData?.openbook_volume_usd_24h || 0
    const perpVol24h = appData?.perp_volume_usd_24h || 0
    const swapVol24h = appData?.swap_volume_usd_24h || 0
    const totalVol24h = spotVol24h + perpVol24h + swapVol24h

    // number of trades
    const spotTrades24h = appData?.num_openbook_fills_24h || 0
    const perpTrades24h = appData?.num_perp_fills_24h || 0
    const swapTrades24h = appData?.num_swaps_24h || 0
    const totalTrades24h = spotTrades24h + perpTrades24h + swapTrades24h

    const weeklyActiveTraders = appData?.weekly_active_mango_accounts || 0

    return { totalVol24h, totalTrades24h, weeklyActiveTraders }
  }, [appData])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self?.selector) {
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
      }
    }, callouts) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self?.selector) {
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
      }
    }, swapPanel) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self?.selector) {
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
      }
    }, coreFeatures) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self?.selector) {
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
      }
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

  const numberOfMarkets =
    (marketData?.spot.length || 0) + (marketData?.perp.length || 0)

  return (
    <>
      <SectionWrapper className="overflow-hidden h-[760px] lg:h-auto">
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
              linkText="Trade Now"
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
      <div className="bg-[url('/images/new/cube-bg.png')] bg-repeat py-12 lg:py-16">
        <SectionWrapper noPaddingY>
          <div className="grid grid-cols-4 gap-6">
            <HeroStat
              title="Markets"
              value={numberOfMarkets.toString()}
              loading={loadingMarketData}
            />
            <HeroStat
              title="Active Traders"
              tooltipContent="Weekly active Mango Accounts"
              value={formatNumericValue(
                formattedAppStatsData.weeklyActiveTraders,
              )}
              loading={loadingAppData}
            />
            <HeroStat
              title="Daily Volume"
              tooltipContent="Volume across spot, swap and perp"
              value={`$${numberCompacter.format(
                formattedAppStatsData.totalVol24h,
              )}`}
              loading={loadingAppData}
            />
            <HeroStat
              title="Daily Trades"
              tooltipContent="Number of trades across spot, swap and perp"
              value={formatNumericValue(formattedAppStatsData.totalTrades24h)}
              loading={loadingAppData}
            />
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper className="mt-10 md:mt-0">
        <div
          className="grid grid-cols-6 gap-4 md:gap-6 xl:gap-8"
          ref={callouts}
        >
          <IconWithText
            desc="Low fees for taker trades and rebates for maker trades. Plus, Solana's extremely low transaction costs."
            icon={
              <CurrencyDollarIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title="Competitive fees"
            showBackground
          />
          <IconWithText
            desc="The speed of a centralized exchange without losing control of your assets."
            icon={<BoltIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />}
            title="Lightning execution"
            showBackground
          />
          <IconWithText
            desc="Get the best price with access to all of the liquidity on Solana."
            icon={
              <LiquidIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title="Deeply liquid markets"
            showBackground
          />
          <IconWithText
            desc="Leverage across all your positions. Open multiple accounts to isolate your risk."
            icon={
              <ArrowPathRoundedSquareIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title="Cross-margin accounts"
            showBackground
          />
          <IconWithText
            desc="Mango is governed by the Mango DAO. Fully transparent and open to all."
            icon={
              <BuildingLibraryIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title="Community governed"
            showBackground
          />
          <IconWithText
            desc="Leverage swap or orderbook maxi? Mango is optimized for all devices so you can trade how you want, when you want."
            icon={
              <DevicePhoneMobileIcon className="h-5 w-5 md:h-7 md:w-7 text-th-fgd-2" />
            }
            title="Trade your way"
            showBackground
          />
        </div>
      </SectionWrapper>
      {/* <SectionWrapper className="border-t border-th-bkg-3">
        <div className="w-full h-full">
          <h2 className="mb-4 text-center">Markets</h2>
          <p className="mb-10 intro-p text-center max-w-lg mx-auto">
            New markets are added frequently via Mango DAO. Anyone can propose a
            token or market to list.
          </p>
          <div className="flex justify-center pb-10">
            <TabsText
              activeTab={activeMarketTab}
              className="text-2xl"
              onChange={setActiveMarketTab}
              tabs={tabsWithCount}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-[580px] overflow-auto thin-scroll">
            {!loadingMarketData ? (
              activeMarketTab === 'Spot' ? (
                formattedSpotData.map((data) => (
                  <MarketCard marketData={data} key={data.name} />
                ))
              ) : (
                formattedPerpData.map((data) => (
                  <MarketCard marketData={data} key={data.name} />
                ))
              )
            ) : (
              <div className="h-full col-span-4 border border-th-bkg-3 rounded-xl flex items-center justify-center">
                <Loading className="text-th-fgd-1" />
              </div>
            )}
          </div>
        </div>
      </SectionWrapper> */}
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
                <h2 className="mb-4 text-center">Level up your swaps</h2>
                <p className="intro-p text-center max-w-lg mx-auto">
                  The simplicity you love with the power of flash loans. Swap
                  with up to 5x leverage and the best aggregated prices from all
                  the top DEX&apos;s.
                </p>
              </div>
              <ButtonLink
                className="mx-auto mt-10"
                path="https://app.mango.markets/"
                linkText="Swap Now"
                size="large"
              />
              <img
                className="shadow-lg mt-12 w-full sm:w-3/4 max-w-[800px] h-auto absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-10"
                src="/images/new/swap-desktop.png"
                alt=""
                id="swap-desktop"
              />
            </div>
            {tokenIcons.map((icon, i) => (
              <img
                className={`absolute token-icon w-10 md:w-16 xl:w-20 h-auto`}
                key={icon.icon + i}
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
            <div className="core-feature flex flex-col-reverse lg:flex-row lg:items-center py-12 lg:py-24">
              <div className="core-text">
                <h2 className="mb-4">Unparalleled safety</h2>
                <p className="intro-p">
                  Innovative safety features to protect your funds. Mango is
                  manipulation resistant to minimize potential losses from bad
                  actors or extreme volatility.
                </p>
                <div className="flex flex-row flex-wrap items-center mt-4">
                  <ButtonLink
                    className="mr-8 mt-6"
                    path="https://docs.mango.markets/"
                    linkText="Learn More"
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
                <h2 className="mb-4 max-w-lg">Permissionless token listings</h2>
                <p className="intro-p">
                  Anyone can easily list any token on Mango. A governance
                  proposal is created upon submission and if successful the
                  token will list automatically.
                </p>
                <ButtonLink
                  className="mt-10"
                  path="https://app.mango.markets/governance/list"
                  linkText="List a Token"
                  size="large"
                />
              </div>
            </div>
            <div className="core-feature flex flex-col-reverse lg:flex-row lg:items-center pt-12 lg:pt-24">
              <div className="core-text">
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
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 bg-gradient-to-tl shadow-xl from-th-bkg-1 to-th-bkg-2 h-[600px] w-[600px] md:h-[800px] md:w-[800px] rounded-full" />
          <ColorBlur
            className="-top-10 left-0 opacity-50"
            height="600px"
            width="600px"
          />
          <div className="flex flex-col items-center relative" ref={build}>
            <div className="relative h-[280px] w-[180px] md:h-[380px] md:w-[300px] mb-4 md:mb-8">
              <img
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 md:w-56 h-auto"
                src="/images/new/build-hori.png"
              />
              <img
                className="absolute left-0 h-40 md:h-56 w-auto"
                src="/images/new/build-vert.png"
                id="build"
              />
            </div>
            <h2 className="mb-4 text-center">Build on Mango</h2>
            <p className="intro-p text-center max-w-lg mx-auto">
              Mango is 100% open source and highly composable. Build trading
              bots, new product integrations, community tools or whatever you
              desire. Explore the code and get building.
            </p>
            <ButtonLink
              className="mx-auto mt-10"
              path="https://github.com/blockworks-foundation"
              linkText="Explore the code"
              size="large"
            />
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}

export default HomePage
