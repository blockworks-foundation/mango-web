import { Transition } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import { useTranslation } from 'next-i18next'
import ColorBlur from './ColorBlur'
import { useTheme } from 'next-themes'

const Steps = ({ steps }: { steps: StepItem[] }) => {
  const [highlighted, setHighlighted] = useState(0)
  return (
    <>
      {steps.map((step, index) => (
        <StepItem
          key={step.title + index}
          item={step}
          index={index}
          highlighted={highlighted}
          setHighlighted={setHighlighted}
        />
      ))}
    </>
  )
}

export default Steps

interface StepItem {
  children?: ReactNode
  desc: string
  title: string
  imagePath: string
}

const StepItem = ({
  item,
  index,
  highlighted,
  setHighlighted,
}: {
  item: StepItem
  index: number
  highlighted: number
  setHighlighted: (x: number) => void
}) => {
  const { t } = useTranslation(['home', 'dao'])
  const { theme } = useTheme()
  const isHighlighted = highlighted === index
  const { children, desc, title, imagePath } = item
  return (
    <div className="relative">
      <div
        className="flex items-center justify-between lg:pr-20 pr-6 z-10 relative"
        onMouseEnter={() => setHighlighted(index)}
        onMouseLeave={() => setHighlighted(0)}
      >
        <div
          className={`${
            isHighlighted
              ? theme === 'Light'
                ? 'md:bg-th-bkg-2'
                : 'md:bg-th-bkg-1'
              : 'md:opacity-40'
          } flex flex-row space-x-4 md:space-x-6 mb-8 last:mb-0 md:mb-0 items-start md:py-12 lg:pl-20 pl-6 h-auto md:h-64 default-transition md:pr-40 md:-mr-32 w-full`}
        >
          <h3>{`0${index + 1}`}</h3>
          <div className="border-b-2 border-th-fgd-2 h-4 w-full max-w-[24px] md:max-w-[40px]" />
          <div>
            <h3 className="mb-3">{t(title)}</h3>
            <p className="max-w-[800px]">{t(desc)}</p>
            {children ? children : null}
          </div>
        </div>
        <div className="hidden md:block w-64 flex-shrink-0">
          <Transition
            as={Fragment}
            show={isHighlighted}
            enter="transition-all ease-in duration-300"
            enterFrom="opacity-0 translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all ease-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img className="w-auto h-40 md:h-64" src={imagePath} alt="" />
          </Transition>
        </div>
      </div>
      <Transition
        className="hidden md:block"
        show={isHighlighted}
        enter="transition-all ease-in duration-500 delay-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ColorBlur className="left-0 top-0" height="280px" width="66%" />
      </Transition>
    </div>
  )
}
