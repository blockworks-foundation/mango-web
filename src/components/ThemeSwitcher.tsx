import { Popover, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { SwatchIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

const THEMESDARK = [
  'Dark',
  'Darker',
  'High Contrast',
  'Mango',
  'Blueberry',
  'Olive',
]

const THEMESLIGHT = [
  'Light',
  'Banana',
  'Lychee',
  'Avocado',
]

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Popover>
      {({ open }) => (
        <div className="relative group">
          <Popover.Button
            className={`flex z-30 relative items-center justify-center p-[3px] overflow-hidden rounded-full shadow-2xl group`}
          >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-300 group-hover:bg-mango-green rounded-xl blur-md ease-in-out"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 ease-in-out">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 group-hover:bg-mango-yellow rounded-full blur-lg"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 group-hover:bg-mango-orange rounded-full blur-lg"></span>
              </span>
            <span className="relative text-th-fgd-3 bg-th-bkg-3 p-2 rounded-full hover:bg-th-bkg-1 group-hover:text-mango-green transition-all duration-100 ease-in-out">
            {open ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <SwatchIcon className="h-5 w-5" />
            )}
            </span>  
          </Popover.Button>

          <div className="p-1 -mt-3 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-sm blur-xl opacity-5 group-hover:opacity-100 transition duration-700 group-hover:duration-700 animate-tilt"></div>
          <div className="p-2 -mt-3 ml-0 w-38 mx-auto -inset-0.5 bg-gradient-to-r from-mango-red to-mango-green rounded-sm blur-xl opacity-5 group-hover:opacity-50 transition duration-300 group-hover:duration-700 animate-tilt"></div>

          <Transition
            appear={true}
            show={open}
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="scale-90"
            enterTo="scale-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              className={`absolute right-0 top-16 thin-scroll z-20 max-h-screen w-72 overflow-auto rounded-xl shadow-lg bg-th-bkg-3 border border-th-fgd-1 p-4`}
            >
              <div className="grid grid-cols-2">
              <div className="col-span-1 px-1"> 
              <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-4">
                Light
              </h3>              
              {THEMESLIGHT.map((value) => (
                <button
                  className={`whitespace-nowrap font-body no-underline text-th-fgd-3 md:hover:text-th-fgd-5 w-full text-left hover:bg-th-fgd-1 focus:bg-th-fgd-1 rounded-lg p-[5px] pl-2 mb-1 ${
                    value === theme ? 'text-th-fgd-4' : ''
                  }`}
                  onClick={() => setTheme(value)}
                  key={value}
                >
                  {value}
                </button>
              ))}
              </div>
              <div className="col-span-1 px-1">                
              <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-4">
                Dark
              </h3>
             {THEMESDARK.map((value) => (
                <button
                  className={`whitespace-nowrap font-body no-underline text-th-fgd-3 md:hover:text-th-fgd-5 w-full text-left hover:bg-th-fgd-1 focus:bg-th-fgd-1 rounded-lg p-[5px] pl-2 mb-1  ${
                    value === theme ? 'text-th-fgd-4' : ''
                  }`}
                  onClick={() => setTheme(value)}
                  key={value}
                >
                  {value}
                </button>
              ))}
              </div>

              </div>
             </Popover.Panel>
          </Transition>
        </div>
        
      )}
    </Popover>
  )
}

export default ThemeSwitcher
