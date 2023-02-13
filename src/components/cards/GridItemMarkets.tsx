import React from 'react';
import Image from 'next/image';
//import { 
  //ScaleIcon
//  } from '@heroicons/react/20/solid';

function GridItemMarkets(props: any) {
  return (
    <div className="group lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3 cursor-pointer  transition duration-150 ease-in-out">
      <div className="z-10 bg-th-bkg-2 hover:bg-th-bkg-3 border-2 border-th-fgd-1 w-full shadow-md hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-[28px] sm:bg-mangocardmarkets bg-contain sm:bg-right bg-bottom bg-no-repeat transition duration-150 ease-in-out">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col">
              <div className="text-left sm:w-1/2">
                <div>{/*
                <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-3 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-hover:text-white transition-all duration-150 ease-in-out">
                     <ScaleIcon className="h-6 w-6" />
                 </span>*/}
                  <h2 className="text-th-fgd-4 group-hover:text-mango-yellow font-display tracking-tighter text-xl mb-2 transition duration-150 ease-in-out">
                    {props.name}
                  </h2>
                </div>
                <div className="font-body text-th-fgd-3 group-hover:text-th-fgd-4 text-md transition duration-150 ease-in-out">
                  {props.description}
                </div>
                 <p className="text-white text-opacity-50 text-sm font-bold mt-4">
                    Powered by:
                  </p>
                 <div className="grid grid-cols-2 gap-4 saturate-0 group-hover:saturate-100">
                  <div className="inline-flex col-span-1 p-4 bg-th-fgd-1 rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                  <Image
                      className="h-4 mt-[10px]"
                      src="/assets/images/logo-openbook.png"
                      alt="controls"
                      width={0}
                      height={0}
                      loading="lazy"
                      style={{ width: 'auto', height: '30px' }}
                    />                     
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1 ml-3">
                      Openbook
                    </p>
                  </div>
                  <div className="inline-flex col-span-1 p-4 bg-th-fgd-1 rounded-2xl mt-3 border border-th-fgd-2 shadow-md">
                    <Image
                      className="h-8"
                      src="/assets/images/logo-jupiter.svg"
                      alt="controls"
                      width={0}
                      height={0}
                      loading="lazy"
                      style={{ width: 'auto', height: '30px' }}
                    /> 
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1 ml-3">
                      Jupiter
                    </p>
                  </div>
                  <div className="inline-flex col-span-1 p-4 bg-th-fgd-1 rounded-2xl border border-th-fgd-2 shadow-md">
                  <Image
                      className="h-8"
                      src="/assets/images/logo-solana.svg"
                      alt="controls"
                      width={0}
                      height={0}
                      loading="lazy"
                      style={{ width: 'auto', height: '30px' }}
                    /> 
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1 ml-3">
                      Solana
                    </p>
                  </div>
                  <div className="inline-flex col-span-1 p-4 bg-th-fgd-1 rounded-2xl border border-th-fgd-2 shadow-md">
                  <Image
                      className="h-8"
                      src="/assets/images/logo-orca.svg"
                      alt="controls"
                      width={0}
                      height={0}
                      loading="lazy"
                      style={{ width: 'auto', height: '30px' }}
                    /> 
                    <p className="text-center text-th-fgd-4 text-md font-bold py-1 ml-3">
                      Orca
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridItemMarkets;
