import GradientText from "@/components/GradientText";
import MangoBlob from "@/components/MangoBlob"

const CallToAction = () => {
  return (
    <>
<div className="z-0 transform -translate-y-40 translate-x-32">
           <MangoBlob />
          </div> 
<div className="z-50 mx-auto max-w-7xl pt-0 pb-16 my-16 mt-0">
    <div className="group h-72 transform transition duration-200 ease-in-out hover:-translate-y-2 bg-th-bkg-4 border border-th-fgd-2 rounded-[40px] shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-mangotop bg-cover bg-top bg-no-repeat backdrop-blur-xl bg-opacity-50">
    <div className="pt-10 pb-12 px-5 sm:pt-16 sm:px-16 lg:py-4 lg:pr-0 xl:py-12 xl:px-16">
        <div className="lg:self-center">
        <h2 className="text-4xl font-mono text-white w-screen">
            <span className="block">
            Doesnt matter where you are. 
            <br />
            <GradientText>We open-source everything.</GradientText>
            </span>
        </h2>
        <div className="py-8">

        <div className="flex flex-row bg-dark-theme-bkg-3 border-2 border-th-fgd-3 rounded-[10px]">
                        <span className="p-2 bg-white bg-opacity-10 border-r-2 border-th-fgd-3 rounded-l-[8px]">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-6 h-6 text-white text-opacity-50 group-hover:text-mango-yellow">
                          <path 
                            fillRule="evenodd" 
                            d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" 
                            clipRule="evenodd" />
                        </svg>
                        </span>
                          <span>
                            <p className=" text-xs font-mono text-white text-opacity-60 w-screen p-3">
                              https://github.com/blockworks-foundation/mango-v4-ui.git
                            </p>
                          </span>

        </div>

        </div>
        </div>
    </div>

    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
        <img
        className="transform translate-x-2 translate-y-2 object-cover"
        src="assets/images/mango_cpu.png"
        alt="mango markets"
        />
    </div>
    </div>
</div>
</>
  );
};

export default CallToAction;
