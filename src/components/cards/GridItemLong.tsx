import React from 'react';

function GridItemLong(props: any) {
  return (
    <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
      <div className="z-10 bg-th-bkg-3 backdrop-blur-xl bg-opacity-5 border border-th-fgd-1 border-opacity-5 h-350 w-full shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-2xl bg-mangocardtwo bg-contain bg-right bg-no-repeat">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-8">
            <dl className="">
              <div className="text-left">
                <dt>
                  {/* 
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                    <feature.icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  */}
                  <h2 className="text-th-fgd-5 font-display text-xl mb-2">
                    {props.name}
                  </h2>
                </dt>
                <dd className="text-th-fgd-3 text-md">
                  {props.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridItemLong;
