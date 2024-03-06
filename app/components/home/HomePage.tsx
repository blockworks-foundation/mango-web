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
import ColorBlur from '../shared/ColorBlur'
import Ottersec from '../icons/Ottersec'
import Markets from './Markets'
import Announcements from './Announcements'
import { BuildWrapper, SwapStageWrapper } from './Wrappers'
import BlackSphere from './BlackSphere'
import Image from 'next/image'

// type Markets = {
//   perp: FormattedMarketData[]
//   spot: FormattedMarketData[]
// }

const tokenIcons = [
  { icon: 'coin-orange.webp', x: '10%', y: '20%' },
  { icon: 'coin-silver.webp', x: '2%', y: '10%' },
  { icon: 'cube-pink.webp', x: '90%', y: '23%' },
  { icon: 'spring-chrome.webp', x: '79%', y: '25%' },
  { icon: 'pyramid-blue.webp', x: '95%', y: '80%' },
  { icon: 'ring-white.webp', x: '3%', y: '65%' },
  { icon: 'ring-white.webp', x: '88%', y: '40%' },
  { icon: 'coin-silver.webp', x: '86%', y: '48%' },
  { icon: 'cube-pink.webp', x: '10%', y: '73%' },
  { icon: 'spring-chrome.webp', x: '14%', y: '83%' },
  { icon: 'pyramid-blue.webp', x: '12%', y: '40%' },
  { icon: 'coin-orange.webp', x: '81%', y: '68%' },
]

const MOBILE_IMAGE_CLASSES =
  'core-image h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[480px] md:w-[480px] mb-6 lg:mb-0'

const HomePage = () => {
  return (
    <>
      <SectionWrapper
        className="overflow-hidden h-[760px] lg:h-[600px] lg:flex lg:items-center py-12 lg:py-0"
        noPaddingY
      >
        <div className="grid grid-cols-12">
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
            <BlackSphere />
            <Image
              className="w-3/4 absolute h-auto lg:-right-40 lg:top-1/2 lg:transform lg:-translate-y-1/2 xl:right-0 lg:w-full xl:w-[740px]"
              src="/images/new/trade-desktop.webp"
              alt="Trade"
              width={1266}
              height={901}
              priority
            />
            <Image
              className="sphere hidden md:block absolute lg:-bottom-24 xl:-bottom-40 -right-28 sm:-right-24 md:-right-14 lg:right-0 lg:left-0 xl:-left-16 w-80 h-auto"
              src="/images/new/orange-sphere.webp"
              width={631}
              height={631}
              alt="Orange sphere"
            />
          </div>
        </div>
      </SectionWrapper>
      <Announcements />
      <SectionWrapper className="mt-10 md:mt-0">
        <div className="mb-8 md:mb-10">
          <h2 className="text-center">DeFi maxed</h2>
        </div>
        <div className="grid grid-cols-6 gap-4 lg:gap-6">
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
      <Markets />
      <SwapStageWrapper>
        <SectionWrapper className="relative overflow-hidden">
          <ColorBlur
            className="-top-20 left-0 -rotate-25 opacity-20"
            height="800px"
            width="600px"
          />
          <div className="w-full h-full">
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
              <Image
                className="shadow-lg mt-12 w-full sm:w-3/4 max-w-[800px] h-auto absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-10"
                src="/images/new/swap-desktop.webp"
                alt="Swap"
                id="swap-desktop"
                width={1350}
                height={620}
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
      </SwapStageWrapper>
      <SectionWrapper>
        <div className="flex flex-col justify-center">
          <div className="h-full xl:px-12">
            <div className="core-feature flex flex-col lg:flex-row lg:items-center pb-12 lg:pb-24">
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/trade-favorites.webp"
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
                src="/images/new/unparalleled-safety.webp"
              />
            </div>
            <div className="core-feature flex flex-col lg:flex-row lg:items-center py-12 lg:py-24">
              <img
                className={MOBILE_IMAGE_CLASSES}
                src="/images/new/token-listings.webp"
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
                src="/images/new/borrow.webp"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
      <BuildWrapper>
        <SectionWrapper className="relative overflow-hidden">
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 bg-gradient-to-tl shadow-xl from-th-bkg-1 to-th-bkg-2 h-[600px] w-[600px] md:h-[800px] md:w-[800px] rounded-full" />
          <ColorBlur
            className="-top-10 left-0 opacity-50"
            height="600px"
            width="600px"
          />
          <div className="flex flex-col items-center relative">
            <div className="relative h-[280px] w-[180px] md:h-[380px] md:w-[300px] mb-4 md:mb-8">
              <img
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 md:w-56 h-auto"
                src="/images/new/build-hori.webp"
              />
              <img
                className="absolute left-0 h-40 md:h-56 w-auto"
                src="/images/new/build-vert.webp"
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
      </BuildWrapper>
    </>
  )
}

export default HomePage
