import GradientText from "@/components/GradientText";

const CallToAction = () => {
  return (
    <>

<div className="z-50 mx-auto max-w-7xl pt-0 pb-16 my-16 mt-0">
    <div className="group h-72 transform transition duration-200 ease-in-out hover:-translate-y-2 bg-th-bkg-4 border border-th-fgd-2 rounded-[40px] shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-mangotop bg-cover bg-top bg-no-repeat">
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
                          <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z" 
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
