'use client'
import {
  BoltIcon,
  CakeIcon,
  ChevronDownIcon,
  SparklesIcon,
} from '@heroicons/react/20/solid'
import SectionWrapper from './shared/SectionWrapper'
import IconWithText from './shared/IconWithText'
import { Disclosure } from '@headlessui/react'
import { FunctionComponent, useEffect, useMemo } from 'react'
import Image from 'next/image'
import store from '../store/store'
import { floorToDecimal, numberCompacter } from '../utils/numbers'
import { getStakePoolAccount } from '@solana/spl-stake-pool'
import { Connection, PublicKey } from '@solana/web3.js'
import { useQuery } from '@tanstack/react-query'

const HERO_P_CLASSES = 'text-lg md:text-2xl text-th-fgd-1 text-center max-w-3xl'
const H2_CLASSES = 'font-display text-center mb-6 text-4xl'

const actions = store.getState().actions

const FAQS = [
  {
    q: 'What is liquid staking?',
    a: 'Liquid staking allows you to participate in staking without locking up your tokens. When you mint or buy a liquid staking token (LST) like mangoSOL it is representative of the underlying staked SOL. The price of the LST increases vs the underlying asset (SOL) as the staking rewards contribute to the value.',
  },
  {
    q: 'What is mangoSOL?',
    a: "mangoSOL is Mango's liquid staking token. The underlying SOL is staked to Mango's validator. Holding mangoSOL has exclusive benefits on Mango helps to support the project.",
  },
  {
    q: 'Where does the yield come from?',
    a: 'Staking rewards. Validators earn SOL rewards for validating transactions. These rewards are passed on and accrue to the value of mangoSOL. This increases its value vs SOL over time.',
  },
  {
    q: 'Is mangoSOL safe?',
    a: 'mangoSOL was created via Sanctum. Sanctum LSTs use a version of the SPL stake pool program 4. Multiple security firms have audited this program. So far it controls $1B+ of value for more than two years, with no exploits. Of course, just because a contract has not been exploited in the past does not mean it will never ever be exploited in the future.',
  },
  {
    q: 'How can I get mangoSOL?',
    a: "mangoSOL is Mango's liquid staking token. The underlying SOL is staked to Mango's validator.",
  },
]

const MANGOSOL_STAKE_POOL = '9jWbABPXfc75wseAbLEkBCb1NRaX9EbJZJTDQnbtpzc1'
const MANGOSOL_DECIMALS = 9
const MANGOSOL_MINT = 'MangmsBgFqJhW4cLUR9LxfVgMboY1xAoP8UUBiWwwuY'
const fetchStakePool = async (conn: Connection) => {
  try {
    const stakePool = await getStakePoolAccount(
      conn,
      new PublicKey(MANGOSOL_STAKE_POOL),
    )
    const nativeSupply = stakePool?.account?.data?.poolTokenSupply
    if (nativeSupply) {
      return nativeSupply.toNumber() / Math.pow(10, MANGOSOL_DECIMALS)
    }

    return 0
  } catch (e) {
    console.log('failed to fetch mangoSOL stake pool', e)
    return 0
  }
}

async function fetchApyToSol() {
  const resp = await fetch(
    'https://api.mngo.cloud/data/boost/stats/monthly-sol-price',
  )
  const json: { data: { mint: string; monthly_price_change: number }[] } =
    await resp.json()
  const tokenToApy: { [key: string]: number } = {}
  const record = json.data.find((x) => x.mint === MANGOSOL_MINT)
  const apy = (1 + (record?.monthly_price_change || 0)) ** 12 - 1
  tokenToApy['mangosol'] = apy
  return tokenToApy?.mangosol ? tokenToApy.mangosol * 100 : 0
}

