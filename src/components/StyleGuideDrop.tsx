import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { PaintBrushIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import Logo from './Logo';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';



const StyleGuideDrop = () => {
  const [isRightClicked, setIsRightClicked] = useState(false);
  //const [isLeftClicked, setIsLeftClicked] = useState(false);

  const handleRightClick = (event: any) => {
    event.preventDefault();
    setIsRightClicked(!isRightClicked);
  };

  const handleLeftClick = () => {
    window.location.href = '/';
  };

  return (
    <Popover>
      {({ open }) => (
        <div className="relative">
        <div className="relative group">

          <Popover.Button
            className={`group flex z-30 overflow-hidden p-3 transform -translate-y-3`}
            onContextMenu={handleRightClick}
            onClick={handleLeftClick}
            id="Logo button" 
            type="button" 
            aria-label='Logo button'
            aria-haspopup="true"
          >
           
            <Logo /> 
          </Popover.Button>

          <div className="-mt-10 p-1 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300 group-hover:duration-300 animate-tilt"></div>
          </div>
          <Transition
            appear={true}
            show={open || isRightClicked}
            as={Fragment}
            enter="transition ease-in-out duration-150"
            enterFrom="-translate-y-3"
            enterTo=""
            leave="transition ease-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <Popover.Panel
              className={`absolute left-0 top-[70px] z-20 max-h-screen w-[265px] overflow-auto rounded-[18px] shadow-lg bg-th-bkg-3 border border-th-fgd-1 px-1 pt-2 pb-0`}
            >
              <div className="grid grid-cols-1">
              <div className="col-span-1 px-1">              
              <ul className="">
                       {/*
                        <li className="group mb-2 text-sm">
                          <a
                            className="inline-flex text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out w-full"
                            href="#"
                          >
                          <ArrowDownTrayIcon className="w-[15px] h-[15px] mr-2 mt-1 group-hover:text-mango-yellow" /> 

                           Download as SVG
                          </a>
                        </li>
                       */}
                        <li className="group mb-2 text-sm">
                          <a
                            className="inline-flex text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out  w-full"
                            href="/assets/images/mango-wordmark.zip"
                            download
                          >
                          <ArrowDownTrayIcon className="w-[15px] h-[15px] mr-2 mt-1 group-hover:text-mango-yellow" /> 
                           Download Logo as SVG
                          </a>
                        </li>
                        <div className="h-[2px] bg-gradient-to-r from-white/0 via-th-fgd-2 to-white/0 my-2"></div>
                        <li className="group pb-2 text-sm">
                          <a
                            className="inline-flex text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out  w-full"
                            href="/brand"
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