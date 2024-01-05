import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const themeToSet = useMemo(() => {
    return theme === 'Dark' ? 'Light' : 'Dark'
  }, [theme])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-5 w-5" />
  return (
    <button
      className="focus:outline-none text-th-fgd-4 md:hover:text-th-fgd-1"
      onClick={() => setTheme(themeToSet)}
    >
      {theme === 'Dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  )
}

export default ThemeSwitcher
