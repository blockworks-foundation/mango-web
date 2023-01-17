import React from 'react';
import { 
  ScaleIcon

  } from '@heroicons/react/20/solid';

function GridItemLending(props: any) {
  return (
    <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3 cursor-pointer  transition duration-150 ease-in-out">
      <div className="z-10 bg-th-bkg-2 hover:bg-th-bkg-3 border-2 border-th-fgd-1 h-[380px] w-full shadow-md hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-[28px] bg-mangocardmarkets bg-contain bg-right bg-no-repeat transition duration-150 ease-in-out">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-8">
            <dl className="text-left w-1/2">
                <dt>
                <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-3 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-hover:text-white transition-all duration-150 ease-in-out">
                     <ScaleIcon className="h-6 w-6" />
                 </span>
                  <h2 className="text-th-fgd-4 group-hover:text-mango-yellow font-display tracking-tighter text-xl mb-2 transition duration-150 ease-in-out">
                    {props.name}
                  </h2>
                </dt>
                <dd className="text-th-fgd-3 text-md">
                  {props.description}
                </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridItemLending;
