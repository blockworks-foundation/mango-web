import { Transition } from '@headlessui/react'
import { ReactNode } from 'react'

const transitionEnterStyle = 'transition-all ease-out duration-300'
const transitionExitStyle = 'transition-all ease-in duration-300'

export const FadeInFadeOut = ({
  children,
  className,
  show,
}: {
  children: ReactNode
  className?: string
  show: boolean
}) => (
  <Transition
    appear={true}
    className={className}
    show={show}
    enter={transitionEnterStyle}
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave={transitionExitStyle}
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition>
)