const MangoSolPage = () => {
  // const [days, hours, minutes, seconds] = useCountdown(Date.now())
  const group = store((s) => s.group)
  const connection = store((s) => s.connection)
  const { data: mangoSolSupply } = useQuery({
    queryKey: ['mangosol-supply-data'],
    queryFn: () => fetchStakePool(connection),
    enabled: !!connection,
  })
  const { data: mangoSolApy } = useQuery({
    queryKey: ['mangosol-apy'],
    queryFn: () => fetchApyToSol(),
  })

  useEffect(() => {
    actions.fetchGroup()
  }, [])

  const leverage = useMemo(() => {
    if (!group) return 0
    const bank = group.banksMapByName.get('mangoSOL')?.[0]
    if (!bank) return 0
    const weight = bank.scaledInitAssetWeight(bank.price)
    const leverageFactor = 1 / (1 - weight.toNumber())
    return floorToDecimal(leverageFactor, 1).toNumber()
  }, [group])

  const solPrice = useMemo(() => {
    if (!group) return 0
    const bank = group.banksMapByName.get('SOL')?.[0]
    if (!bank) return 0
    return bank?.uiPrice
  }, [group])

  // const showCountdown =
  //   !isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)
  return (
    <>
      <SectionWrapper
        noPaddingY
        className="bg-th-bkg-2 bg-cover bg-no-repeat border-t border-th-bkg-2 py-20"
      >
        <div className="flex flex-col items-center">
          <Image
            className="mb-6"
            src="/icons/tokens/mangosol.svg"
            height={72}
            width={72}
            alt="Chest"
          />
          <h1 className="mb-4 text-center lg:text-left font-display md:text-6xl">
            Yield. Utility. Rewards.
          </h1>
          <p
            className={`${HERO_P_CLASSES} drop-shadow-[0_0_24px_rgba(0,0,0,1)]`}
          >
            mangoSOL is staked SOL fit for a king (of fruits)
          </p>
          <LandingPageButton
            className="mt-8 mx-auto lg:mx-0"
            linkText="Get mangoSOL"
            path="https://app.mango.markets"
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
      </SectionWrapper>
      <SectionWrapper noPaddingY>
        <div className="grid grid-cols-3 gap-6 py-12">
          <div>
            <p>APY</p>
            <GradientText>
              {mangoSolApy ? `${mangoSolApy.toFixed(1)}%` : '–'}
            </GradientText>
          </div>
          <div>
            <p>Total stake</p>
            <GradientText>
              {mangoSolSupply && solPrice
                ? `$${numberCompacter.format(mangoSolSupply * solPrice)}`
                : '–'}
            </GradientText>
          </div>
          <div>
            <p>Leverage</p>
            <GradientText>
              {leverage ? `${leverage.toFixed(0)}x` : '–'}
            </GradientText>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-th-bkg-2 flex flex-col items-center">
        <h2 className={H2_CLASSES}>Yield.</h2>
        <p className={`${HERO_P_CLASSES}`}>
          All block rewards from the Mango validator are passed on to mangoSOL
          holders to maximize your yield.
        </p>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className={H2_CLASSES}>Utility.</h2>
        <div className="grid grid-cols-6 gap-4 md:gap-6 xl:gap-8 mt-10">
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
      <SectionWrapper className="bg-th-bkg-2 flex flex-col items-center">
        <h2 className={H2_CLASSES}>Rewards.</h2>
        <p className={`${HERO_P_CLASSES}`}>
          Holding at least 1 mangoSOL in your Mango Account earns you automatic
          eligibility to participate in Mango&apos;s weekly rewards program.
        </p>
      </SectionWrapper>
      <SectionWrapper className="border-b border-th-bkg-2">
        <div className="max-w-4xl mx-auto">
          <h2 className={H2_CLASSES}>FAQs.</h2>
          <div className="border-b border-th-bkg-4">
            {FAQS.map((faq, i) => (
              <Disclosure key={i}>
                {({ open }) => (
                  <div>
                    <Disclosure.Button
                      className={`w-full rounded-lg border-t border-th-bkg-4 p-6 text-left focus:outline-none`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-lg">{faq.q}</p>
                        <ChevronDownIcon
                          className={`${
                            open ? 'rotate-180' : 'rotate-360'
                          } h-6 w-6 flex-shrink-0 text-th-fgd-3`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-6">
                      <p className="rewards-p">{faq.a}</p>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default MangoSolPage

interface LandingPageButtonProps {
  path: string
  className?: string
  linkText: string
}

const LandingPageButton: FunctionComponent<LandingPageButtonProps> = ({
  linkText,
  path,
  className,
}) => {
  return (
    <a
      className={`flex w-max items-center justify-center rounded-xl bg-th-button md:hover:bg-th-button-hover h-16 px-6 default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
    >
      <span className="font-display text-xl">{linkText}</span>
    </a>
  )
}

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

const GradientText = (props) => (
  <span className="bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent font-display text-5xl">
    {props.children}
  </span>
)
