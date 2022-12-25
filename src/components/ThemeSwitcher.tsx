import { Popover, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { SunIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

const THEMES = [
  'Light',
  'Medium',
  'Dark',
  'High Contrast',
  'Mango Classic',
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
            className={`flex h-10 w-10 default-transition items-center justify-center rounded-full border border-th-button text-th-fgd-1 md:hover:border-th-button-hover md:hover:text-th-fgd-1`}
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
              className={`absolute right-0 top-12 thin-scroll z-20 max-h-60 space-y-2 overflow-auto rounded-md bg-th-bkg-2 p-4`}
            >
              {THEMES.map((value) => (
                <button
                  className={`whitespace-nowrap font-normal no-underline md:hover:text-th-fgd-1 w-full text-left ${
                    value === theme ? 'text-th-active' : ''
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
