import { Fragment, FunctionComponent, ReactNode } from 'react'
import { Listbox, Transition } from '@headlessui/react'

type DropMenuProps = {
  button: ReactNode
  buttonClassName?: string
  disabled?: boolean
  onChange: (...args: any[]) => any
  options: Array<any>
  value?: any
}

const DropMenu: FunctionComponent<DropMenuProps> = ({
  button,
  buttonClassName,
  disabled,
  value,
  onChange,
  options,
}) => {
  return (
    <div className={`relative`}>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={`${buttonClassName} default-transition`}
              disabled={disabled}
            >
              {button}
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Listbox.Options
                className={`absolute z-50 mt-4 py-2 px-2 right-0 w-auto bg-th-bkg-2 shadow-lg rounded-md`}
              >
                {options.map((option) => (
                  <Listbox.Option key={option.name} value={option.name}>
                    {({ selected }) => (
                      <div
                        className={`p-2  hover:bg-th-bkg-3 hover:cursor-pointer hover:rounded-md hover:shadow-md tracking-wider ${
                          selected && `text-th-primary`
                        } ${option.icon && `flex items-center`}`}
                      >
                        {option.icon ? (
                          <div className="mr-2">{option.icon}</div>
                        ) : null}
                        {option.name}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  )
}

export default DropMenu
