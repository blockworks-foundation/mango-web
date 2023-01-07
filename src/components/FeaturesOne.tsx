
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import FeaturesOneTabs from '@/components/FeaturesOneTabs';

const FeaturesOne = () => {
  return (
    <>
      <div className="mt-72 mb-8 z-10 max-w-7xl mx-auto p-8">
      <p className="z-20 font-mono text-2xl mb-3 text-left font-bold text-th-fgd-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          Trade, leverage, and utilize.
          <br />
          <GradientText>All from one hub.</GradientText>
        </p>
        <div className="mt-8 inline-flex">
                        <div className="w-72">
                            <Button>
                                    <a
                                    rel="noreferrer"
                                  target="_blank"
                                  href="https://trade.mango.markets"
                                  >
                                Discover 🥭
                            </a>
                        </Button>           
                        </div>


                     <div
                          onClick={() =>  navigator.clipboard.writeText('git clone https://github.com/blockworks-foundation/mango-v4-ui.git')}
                          className="group cursor-pointer inline-flex overflow-hidden max-w-md -ml-[130px] shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] bg-dark-theme-bkg-3 border-2 border-th-fgd-3 hover:border-mango-yellow rounded-[12px] transition-all duration-150 ease-in-out">
                        <span className="p-2 bg-black bg-opacity-40 group-hover:bg-opacity-0 border-r-2 border-th-fgd-3 rounded-l-[8px]">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-5 h-5 text-white text-opacity-50 group-hover:text-mango-green transition duration-150 ease-in-out">
                            <path 
                            d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                            <path 
                            d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                          </svg>
                        </span>
                          <span>
                            <p className="type-clone text-xs font-mono text-white text-opacity-60 group-hover:text-opacity-100 w-screen p-2 transition duration-150 ease-in-out">
                              {/* git clone https://github.com/blockworks-foundation/mango-v4-ui.git */}
                            </p>
                          </span>
                  </div>
        
        </div>
      </div>
      <div className="mt-42 p-10">
          <FeaturesOneTabs />
      </div>
    </>
  );
};

export default FeaturesOne;
