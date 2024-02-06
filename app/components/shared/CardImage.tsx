'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const CardImage = ({ customImagePath }: { customImagePath?: string }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const imgSrc = customImagePath
    ? customImagePath
    : theme === 'Dark'
      ? '/images/new/cube-bg.png'
      : '/images/new/cube-bg-light.png'

  if (!mounted) return <div className="h-[200px] lg:h-[180px] bg-th-bkg-2" />
  return (
    <div
      className={`h-[200px] lg:h-[180px] ${
        customImagePath ? 'bg-center bg-cover bg-no-repeat' : ''
      }  transition-transform transform md:group-hover:scale-105 duration-300`}
      style={{ backgroundImage: `url('${imgSrc}')` }}
    />
  )
}

export default CardImage
