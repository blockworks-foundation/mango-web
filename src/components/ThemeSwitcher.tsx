import { Popover, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { SunIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

const THEMES = [
  'Light',
  'Medium',
  'Dark',
  'High Contrast',
  'Mango',
  'Avocado',
  'Banana',
  'Blueberry',
  'Lychee',
  'Olive',
]

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Popover>
      {({ open }) => (
        <div className="relative">
          <Popover.Button
            className={`flex relative items-center justify-center p-1 overflow-hidden rounded-full shadow-2xl group`}
          >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-300 group-hover:bg-mango-green rounded-xl blur-md ease-in-out"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 ease-in-out">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 group-hover:bg-mango-yellow rounded-full blur-lg"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 group-hover:bg-mango-orange rounded-full blur-lg"></span>
              </span>
            <span className="relative text-th-fgd-3 bg-th-bkg-3 p-2 rounded-full hover:bg-th-bkg-1 hover:text-mango-yellow transition-all duration-100 ease-in-out">
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
            </span>  
          </Popover.Button>
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
              className={`absolute right-0 top-16 thin-scroll z-20 max-h-screen w-36 space-y-1 overflow-auto rounded-xl bg-th-bkg-3 border border-th-bkg-4 p-2`}
            >
              {THEMES.map((value) => (
                <button
                  className={`whitespace-nowrap font-body no-underline text-th-fgd-3 md:hover:text-th-fgd-5 w-full text-left hover:bg-th-fgd-1 focus:bg-th-fgd-1 rounded-lg p-[5px] pl-2 ${
                    value === theme ? 'text-th-fgd-4' : ''
                  }`}
                  onClick={() => setTheme(value)}
                  key={value}
                >
                  {value}
                </button>
              ))}
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}

export default ThemeSwitcher
