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
        <div className="relative ">
          <Popover.Button
            className={`flex h-10 w-10 default-transition items-center justify-center bg-th-bkg-3 rounded-full text-th-fgd-2 hover:text-mango-yellow transition duration-100 ease-in-out`}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
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
              className={`absolute right-0 top-16 thin-scroll z-20 max-h-screen w-36 space-y-2 overflow-auto rounded-xl bg-th-bkg-3 border border-th-bkg-4 p-2`}
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
