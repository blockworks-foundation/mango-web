import { useCallback, useEffect, useMemo, useState } from 'react'

export const breakpoints = {
  sm: 640,
  // => @media (min-width: 640px) { ... }

  md: 768,
  // => @media (min-width: 768px) { ... }

  lg: 1024,
  // => @media (min-width: 1024px) { ... }

  xl: 1280,
  // => @media (min-width: 1280px) { ... }
}

export const useViewport = () => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const handleWindowResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }
  }, [])
  // store the window width and height on resize
  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [handleWindowResize])

  const [isMobile, isTablet, isDesktop] = useMemo(() => {
    if (!width) return [false, false, false]
    const mobile = width < breakpoints.sm
    const tablet = width >= breakpoints.sm && width < breakpoints.lg
    const desktop = width >= breakpoints.lg
    return [mobile, tablet, desktop]
  }, [width])

  return { width, height, isMobile, isTablet, isDesktop }
}
