import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {ShieldCheckIcon, QrCodeIcon } from '@heroicons/react/20/solid'



const QrCodeDrop = () => {
  return (
    <Popover>
      {({ open }) => (
        <div className="relative">
        <div className="relative group">

        <Popover.Button
            className={`flex z-30 relative items-center justify-center p-[3px] overflow-hidden rounded-full shadow-2xl group`}
          >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-300 group-hover:bg-mango-green rounded-xl blur-md ease-in-out"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 ease-in-out">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 group-hover:bg-mango-yellow rounded-full blur-lg"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 group-hover:bg-mango-orange rounded-full blur-lg"></span>
              </span>
            <span className="relative text-th-fgd-3 bg-th-bkg-3 p-2 rounded-full hover:bg-th-bkg-1 group-hover:text-mango-green transition-all duration-100 ease-in-out ">
            {open ? (
              <ShieldCheckIcon className="h-5 w-5" />
            ) : (
              <QrCodeIcon className="h-5 w-5" />
            )}
            </span>  
          </Popover.Button>

          <div className="p-1 -mt-3 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-sm blur-xl opacity-5 group-hover:opacity-100 transition duration-700 group-hover:duration-700 animate-tilt"></div>
          <div className="p-2 -mt-3 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-sm blur-xl opacity-5 group-hover:opacity-50 transition duration-300 group-hover:duration-700 animate-tilt"></div>
          </div>
          <Transition
            appear={true}
            show={open}
            as={Fragment}
            enter="transition ease-in-out duration-150"
            enterFrom="-translate-y-3"
            enterTo=""
            leave="transition ease-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              className={`absolute right-0 top-16 thin-scroll z-30 max-h-screen w-72 overflow-auto rounded-[18px] shadow-lg bg-th-bkg-3 border border-th-fgd-1 p-4`}
              >
              <div className="grid grid-cols-1">
              <div className="col-span-1 px-1">    
              <h3 className="mb-2 text-sm font-display uppercase tracking-tight text-th-fgd-3">
                        Style & Press
               </h3>            
              <ul className="">
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/"
                          >
                           Logo Zip
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/"
                          >
                           Styleguide
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/"
                          >
                           Press Pack
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        </ul>

              </div>
              </div>
             </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}

export default QrCodeDrop;