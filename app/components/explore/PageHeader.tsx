import { useTheme } from 'next-themes'
import { MAX_CONTENT_WIDTH } from '../../utils/constants'
import { useEffect, useState } from 'react'
import BackButton from '../shared/BackButton'

const WRAPPER_CLASSES = 'flex flex-col items-start h-[264px] py-6'

const PageHeader = ({
  backgroundImageUrl,
  title,
  showBack,
}: {
  backgroundImageUrl?: string
  title: string
  showBack?: boolean
}) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const imageSrc = backgroundImageUrl
    ? backgroundImageUrl
    : theme === 'Dark'
      ? '/images/new/cube-bg.png'
      : '/images/new/cube-bg-light.png'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <div
        className={`${WRAPPER_CLASSES} ${
          showBack ? 'justify-between' : 'justify-end'
        } bg-th-bkg-2`}
      >
        {showBack ? (
          <div className={`${MAX_CONTENT_WIDTH} w-full mx-auto px-6 lg:px-20`}>
            <BackButton />
          </div>
        ) : null}
        <div className={`${MAX_CONTENT_WIDTH} mx-auto`}>
          <div className="bg-th-bkg-1 px-3 py-1 mx-6 sm:mx-0">
            <h1 className="text-4xl text-center">{title}</h1>
          </div>
        </div>
      </div>
    )

  return (
    <div
      className={`${WRAPPER_CLASSES} ${
        showBack ? 'justify-between' : 'justify-end'
      } ${backgroundImageUrl ? 'bg-cover bg-center' : 'bg-repeat'}`}
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      {showBack ? (
        <div className={`${MAX_CONTENT_WIDTH} w-full mx-auto px-6 lg:px-20`}>
          <BackButton />
        </div>
      ) : null}
      <div className={`${MAX_CONTENT_WIDTH} mx-auto`}>
        <div className="bg-th-bkg-1 px-3 py-1 mx-6 sm:mx-0">
          <h1 className="text-4xl text-center">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
