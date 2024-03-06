'use client'

import { useTheme } from 'next-themes'
import { HTMLProps, ReactNode, forwardRef, useEffect, useState } from 'react'

interface RefWrapperProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export const SwapStageWrapper = forwardRef<HTMLDivElement, RefWrapperProps>(
  (props, ref) => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) return <div>{props.children}</div>
    return (
      <div
        className={`${
          theme === 'Dark'
            ? `bg-[url('/images/new/stage-slice.png')]`
            : `bg-[url('/images/new/stage-slice-light.png')]`
        } bg-repeat-x bg-contain`}
        ref={ref}
      >
        {props.children}
      </div>
    )
  },
)

export const BuildWrapper = forwardRef<HTMLDivElement, RefWrapperProps>(
  (props, ref) => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) return <div className="bg-th-bkg-2">{props.children}</div>
    return (
      <div
        className={`${
          theme === 'Dark'
            ? `bg-[url('/images/new/cube-bg.png')]`
            : `bg-[url('/images/new/cube-bg-light.png')]`
        } bg-repeat`}
        ref={ref}
      >
        {props.children}
      </div>
    )
  },
)
