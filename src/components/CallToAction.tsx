import ButtonWhite from "@/components/ButtonWhite";
import Linkie from "@/components/Linkie";

const CallToAction = () => {
  return (
    <>

<div className="z-50 mx-auto max-w-7xl pt-0 pb-16 my-16 mt-0">
    <div className="transform transition duration-200 ease-in-out hover:-translate-y-2 h-80 bg-mango-bkg-2 border border-mango-orange rounded-xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-bg-cta bg-cover bg-bottom bg-no-repeat">
    <div className="pt-10 pb-12 px-5 sm:pt-16 sm:px-16 lg:py-4 lg:pr-0 xl:py-20 xl:px-20">
        <div className="lg:self-center">
        <h2 className="text-3xl font-extrabold text-white">
            <span className="block">
            Access to what you need. No approvals needed.
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
                      

                      <Linkie>
                        <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://docs.mango.markets/"
                        >
                        Explore the docs
                        </a>
                      </Linkie>

        </div>
        </div>
    </div>

    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
        <img
        className="transform translate-x-2 translate-y-2 object-cover object-left-top sm:translate-x-12 lg:translate-y-16"
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
