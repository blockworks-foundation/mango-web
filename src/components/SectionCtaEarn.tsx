
import GradientText from '@/components/GradientText';
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

const SectionCtaEarn = () => {
  return (
    <>
     <div className="">
      <div className="z-10 max-w-7xl mx-auto px-10">
      <h2 className="text-left font-display sm:text-6xl text-2xl tracking-tight mb-6 text-th-fgd-5 leading-tight">
          Powered by a fruit.
          <br />
          <GradientText>This is money with Mango.</GradientText>
        </h2>
      </div>

        <div className="z-10 mt-10 grid grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="group lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3 cursor-pointer  transition duration-150 ease-in-out ">
            <div className="h-[1000px] p-5 z-10 bg-th-bkg-2 hover:bg-th-bkg-3 border-2 border-th-fgd-1 w-full shadow-md hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-[28px] transition duration-150 ease-in-out flex flex-col items-center justify-items-center bg-mangocardpools bg-no-repeat bg-bottom bg-contain">

                <div className="w-full p-2"  >
                <h1 className="font-display text-4xl text-mango-yellow text-left">
                    Pool Rules
                </h1>
                <p className="font-body text-th-fgd-4 mb-3 text-xl">
                    Decentralized lending carries risks, and it&apos;s important to carefully consider these risks before participating in these markets.
                </p>
                <p className="font-mono text-th-fgd-3 mb-5 text-sm">
                    <span className="text-mango-orange font-bold">Disclaimer:</span> This list is intended to be humorous and not to be taken as professional financial advice.
                </p>
                <div className="h-[2px] bg-gradient-to-r from-white/0 via-th-fgd-2 to-white/0 my-2"></div>

                {featureThree.map((feature) => (   
                <ul className="font-body text-th-fgd-4 mb-1" key={feature.bullet}>

                    <li className="inline-flex">
                        <div>
                        <NoSymbolIcon className=" w-6 h-6 text-mango-red mt-[2px] mr-2" />
                        </div>
                        <div>
                        <span className="text-lg text-th-fgd-4">{feature.bullet}</span>
                        <span className="text-lg text-th-fgd-3">{feature.descript}</span>
                        </div>
                    </li>
                    <div className="h-[2px] bg-gradient-to-r from-white/0 via-th-fgd-2 to-white/0 my-2"></div>

                </ul>
                ))}
                </div>

                
            </div>
          </div>  
       </div>
        </div>
        </>

  );
};

export default SectionCtaEarn ;
