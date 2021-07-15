import RatePill from '../components/RatePill'
import Button from './Button'
import Link from './Link'
import GradientText from './GradientText'

const LendSection = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4">
        <section className="py-12 px-3 mt-60">
          <div className="flex flex-wrap justify-center items-center text-center">
            <div className="justify-center px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
              <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                Lending or borrowing has never been this easy.{' '}
              </h2>
              <p className="mb-8 px-24 text-2xl text-gray-400 leading-relaxed">
                Earn interest on deposits, and take out fully collateralized
                loans against existing assets, all enabled by the mango protocol
                and the Solana ecosystem.
              </p>
              <div className="flex flex-row justify-center">
                      <Button>Start Lending & borrowing</Button>
                      <Link>Why lend & borrow using Mango</Link>
                    </div>
            </div>
          </div>
        </section>

        <section className="px-3 mt-28">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-col mb-8">
                <GradientText>                
                  <span className="text-xl font-bold leading-relaxed">
                  Totla Value Deposited
                  </span>
                </GradientText>
              <div className="mt-4 flex flex-row inline-flex bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto">
                <p className="px-2 text-3xl font-bold">$20,095,025.00</p>
              </div>
            </div>

            <div className="flex flex-col mb-12">
                <GradientText>                
                  <span className="text-xl font-bold leading-relaxed">
                  Current Interest Rates
                  </span>
                </GradientText>
              <div className="mt-4 flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto divide-x-2 divide-gray-600 text-left">
                <div className="flex flex-row py-4 px-6 h-auto w-auto">
                  <div className="">
                    <img
                      className="h-6"
                      src="../token/icon-usdc.svg"
                      alt="BTC"
                    />
                    <p className="text-gray-500 font-bold py-1">USDC</p>
                    <div className="flex flex-row">
                      <p className="font-bold text-xl pr-2">$1.00</p>
                      <RatePill />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-6 h-auto w-auto">
                  <div className="">
                    <img
                      className="h-6"
                      src="../token/icon-btc.svg"
                      alt="BTC"
                    />
                    <p className="text-gray-500 font-bold py-1">BTC/USDC</p>
                    <div className="flex flex-row">
                      <p className="font-bold text-xl pr-2">$32,234.23</p>
                      <RatePill />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-6 h-auto w-auto">
                  <div className="">
                    <img
                      className="h-6"
                      src="../token/icon-eth.svg"
                      alt="BTC"
                    />
                    <p className="text-gray-500 font-bold py-1">ETH/USDC</p>
                    <div className="flex flex-row">
                      <p className="font-bold text-xl pr-2">$2,234.23</p>
                      <RatePill />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-6 h-auto w-auto">
                  <div className="">
                    <img
                      className="h-6"
                      src="../token/icon-sol.svg"
                      alt="BTC"
                    />
                    <p className="text-gray-500 font-bold py-1">SOL/USDC</p>
                    <div className="flex flex-row">
                      <p className="font-bold text-xl pr-2">$34.23</p>
                      <RatePill />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-6 h-auto w-auto">
                  <div className="">
                    <img
                      className="h-6"
                      src="../token/icon-srm.svg"
                      alt="BTC"
                    />
                    <p className="text-gray-500 font-bold py-1">SRM/USDC</p>
                    <div className="flex flex-row">
                      <p className="font-bold text-xl pr-2">$4.23</p>
                      <RatePill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-3 mt-36">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <div className="z-10 relative -left-96 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
                <img
                  className="lg:h-750 lg:w-auto lg:max-w-none"
                  src="../img/borrow1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="z-10 relative -right-60 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
                <img
                  className="lg:h-750 lg:w-auto lg:max-w-none"
                  src="../img/borrow.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LendSection
