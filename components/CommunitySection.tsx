import PercentPill from '../components/PercentPill'

const CommunitySection = () => {
  return (
    <div className="">
      <div className="bg-th-bkg-3 h-2150 transform -skew-y-3 pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48 -mt-64">
        <div className="max-w-7xl mx-auto px-4 transform skew-y-3">
          <section className="py-12 px-3 mt-60">
            <div className="flex flex-wrap justify-center items-center text-center">
              <div className="px-2 order-1 lg:order-none">
                <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                  Community driven innovation.{' '}
                </h2>
                <p className="mb-8 px-24 text-2xl text-gray-400 leading-relaxed">
                  Mango is building the infrastructure for the future
                  decentralized web and open sourcing the code for anyone to use
                  and contribute.{' '}
                </p>
                <div>
                  <button className="inline-flex items-center px-8 py-2 text-lg text-white font-bold bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 hover:from-yellow-100 via-lime-300 to-green-400 rounded-full transition duration-200">
                    <span className="pr-4">Join the discord</span>
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
                    Explore the docs
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 px-3">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
                <div className="col-span-1 flex md:col-span-2 lg:col-span-1">
                  <a href="#">
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
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
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
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
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
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
                    <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
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
        </div>
      </div>
    </div>
  )
}

export default CommunitySection
