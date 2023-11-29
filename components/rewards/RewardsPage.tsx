import {
  BoltIcon,
  ChevronDownIcon,
  SparklesIcon,
} from '@heroicons/react/20/solid'
import SectionWrapper from '../shared/SectionWrapper'
import IconWithText from '../shared/IconWithText'
import { Disclosure } from '@headlessui/react'
import ColorBlur from '../ColorBlur'
import { FunctionComponent } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { MANGO_DATA_API_URL } from '../../utils/constants'
import { useCountdown } from '../../hooks/useCountdown'
import FlipNumbers from 'react-flip-numbers'
import OttersecLogoMark from '../icons/OttersecLogoMark'

const FAQS = [
  {
    q: 'What is Mango?',
    a: 'Mango is a decentralized exchange that runs on the Solana blockchain. Mango pioneered DAOs on Solana and the protocol is fully governed by Mango DAO. Trade spot via our innovative leveraged swaps or our sleek orderbook interface.',
  },
  {
    q: 'How do I get started on Mango?',
    a: (
      <span>
        You need a Solana wallet and some Solana (SOL) to pay for transactions.
        Popular wallets include{' '}
        <a
          className="text-base text-white md:hover:text-th-fgd-4"
          href="https://phantom.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Phantom
        </a>{' '}
        and{' '}
        <a
          className="text-base text-white md:hover:text-th-fgd-4"
          href="https://solflare.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Solflare
        </a>
        . Once you have your wallet go to{' '}
        <a
          className="text-base text-white md:hover:text-th-fgd-4"
          href="https://app.mango.markets"
          rel="noopener noreferrer"
        >
          app.mango.markets
        </a>
        , connect your wallet and follow the steps to create and fund your
        account. Now, get trading and start earning rewards!
      </span>
    ),
  },
  {
    q: 'How do I participate in rewards?',
    a: 'Simply by trading on Mango. Points are allocated for spot trades and swaps. Other actions may also earn points. The more volume you do, the more points you earn and the more points you earn the more prizes you could win. At the end of each week prizes are distributed to all wallets with points.',
  },
  {
    q: 'What can I win?',
    a: 'Rewards are distributed as tokens like USDC and/or nfts and can differ from week-to-week.',
  },
  {
    q: 'What is a rewards season?',
    a: 'Each weekly cycle is called a Season. They run from midnight Friday UTC to the following midnight Friday UTC.',
  },
  {
    q: 'What are the rewards tiers?',
    a: "There are 4 rewards tiers. Everyone starts in the Seed tier. After your first Season is completed you'll be promoted to either the Mango or Whale tier (depending on the average notional value of your swaps/trades). Bots are automatically assigned to the Bots tier and will remain there for all future seasons.",
  },
  {
    q: 'How do the prizes work?',
    a: "At the end of each Season loot boxes are distributed based on the amount of points earned relative to the other participants in your tier. Everyone will win one or more prizes so you're guaranteed to get something.",
  },
  {
    q: 'How do I claim my rewards?',
    a: (
      <span>
        At the end of each season (midnight Friday UTC) there is a 48 hour
        window where you can claim your prizes. Visit{' '}
        <a
          className="text-base text-white md:hover:text-th-fgd-4"
          href="https://app.mango.markets/rewards"
          rel="noopener noreferrer"
        >
          app.mango.markets/rewards
        </a>{' '}
        to claim. If you fail to claim your prizes during this period they will
        be lost.
      </span>
    ),
  },
]

type CurrentSeason = {
  season_end: string
  season_id: number
  season_start: string
}

const fetchCurrentSeason = async (): Promise<CurrentSeason | undefined> => {
  try {
    const data = await fetch(
      `${MANGO_DATA_API_URL}/seasons/season-id?timestamp=${new Date().toISOString()}`,
    )
    const res = await data.json()
    return res
  } catch (e) {
    console.error('Failed to load current season', e)
  }
}

