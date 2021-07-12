import PercentPill from '../components/PercentPill'


const HomeSection = () => {
  return (
    <div className="bg-th-bkg-3 transform -skew-y-3 pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48 -mt-64">
      <div className="max-w-7xl mx-auto px-4 transform skew-y-3">
        
        <section className="py-12 px-3">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">

              <div className="col-span-1 flex md:col-span-2 lg:col-span-1">
                <a href="#">
                 <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
                  <div className="pr-6 border-r-4 border-white border-opacity-10">                
                    <img className="h-6" src="../token/icon-btc.svg" alt="BTC"/>  
                    <p className="text-gray-500 font-bold py-1">BTC/USD</p>
                    <p className="font-bold text-xl">$32,234.23</p>
                    <PercentPill />
                  </div>
                    <div className="flex align-middle pl-6">                
                      <img className="h-auto" src="../graph_red.svg" alt=""/>  
                  </div>
                </div>
                </a>
              </div>

              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <a href="#">
               <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
                  <div className="pr-6 border-r-4 border-white border-opacity-10">                
                    <img className="h-6" src="../token/icon-eth.svg" alt="BTC"/>  
                    <p className="text-gray-500 font-bold py-1">ETH/USD</p>
                    <p className="font-bold text-xl">$2,234.23</p>
                    <PercentPill />
                  </div>
                    <div className="flex align-middle pl-6">                
                      <img className="h-auto" src="../graph_green.svg" alt=""/>  
                  </div>
                </div>
                </a>
              </div>

              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <a href="#">
                <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
                  <div className="pr-6 border-r-4 border-white border-opacity-10">                
                    <img className="h-6" src="../token/icon-sol.svg" alt="BTC"/>  
                    <p className="text-gray-500 font-bold py-1">SOL/USD</p>
                    <p className="font-bold text-xl">$34.23</p>
                    <PercentPill />
                  </div>
                    <div className="flex align-middle pl-6">                
                      <img className="h-auto" src="../graph_red.svg" alt=""/>  
                  </div>
                </div>
                </a>
              </div>

              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <a href="#">
                <div className="flex flex-row bg-th-fgd-4 rounded-lg py-4 px-6 h-auto w-auto hover:border-2 border-white transition duration-100">
                  <div className="pr-6 border-r-4 border-white border-opacity-10">                
                    <img className="h-6" src="../token/icon-srm.svg" alt="BTC"/>  
                    <p className="text-gray-500 font-bold py-1">SRM/USD</p>
                    <p className="font-bold text-xl">$4.23</p>
                    <PercentPill />
                  </div>
                    <div className="flex align-middle pl-6">                
                      <img className="h-auto" src="../graph_green.svg" alt=""/>  
                  </div>
                </div>
                </a>
              </div>
              
            </div>
          </div>
        </section>

        <section className="py-12 px-3">
          <div className="flex flex-wrap items-center text-center -mx-2">
            <div className="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
              <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                Intuitive & fast non-custodial trading.{' '}
              </h2>
              <p className="mb-8 text-gray-400 leading-relaxed">
                Cross-collateralized margin trading with up to 5x leverage. Trade knowing you control your funds, no more centralized counterparty risk.{' '}
              </p>
              <div>
                <button className="inline-flex items-center px-8 py-2 text-lg text-white font-bold bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 hover:bg-blue-600 rounded-full transition duration-200">
                  <span className="pr-4">Start trading</span>
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
                  Why choose Mango Markets?
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default HomeSection
