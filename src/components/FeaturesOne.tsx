
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import FeaturesOneTabs from '@/components/FeaturesOneTabs';

const FeaturesOne = () => {
  return (
    <>
      <div className="mt-72 mb-8 z-10 max-w-7xl mx-auto p-8">
        <p className="font-mono xs:text-3xl mb-3 text-left font-bold text-th-fgd-4 sm:text-4xl md:text-4xl lg:text-5xl">
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
                          className="group cursor-pointer inline-flex overflow-hidden max-w-md -ml-[130px] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] bg-dark-theme-bkg-3 border-2 border-th-fgd-3 hover:border-mango-yellow rounded-[12px] transition-all duration-150 ease-in-out">
                        <span className="p-2 bg-black bg-opacity-40 group-hover:bg-opacity-0 border-r-2 border-th-fgd-3 rounded-l-[8px]">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-5 h-5 text-white text-opacity-50 group-hover:text-mango-green transition duration-150 ease-in-out">
                          <path 
                            fillRule="evenodd" 
                            d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" 
                            clipRule="evenodd" />
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
