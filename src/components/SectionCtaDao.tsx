
import GradientText from '@/components/GradientText';
import { StopIcon } from '@heroicons/react/20/solid';
//import ButtonTwo from '@/components/ButtonTwo';
//import LinkieTwo from '@/components/LinkieTwo';
// import MangoBlob from '@/components/MangoBlob';
import { NoSymbolIcon } from '@heroicons/react/24/solid';

const featureThree = [
    {
        bullet:
        "No diving. ",
      descript:
        "Check the depth of collateral in pools before borrowing.",
    },
      {
        bullet:
          "Don't get liqduiated. ",
          descript:
          " Use responsible margin and leverage.",
        },
        {
            bullet:
              "No horseplay. ",
              descript:
              "Volatility and manipulation is a serious business.",
            },
                {
                    bullet:
                      "No cannonballs. ",
                      descript:
                      "Manage large positions accordingly.",
                    },
                    {
                        bullet:
                          "Markets are unpredictable. ",
                          descript:
                          "make sure you have a plan for your positions.",
                        },
                        {
                            bullet:
                              "No lending to unicorns. ",
                              descript:
                              "they may be mythical creatures, but default is very real.",
                            },
                            {
                                bullet:
                                  "Check rates. ",
                                  descript:
                                  "You don't want to end up paying more than you borrowed.",
                                },
                            ]

const SectionCtaDao = () => {
  return (
    <>
     <div className="py-40">
      <div className="z-10 max-w-7xl mx-auto px-10">
      <h2 className="text-center font-display sm:text-6xl text-2xl tracking-tight mb-6 text-th-fgd-5 leading-tight">
          Driven by a belief.
          <br />
          <GradientText>This is our Manifesto.</GradientText>
        </h2>
      </div>

        <div className="z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
          <div className="group lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3 cursor-pointer  transition duration-150 ease-in-out px-5">
            <div className="h-[580px] p-5 z-10 bg-th-bkg-2 hover:bg-th-bkg-3 border-2 border-th-fgd-1 w-full shadow-md hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-[28px] transition duration-150 ease-in-out flex flex-col items-center justify-items-center bg-mangocardpools bg-no-repeat bg-bottom bg-contain">

                <div className="w-full p-2"  >
                <h1 className="font-display text-4xl text-mango-yellow text-left tracking-tighter leading-tight">
                    Take caution while swiming.
                </h1>
                <p className="font-body text-th-fgd-4 mb-3 text-xl">
                    Decentralized lending carries risks, and it&apos;s important to carefully consider these risks before participating in decentralized lending markets.
                </p>

            </div>

                
            </div>
          </div>  
          <div className="group lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3 px-5">
                <h1 className="inline-flex font-display text-3xl text-th-fgd-3 text-left mb-2">
                    Pool Rules  
                    <span>
                      <NoSymbolIcon className=" w-8 h-8 text-mango-red mt-[8px] ml-2" />
                     </span>                                  
                </h1>

                <div className="h-[2px] bg-gradient-to-r from-white/0 via-th-fgd-2 to-white/0 mb-2"></div>

            {featureThree.map((feature) => (   
                <ul className="font-body text-th-fgd-4 mb-1" key={feature.bullet}>

                    <li className="inline-flex">
                        <div>
                        <StopIcon className=" w-3 h-3 text-th-fgd-2 mt-[8px] mr-2" />
                        </div>
                        <div>
                        <span className="text-xl text-th-fgd-4">{feature.bullet}</span>
                        <span className="text-xl text-th-fgd-3">{feature.descript}</span>
                        </div>
                    </li>
                </ul>
                ))}
                <div className="h-[2px] bg-gradient-to-r from-white/0 via-th-fgd-2 to-white/0 my-2"></div>

                <p className="font-mono text-th-fgd-3 mt-5 text-sm">
                    <span className="text-mango-orange font-bold">Disclaimer:</span> This list is intended to be humorous and not to be taken as professional financial advice.
                </p>
        </div>
       </div>

        </div>
        </>

  );
};

export default SectionCtaDao ;
