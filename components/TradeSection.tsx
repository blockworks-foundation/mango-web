import PercentPill from '../components/PercentPill'
import Button from './Button'
import GradientText from './GradientText'
import Link from './Link'

const TradeSection = () => {
  return (
    <div className="">
      <div className="bg-th-bkg-3 h-1750 transform -skew-y-3 pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48 -mt-64 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 transform skew-y-3">
          <section className="py-12 px-3">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
                <div className="col-span-1 flex md:col-span-2 lg:col-span-1">
                  <a href="#">
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto">
                      <div className="pr-6 border-r-4 border-white border-opacity-10">
                        <img
                          className="h-6"
                          src="../token/icon-btc.svg"
                          alt="BTC"
                        />
                        <p className="text-gray-500 font-bold py-1">BTC/USD</p>
                        <div className="flex flex-row">
                          <p className="font-bold text-xl pr-2">$32,234.23</p>
                          <PercentPill />
                        </div>
                      </div>
                      <div className="flex align-middle pl-6">
                        <img className="h-auto" src="../graph_red.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="#">
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto">
                      <div className="pr-6 border-r-4 border-white border-opacity-10">
                        <img
                          className="h-6"
                          src="../token/icon-eth.svg"
                          alt="BTC"
                        />
                        <p className="text-gray-500 font-bold py-1">ETH/USD</p>
                        <div className="flex flex-row">
                          <p className="font-bold text-xl pr-2">$2,234.23</p>
                          <PercentPill />
                        </div>
                      </div>
                      <div className="flex align-middle pl-6">
                        <img
                          className="h-auto"
                          src="../graph_green.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="#">
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto">
                      <div className="pr-6 border-r-4 border-white border-opacity-10">
                        <img
                          className="h-6"
                          src="../token/icon-sol.svg"
                          alt="BTC"
                        />
                        <p className="text-gray-500 font-bold py-1">SOL/USD</p>
                        <div className="flex flex-row">
                          <p className="font-bold text-xl pr-2">$34.23</p>
                          <PercentPill />
                        </div>
                      </div>
                      <div className="flex align-middle pl-6">
                        <img className="h-auto" src="../graph_red.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="#">
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto">
                      <div className="pr-6 border-r-4 border-white border-opacity-10">
                        <img
                          className="h-6"
                          src="../token/icon-srm.svg"
                          alt="BTC"
                        />
                        <p className="text-gray-500 font-bold py-1">SRM/USD</p>
                        <div className="flex flex-row">
                          <p className="font-bold text-xl pr-3">$4.23</p>
                          <PercentPill />
                        </div>
                      </div>
                      <div className="flex align-middle pl-6">
                        <img
                          className="h-auto"
                          src="../graph_green.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-3 mt-60">
            <div className="flex flex-wrap justify-center items-center text-center">
              <div className="px-2 order-1 lg:order-none">
                <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                  Intuitive & fast self-custody trading.{' '}
                </h2>
                <div className="">
                  <p className="mb-8 px-24 text-2xl text-gray-400 leading-relaxed">
                    Cross-collateralized margin trading with up to 5x leverage.
                    Trade knowing you control your funds, no more centralized
                    counterparty risk.{' '}
                  </p>
                </div>
                <div className="flex flex-row justify-center">
                      <Button>Start trading</Button>
                      <Link>Why choose Mango Markets</Link>
                    </div>
              </div>
            </div>
          </section>
          <section className="px-3">
            <div className="flex flex-wrap justify-center items-center text-center">
              <div className="flex flex-col">
                <GradientText>                
                  <span className="text-xl font-bold leading-relaxed">
                  Volume
                  </span>
                </GradientText>

                <div className="mt-4 flex flex-row inline-flex bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto divide-x-2 divide-gray-600">
                  <div className="flex-1 inline-flex pr-4">
                    <p className="px-2">1.3M</p>
                    <p className="text-yellow-300 font-bold py-1 -mt-1">D</p>
                  </div>
                  <div className="flex-1 inline-flex px-4">
                    <p className="px-2">32.4M</p>
                    <p className="text-yellow-300 font-bold py-1 -mt-1">W</p>
                  </div>
                  <div className="flex-1 inline-flex pl-4">
                    <p className="px-2">75.4M</p>
                    <p className="text-yellow-300 font-bold py-1  -mt-1 uppercase">
                      Cumulative
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="w-screen relative -left-52">
            <img alt="modals" src="../img/home_section.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeSection
