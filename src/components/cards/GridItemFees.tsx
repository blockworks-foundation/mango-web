import React from 'react';


function GridItemFees(props: any) {

  return (
    <>
    <div className="group lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3 cursor-pointer hover:-translate-y-2 hover:-rotate-1 transition duration-150 ease-in-out">
    <div className="z-10 bg-th-bkg-2 hover:bg-th-bkg-3 border-2 border-th-fgd-1 h-[400px] w-full shadow-md hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.2)] rounded-[28px] bg-mangocardcoin bg-contain bg-top bg-no-repeat transition duration-150 ease-in-out flex justify-items-end place-items-end items-end">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-8">
            <dl className="text-left">
                <dt>

                <h2 className="text-th-fgd-4 group-hover:text-mango-yellow font-display tracking-tighter text-xl mb-2 transition duration-150 ease-in-out">
                    {props.name}
                  </h2>
                </dt>

                  <dd className="text-th-fgd-3 group-hover:text-th-fgd-4 text-md transition duration-150 ease-in-out">
                  {props.description}
                </dd>

            </dl>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default GridItemFees;
