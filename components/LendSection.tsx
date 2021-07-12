import RatePill from '../components/RatePill'

const LendSection = () => {
  return (
    <div className="">
      <div className="">
        <section className="py-12 px-3 mt-60">
          <div className="flex flex-wrap justify-center items-center text-center">
            <div className="px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
              <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                Lending made simple.{' '}
              </h2>
              <p className="mb-8 px-24 text-2xl text-gray-400 leading-relaxed">
                Earn interest on deposits, and take out fully collateralized
                loans against existing assets, all enabled by the mango protocol
                and the Solana ecosystem.
              </p>
              <div>
                <button className="inline-flex items-center px-8 py-2 text-lg text-white font-bold bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 hover:from-yellow-100 via-lime-300 to-green-400 rounded-full transition duration-200">
                  <span className="pr-4">Borrow &amp; lend with Mango</span>
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.6665L7.8963 7.99984L1 14.3332"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="inline-flex items-center mx-4 px-8 py-2 text-lg text-gray-400 font-bold bg-gray-600 hover:bg-gray-700 hover:text-gray-100 rounded-full transition duration-200">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-3">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="">
              <p className="mb-4 text-xl text-gray-400 font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-green-300">
                TOTAL VALUE DEPOSITED
              </p>
              <div className="flex flex-row inline-flex bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto">
                <p className="px-2 text-3xl font-bold">$20,095,025.00</p>
              </div>
            </div>

            <div className="">
              <p className="mb-4 mt-8 text-xl text-gray-400 font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-green-300">
                INTEREST RATES
              </p>
              <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto divide-x-2 divide-gray-600 text-left">
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
        <section className="px-3 overflow-hidden">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <div className="z-10 relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
                <img
                  className="lg:h-750 lg:w-auto lg:max-w-none"
                  src="../img/borrow1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="z-10 relative pl-4 ml-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
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
