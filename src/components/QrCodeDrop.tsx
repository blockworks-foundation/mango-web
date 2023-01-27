import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {QrCodeIcon, DevicePhoneMobileIcon, } from '@heroicons/react/20/solid'
import Image from 'next/image';

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
              <DevicePhoneMobileIcon className="h-5 w-5" />
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
              className={`group absolute right-0 top-[75px] w-[190px] z-50 overflow-auto rounded-[18px] shadow-lg bg-th-bkg-4 border border-th-fgd-1 p-1`}
              >
              <div className="flex flex-col">

              <div className="h-[165px] bg-white bg-opacity-10 group-hover:bg-opacity-20 group-hover:saturate-[1.25] rounded-xl m-2 transition duration-150 ease-in-out">

              <Image
                src="/assets/images/qr-code-test.svg"
                alt="Github"
                width={400}
                height={400}
                loading="lazy"
              />

              </div>
              <div className="inline-flex bg-mango-green broder border-[1px] border-mango-green bg-opacity-5 rounded-xl py-1 px-2 m-1">  
              <svg 
                id="bold" 
                width="25"
                height="25" 
                viewBox="0 0 24 24" 
                className="fill-mango-green p-1 w-[25px] bg-white bg-opacity-10 rounded-md"
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="m23 8c-.552 0-1-.447-1-1v-4c0-.552-.449-1-1-1h-4c-.552 0-1-.447-1-1s.448-1 1-1h4c1.654 0 3 1.346 3 3v4c0 .553-.448 1-1 1z"/>
                <path 
                    d="m21 24h-4c-.552 0-1-.447-1-1s.448-1 1-1h4c.551 0 1-.448 1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 1.654-1.346 3-3 3z"/>
                <path 
                    d="m7 24h-4c-1.654 0-3-1.346-3-3v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .552.449 1 1 1h4c.552 0 1 .447 1 1s-.448 1-1 1z"/>
                <path 
                    d="m1 8c-.552 0-1-.447-1-1v-4c0-1.654 1.346-3 3-3h4c.552 0 1 .447 1 1s-.448 1-1 1h-4c-.551 0-1 .448-1 1v4c0 .553-.448 1-1 1z"/>
                <path 
                    d="m18 11c-.552 0-1-.447-1-1v-3h-10v3c0 .553-.448 1-1 1s-1-.447-1-1v-3c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v3c0 .553-.448 1-1 1z"/>
                <path 
                    d="m21 14c0 .553-.448 1-1 1h-1v2c0 1.103-.897 2-2 2h-10c-1.103 0-2-.897-2-2v-2h-1c-.552 0-1-.447-1-1s.448-1 1-1h16c.552 0 1 .447 1 1z"/>
                </svg> 
              <div>
              <h3 className="text-mango-green ml-2 mt-[2px] text-sm font-body font-bold tracking-wide text-th-fgd-4">
                        Discover Mango
               </h3>   
                </div>  
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