const RewardsPage = () => {
  const { data: seasonData } = useQuery({
    queryKey: ['current-season-data'],
    queryFn: fetchCurrentSeason,
  })
  const [days, hours, minutes, seconds] = useCountdown(seasonData?.season_end)

  const showCountdown =
    !isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)
  return (
    <>
      <SectionWrapper
        noPaddingY
        className="bg-[url('/images/mango-mints/mints-bg.jpeg')] bg-cover bg-no-repeat border-t border-th-bkg-2 py-20"
      >
        <div className="flex flex-col items-center">
          {/* <Image
            src="/images/mango-mints/chest.png"
            height={96}
            width={96}
            alt="Chest"
          /> */}
          <h1 className="mt-6 text-center lg:text-left font-rewards md:text-8xl">
            Trade. Win. Repeat.
          </h1>
          <p className="text-lg md:text-2xl text-white text-center max-w-3xl drop-shadow-[0_0_24px_rgba(0,0,0,1)]">
            Win amazing prizes every week. Maximize your points to to take home
            the most loot. What treasure will you unlock this season?
          </p>
          <LandingPageButton
            className="mt-8 mx-auto lg:mx-0"
            linkText="Create your Account"
            path="https://app.mango.markets"
          />
          {seasonData?.season_end && seasonData?.season_id && showCountdown ? (
            <>
              <p className="mt-8 font-rewards mb-1 text-th-fgd-2 text-lg">
                Season {seasonData.season_id} ends in:
              </p>
              <div className="flex items-center space-x-0.5">
                <CountdownDisplay value={days} type="Days" />
                <span className="text-white font-rewards text-xl">:</span>
                <CountdownDisplay value={hours} type="Hours" />
                <span className="text-white font-rewards text-xl">:</span>
                <CountdownDisplay value={minutes} type="Minutes" />
                <span className="text-white font-rewards text-xl">:</span>
                <CountdownDisplay value={seconds} type="Seconds" />
              </div>
              <p className="text-yellow-300 text-sm mt-2">
                Hurry! There&apos;s still time to win this season
              </p>
            </>
          ) : null}
        </div>
      </SectionWrapper>
      <SectionWrapper className="border-t border-th-bkg-2">
        <h2 className="font-rewards text-center mb-6">
          Start earning rewards now.
        </h2>
        <div className="grid grid-cols-6 gap-4 md:gap-6 xl:gap-8">
          <IconWithText
            desc={
              <span className="text-lg">
                Create and fund your account on Mango. You&apos;ll need a Solana
                wallet like Phantom or Solflare and some Solana (SOL) to pay for
                transactions.
              </span>
            }
            icon={
              <span className="font-rewards text-3xl text-yellow-300 mt-1.5">
                1
              </span>
            }
            title={
              <span className="font-rewards text-2xl lg:text-3xl -mb-2 block">
                Create an account
              </span>
            }
            showBackground
          />
          <IconWithText
            desc={
              <span className="text-lg">
                You&apos;ll automatically earn points for trading on Mango. Our
                easy-to-use and lightning fast interface makes swaps and spot
                trading a breeze.
              </span>
            }
            icon={
              <span className="font-rewards text-3xl text-yellow-300 mt-1.5">
                2
              </span>
            }
            title={
              <span className="font-rewards text-2xl lg:text-3xl -mb-2 block">
                Start trading
              </span>
            }
            showBackground
          />
          <IconWithText
            desc={
              <span className="text-lg">
                Rewards are distributed every week. Everyone gets a reward but
                the more points you have the more chances you have to win big!
              </span>
            }
            icon={
              <span className="font-rewards text-3xl text-yellow-300 mt-1.5">
                3
              </span>
            }
            title={
              <span className="font-rewards text-2xl lg:text-3xl -mb-2 block">
                Win rewards
              </span>
            }
            showBackground
          />
        </div>
        <LandingPageButton
          className="mt-12 mx-auto"
          linkText="Get Started"
          path="https://app.mango.markets"
        />
      </SectionWrapper>
      <SectionWrapper className="relative overflow-hidden border-y border-th-bkg-2">
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            <Image
              src="logos/logo-mark.svg"
              alt="Mango Logo"
              width={72}
              height={72}
            />
            <h2 className="font-rewards text-center mb-2 mt-4">
              Safer. Smarter. Faster.
            </h2>
          </div>
          <p className="text-center text-lg md:text-xl max-w-xl mx-auto text-white">
            Innovative safety features to protect your funds. Smart and
            intuitive so you can trade your way. The fastest DEX in DeFi. Time
            to make your CEX your ex.
          </p>
          <div className="grid grid-cols-6 gap-4 md:gap-6 xl:gap-8 mt-10">
            <IconWithText
              desc={
                <span>
                  Every program update is audited by OtterSec before release.
                  OtterSec is trusted to secure billions in TVL across the
                  biggest blockchain projects.
                </span>
              }
              icon={<OttersecLogoMark className="h-6 w-6 text-yellow-300" />}
              title={
                <span className="font-rewards text-2xl lg:text-3xl -mb-2 block">
                  Ongoing Audits
                </span>
              }
            />
            <IconWithText
              desc={
                <span>
                  The simplicity you love with the power of flash loans. Swap
                  with up to 5x leverage and the best aggregated prices from all
                  the top DEX&apos;s.
                </span>
              }
              icon={<SparklesIcon className="h-6 w-6 text-yellow-300" />}
              title={
                <span className="font-rewards text-2xl lg:text-3xl -mb-2 block">
                  Flash Loan Magic
                </span>
              }
            />
            <IconWithText
              desc={
                <span>
                  The fastest DEX in the land. Mango fully utilizes the power of
                  the Solana blockchain and maximizes throughput with
                  state-of-the-art RPCs by Triton.
                </span>
              }
              icon={<BoltIcon className="h-6 w-6 text-yellow-300" />}
              title={
                <span className="font-rewards text-2xl lg:text-3xl -mb-2 block">
                  Extreme Speed
                </span>
              }
            />
          </div>
          <LandingPageButton
            className="mt-12 mx-auto"
            linkText="Create your Account"
            path="https://app.mango.markets"
          />
        </div>
        <ColorBlur
          className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-20 bg-purple-600"
          height="900px"
          width="900px"
        />
      </SectionWrapper>
      <SectionWrapper className="border-b border-th-bkg-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-rewards mb-6">FAQs</h2>
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

export default RewardsPage

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
      className={`flex w-max items-center justify-center rounded-md bg-th-button md:hover:bg-th-button-hover h-16 px-6 default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
    >
      <span className="font-rewards text-2xl mt-1">{linkText}</span>
    </a>
  )
}

const CountdownDisplay = ({ value, type }) => {
  const displayValue =
    value > 9 || type === 'Days' ? value.toString() : `0${value}`
  return (
    <div className="font-rewards bg-black px-2 rounded">
      <div className="mt-1.5">
        <FlipNumbers
          color="white"
          height={36}
          width={24}
          play
          numbers={displayValue}
        />
      </div>
    </div>
  )
}
