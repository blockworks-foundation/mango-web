import React from 'react';

import { 
  FireIcon,
  } from '@heroicons/react/20/solid';

function GridItemShort(props: any) {

  return (
    <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
      <div className="z-10 bg-th-bkg-3 bg-opacity-5 border border-th-fgd-1 h-350 w-full shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-[28px] bg-mangocard bg-contain bg-bottom bg-no-repeat">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-8">
            <dl className="text-left">
                <dt>
                <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-xl text-th-fgd-5 bg-white bg-opacity-10 transition-all duration-150 ease-in-out">
                        <FireIcon className="h-6 w-6" />
                  </span>

                  <h2 className="text-th-fgd-5 font-display text-xl mb-2">
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

export default GridItemShort;
