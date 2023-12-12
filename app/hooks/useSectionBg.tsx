import { useTheme } from 'next-themes'
import { useMemo } from 'react'

export default function useSectionBg() {
  const { theme } = useTheme()
  const sectionBg = useMemo(() => {
    return theme === 'Light' ? 'bg-th-bkg-2' : 'bg-th-bkg-1'
  }, [theme])
  return sectionBg
}
