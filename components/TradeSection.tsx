import MarketCard from './MarketCard'
import Button from './Button'
import GradientText from './GradientText'
import Link from './Link'

const TradeSection = () => {
  return (
    <div className="">
      <div className="bg-th-bkg-3 h-auto transform -skew-y-3 lg:mb-48 lg:-mt-64 md:pt-48 md:mb-48 md:-mt-64 xs:my-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 transform skew-y-3">
          <section className="py-12 px-3 lg:mt-0 md:mt-0 sm:mt-28 ">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
                <MarketCard
                  name="BTC/USDC"
                  icon="../token/icon-btc.svg"
                  decimals={2}
                />
                <MarketCard
                  name="ETH/USDC"
                  icon="../token/icon-eth.svg"
                  decimals={2}
                />
                <MarketCard
                  name="SOL/USDC"
                  icon="../token/icon-sol.svg"
                  decimals={2}
                />
                <MarketCard
                  name="SRM/USDC"
                  icon="../token/icon-srm.svg"
                  decimals={2}
                />
              </div>
            </div>
          </section>

          <section className="py-12 px-3 lg:mt-56 md:mt-28 sm:mt-24 xs:mt-50">
            <div className="flex flex-wrap items-center lg:text-center md:text-center sm:text-left">
              <div className="px-2 order-1 lg:order-none ">
                <h2 className="mb-6 leading-tight font-semibold font-heading lg:text-5xl md:text-4xl sm:text-4xl xs:text-2xl">
                  Intuitive & fast self-custody trading.{' '}
                </h2>
                <div className="">
                  <p className="mb-8 text-gray-400 leading-relaxed lg:text-2xl md:text-2xl sm:text-2xl xs:text-lg">
                    Cross-collateralized margin trading with up to 5x leverage.
                    Trade knowing you control your funds, no more centralized
                    counterparty risk.{' '}
                  </p>
                </div>
                <div className="flex lg:flex-row md:flex-row xs:flex-col justify-center">
                  <Button>Start trading</Button>
                  <Link>Learn More</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="px-3">
            <div className="flex flex-wrap justify-center items-center text-center">
              <div className="flex flex-col">
                <GradientText>
                  <span className="text-2xl font-bold leading-relaxed">
                    Volume
                  </span>
                </GradientText>

                <div className="mt-4 flex flex-row bg-th-fgd-4 shadow-md rounded-xl pt-5 pb-4 px-8 h-auto w-auto divide-x-2 divide-white divide-opacity-10">
                  <div className="flex-1 inline-flex pr-4">
                    <p className="px-2">1.3M</p>
                    <p className="text-mango-yellow font-bold py-1 -mt-1">D</p>
                  </div>
                  <div className="flex-1 inline-flex px-4">
                    <p className="px-2">32.4M</p>
                    <p className="text-mango-yellow font-bold py-1 -mt-1">W</p>
                  </div>
                  <div className="flex-1 inline-flex pl-4">
                    <p className="px-2">75.4M</p>
                    <p className="text-mango-yellow font-bold py-1  -mt-1 uppercase">
                      Cumulative
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="relative lg:top-32 md:top-16 sm:top-20 xs:top-8">
            <img className="" alt="modals" src="../img/home_section.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeSection
