import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Logo from './Logo'



const StyleGuideDrop = () => {
  return (
    <Popover>
      {({ open }) => (
        <div className="relative">
        <div className="relative group">

          <Popover.Button
            className={`group flex z-30 overflow-hidden`}
          >
            <Logo /> 
          </Popover.Button>

          <div className="p-1 -mt-6 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300 group-hover:duration-300 animate-tilt"></div>
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
              className={`absolute left-0 top-16 thin-scroll z-20 max-h-screen w-48 overflow-auto rounded-[18px] shadow-lg bg-th-bkg-3 border border-th-fgd-1 p-4`}
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

export default StyleGuideDrop;