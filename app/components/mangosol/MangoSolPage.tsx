import { BoltIcon, CakeIcon, SparklesIcon } from '@heroicons/react/20/solid'
import SectionWrapper from '../shared/SectionWrapper'
import IconWithText from '../shared/IconWithText'
import Image from 'next/image'
import ImageHeaderWrapper from './ImageHeaderWrapper'
import Stats from './Stats'
import LandingPageButton from '../shared/LandingPageButton'
import Faqs from './Faqs'

const HERO_P_CLASSES = 'text-lg md:text-2xl text-th-fgd-1 text-center max-w-3xl'
const H2_CLASSES = 'font-display text-center mb-6 text-4xl'

const MangoSolPage = () => {
  // const [days, hours, minutes, seconds] = useCountdown(Date.now())

  // const showCountdown =
  //   !isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)
  return (
    <>
      <ImageHeaderWrapper>
        <div className="flex flex-col items-center">
          <Image
            className="mb-6"
            src="/icons/tokens/mangosol.svg"
            height={72}
            width={72}
            alt="Chest"
          />
          {/* <h1 className="mb-4 text-center lg:text-left font-display md:text-6xl">
            Yield. Utility. Rewards.
          </h1> */}
          <h1 className="mb-4 text-center lg:text-left font-display md:text-6xl">
            Yield x Utility
          </h1>
          <p className={`${HERO_P_CLASSES}`}>
            mangoSOL is staked SOL fit for a king (of fruits)
          </p>
          <LandingPageButton
            className="mt-8 mx-auto lg:mx-0"
            linkText="Get mangoSOL"
            path="https://app.mango.markets/swap?in=SOL&out=mangoSOL"
          />
          {/* {showCountdown ? (
            <>
              <p className="mt-8 font-display mb-1 text-th-fgd-2 text-lg">
                Season 1 ends in:
              </p>
              <div className="flex items-center space-x-0.5">
                <CountdownDisplay value={days} type="Days" />
                <span className="text-white font-display text-xl">:</span>
                <CountdownDisplay value={hours} type="Hours" />
                <span className="text-white font-display text-xl">:</span>
                <CountdownDisplay value={minutes} type="Minutes" />
                <span className="text-white font-display text-xl">:</span>
                <CountdownDisplay value={seconds} type="Seconds" />
              </div>
              <p className="text-yellow-300 text-sm mt-2">
                Hurry! There&apos;s still time to win this season
              </p>
            </>
          ) : null} */}
        </div>
      </ImageHeaderWrapper>
      <Stats />
      <SectionWrapper className="bg-th-bkg-2 flex flex-col items-center">
        <h2 className={H2_CLASSES}>Yield.</h2>
        <p className={`${HERO_P_CLASSES}`}>
          All block rewards from the Mango validator are passed on to mangoSOL
          holders to maximize yield.
        </p>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className={H2_CLASSES}>Utility.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6 xl:gap-8 mt-10">
          <IconWithText
            desc={
              <span>
                Get more oomph from your collateral. mangoSOL has equal
                collateral weight to SOL and BTC making it the highest of any
                LST listed on Mango.
              </span>
            }
            icon={<SparklesIcon className="h-6 w-6 text-yellow-300" />}
            title={'Immaculate collateral'}
          />
          <IconWithText
            desc={
              <span>
                mangoSOL is expempt from collateral funding fees on Mango. This
                is a fee charged when an account borrows against risky
                collateral.
              </span>
            }
            icon={<CakeIcon className="h-6 w-6 text-yellow-300" />}
            title={'Collateral fee free'}
          />
          <IconWithText
            desc={
              <span>
                By holding mangoSOL you are helping the Mango Validator land
                transactions more effectively. This improves performance for all
                traders.
              </span>
            }
            icon={<BoltIcon className="h-6 w-6 text-yellow-300" />}
            title={'Performance enhancing'}
          />
        </div>
        <LandingPageButton
          className="mt-12 mx-auto"
          linkText="Get mangoSOL"
          path="https://app.mango.markets"
        />
      </SectionWrapper>
      {/* <SectionWrapper className="bg-th-bkg-2 flex flex-col items-center">
        <h2 className={H2_CLASSES}>Rewards.</h2>
        <p className={`${HERO_P_CLASSES}`}>
          Holding at least one mangoSOL in your Mango Account earns you
          automatic eligibility to participate in Mango&apos;s weekly rewards
          program.
        </p>
      </SectionWrapper> */}
      <SectionWrapper className="bg-th-bkg-2 border-b border-th-bkg-2">
        <div className="max-w-4xl mx-auto">
          <h2 className={H2_CLASSES}>FAQs.</h2>
          <Faqs />
          <LandingPageButton
            className="mt-8 mx-auto"
            linkText="Get mangoSOL"
            path="https://app.mango.markets/swap?in=SOL&out=mangoSOL"
          />
        </div>
      </SectionWrapper>
    </>
  )
}

export default MangoSolPage

// const CountdownDisplay = ({ value, type }) => {
//   const displayValue =
//     value > 9 || type === 'Days' ? value.toString() : `0${value}`
//   return (
//     <div className="font-display bg-black px-2 rounded">
//       <div className="mt-1.5">
//         <FlipNumbers
//           color="white"
//           height={36}
//           width={24}
//           play
//           numbers={displayValue}
//         />
//       </div>
//     </div>
//   )
// }
