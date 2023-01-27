import { Popover, Transition } from '@headlessui/react'
import { ClipboardDocumentIcon, NewspaperIcon, PaintBrushIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import Logo from './Logo'



const StyleGuideDrop = () => {
  return (
    <Popover>
      {({ open }) => (
        <div className="relative">
        <div className="relative group">

          <Popover.Button
            className={`group flex z-30 overflow-hidden p-4 -mt-3`}
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
              className={`absolute left-0 top-[95px] z-20 max-h-screen w-[240px] overflow-auto rounded-[18px] shadow-lg bg-th-bkg-3 border border-th-fgd-1 px-2 py-3 pb-0`}
            >
              <div className="grid grid-cols-1">
              <div className="col-span-1 px-1">              
              <ul className="">
                        <li className="group mb-2 text-sm">
                          <a
                            className="inline-flex text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out w-full"
                            href="https://trade.mango.markets/"
                          >
                          <NewspaperIcon className="w-[15px] h-[15px] mr-2 mt-1 group-hover:text-mango-yellow" /> 

                           Download Presskit
                          </a>
                        </li>
                        <li className="group mb-2 text-sm">
                          <a
                            className="inline-flex text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out  w-full"
                            href="https://trade.mango.markets/"
                          >
                          <ClipboardDocumentIcon className="w-[15px] h-[15px] mr-2 mt-1 group-hover:text-mango-yellow" /> 
                           Copy Logo as SVG
                          </a>
                        </li>
                        <div className="h-[2px] bg-gradient-to-r from-white/0 via-th-fgd-2 to-white/0 my-2"></div>
                        <li className="group mb-4 text-sm">
                          <a
                            className="inline-flex text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out  w-full"
                            href="https://trade.mango.markets/"
                          >
                          <PaintBrushIcon className="w-[15px] h-[15px] mr-2 mt-1 group-hover:text-mango-yellow" /> 
                           Mango Brand Guidlines
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