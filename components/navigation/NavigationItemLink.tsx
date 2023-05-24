import Link from 'next/link'
import { ReactNode } from 'react'

const linkClassNames =
  'px-6 py-1.5 font-medium text-th-fgd-1 block md:hover:text-th-fgd-4 default-transition text-sm lg:text-base flex items-center'

const NavigationItemLink = ({
  path,
  onClick,
  title,
  isExternal = false,
  icon,
}: {
  isExternal?: boolean
  path: string
  onClick?: () => void
  title: string
  icon?: ReactNode
}) => {
  return isExternal ? (
    <a
      className={linkClassNames}
      href={path}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon ? icon : null}
      {title}
    </a>
  ) : (
    <Link href={path} onClick={onClick} shallow>
      {icon ? icon : null}
      <span className={linkClassNames}>{title}</span>
    </Link>
  )
}

export default NavigationItemLink
