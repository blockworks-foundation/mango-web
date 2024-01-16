'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const CardImage = ({
  customImagePath,
  iconPath,
}: {
  customImagePath?: string
  iconPath?: string
}) => {
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

  if (!mounted) return <div className="h-[200px] lg:h-[140px] bg-th-bkg-2" />
  return (
    <div
      className={`h-[200px] lg:h-[140px] ${
        customImagePath ? 'bg-center bg-cover bg-no-repeat' : ''
      }  transition-transform transform md:group-hover:scale-105 duration-300 flex items-center justify-center`}
      style={{ backgroundImage: `url('${imgSrc}')` }}
    >
      {iconPath ? (
        <div className="h-14 w-14 flex items-center justify-center">
          <img className="text-th-fgd-1" src={iconPath} />
        </div>
      ) : null}
    </div>
  )
}

export default CardImage
