// import GradientText from "@/components/GradientText";
import MangoBlob from "@/components/MangoBlob"

const CallToAction = () => {
  return (
    <>
<div className="z-0 transform -translate-y-40 translate-x-32">
           <MangoBlob />
          </div> 
<div className="z-50 mx-auto max-w-7xl pt-0 pb-16 my-16 mt-0">
    <div className="group h-72 transform transition duration-200 ease-in-out hover:-translate-y-2 border border-th-fgd-2 rounded-[40px] shadow-lg hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.1)] overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-mangotop bg-cover bg-top bg-no-repeat bg-th-bkg-3">
    <div className="pt-10 pb-12 px-5 sm:pt-16 sm:px-16 lg:py-4 lg:pr-0 xl:py-12 xl:px-16">
        <div className="lg:self-center">
        <h2 className="text-4xl font-display text-th-fgd-5 w-screen">
            <span className="block">
              Doesnt matter where you are. 
            <br />
              We open-source everything.
            </span>
        </h2>
        <div className="py-8">
        
        <div
                          onClick={() =>  navigator.clipboard.writeText('git clone https://github.com/blockworks-foundation/mango-v4-ui.git')}
                          className="group cursor-pointer overflow-hidden inline-flex max-w-md shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] bg-dark-theme-bkg-3 border-2 border-th-fgd-3 hover:border-mango-yellow rounded-[12px] transition-all duration-150 ease-in-out">
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
          <div className="opacity-0 group-hover:opacity-100">
             <p className="animate-pulse flex flex-row text-sm font-mono text-th-fgd-4 group-hover:text-opacity-100 w-screen p-2 transition duration-150 ease-in-out">
               Copy into your terminal
                    <span className="ml-1 text-th-fgd-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-5 h-5">
                      <path 
                        fillRule="evenodd" 
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" 
                        clipRule="evenodd" 
                        />
                    </svg>
                    </span> 
            </p>
          </div>
        </div>
        </div>
    </div>

    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
        <img
        className="transform translate-x-2 translate-y-2 object-cover"
        src="assets/images/cpu-mango.png"
        alt="mango markets"
        />
    </div>
    </div>
</div>
</>
  );
};

export default CallToAction;
