
import GradientText from '@/components/GradientText';
import ButtonTwo from '@/components/ButtonTwo';
import CallToActionCard from '@/components/CallToActionCard'

const BrandHero = () => {
  return (
    <>
     <div className="mt-20 py-40">
      <div className="z-10">
      <h2 className="text-center font-display sm:text-5xl text-2xl tracking-tight mb-6 text-th-fgd-5 leading-tight">
            <GradientText>Mango Brand Guidelines.</GradientText>
      </h2>
      <p className="text-th-fgd-4 text-center text-2xl">
         Resources for presenting the Mango brand consistently and professionally.
      </p>
      </div>
        <div className="my-8 flex flex-row justify-center">
                      
                      <ButtonTwo>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://trade.mango.markets"
                        >
                          Download Brand Assets
                        </a>
                      </ButtonTwo>
                      


        </div>

          <div className="z-10 mt-20 grid grid-cols-2 max-w-7xl mx-auto">
          <div className="group lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3 cursor-pointer  transition duration-150 ease-in-out">
            <div className="p-5 z-10 bg-th-bkg-2 hover:bg-th-bkg-3 border-2 border-th-fgd-1 w-full shadow-md hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-[28px] transition duration-150 ease-in-out flex flex-col items-center justify-items-center">
                <div className="w-full ">
                <h1 className="font-display text-lg p-2 text-white/50 text-left">
                    Primary Brand Colors
                </h1>
                </div>

                <div className="grid grid-cols-4 gap-4 mx-auto w-full">
                  <div>
                    <div className="col-span-1 p-4 bg-mango-red h-20 rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #E54033
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-mango-yellow h-20 rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #FECA1A
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-mango-green h-20 rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #AFD803
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-mango-purple h-20 rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #5B48AD
                    </p>
                  </div>
                </div>

                <div className="w-full ">
                <h1 className="font-display text-lg p-2 text-white/50 text-left mt-10">
                    Secondary Brand Colors
                </h1>
                </div>    
                <div className="grid grid-cols-4 gap-4 mx-auto w-full">
                <div>
                    <div className="col-span-1 p-4 bg-th-bkg-1 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #1C1923
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-th-bkg-2 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #272432
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-th-bkg-3 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #322E41
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-th-bkg-4 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #3E394F
                    </p>
                  </div>
                </div>

                <div className="w-full ">
                <h1 className="font-display text-lg p-2 text-white/50 text-left mt-10">
                    Tirtiary Brand Colors
                </h1>
                </div>    
                <div className="grid grid-cols-4 gap-4 mx-auto w-full">
                <div>
                    <div className="col-span-1 p-4 bg-th-fgd-1 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #322F3C
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-th-fgd-2 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #3D3946
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-th-fgd-3 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #7D7C84
                    </p>
                  </div>
                  <div>
                    <div className="col-span-1 p-4 bg-th-fgd-4 h-20  rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    </div>
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1">
                        #D4D3D6
                    </p>
                  </div>
                </div>
                
            </div>
          </div>  

          </div>
        </div>
        <CallToActionCard /> 
        </>

  );
};

export default BrandHero ;
