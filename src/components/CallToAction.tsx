import ButtonWhite from "@/components/ButtonWhite";
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
            Access to what you need. 
            <br />
            <GradientText>No approvals needed.</GradientText>
            </span>
        </h2>

        <div className="mt-8 flex flex-row">
                      
                      <ButtonWhite>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://trade.mango.markets"
                        >
                          Discover 🥭
                        </a>
                      </ButtonWhite>
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
