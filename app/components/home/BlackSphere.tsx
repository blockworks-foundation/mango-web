'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const BlackSphere = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="sphere w-56 h-56" />
  return (
    <img
      className={`sphere absolute -left-6 sm:left-6 w-56 h-auto xl:-left-12 ${
        theme === 'Dark' ? '' : 'opacity-0'
      }`}
      src="/images/new/black-sphere.png"
      alt=""
    />
  )
}

export default BlackSphere
