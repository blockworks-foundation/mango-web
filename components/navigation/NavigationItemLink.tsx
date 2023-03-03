import Link from 'next/link'

const linkClassNames =
  'px-4 py-1 font-medium text-th-fgd-2 block md:hover:text-th-fgd-1 default-transition text-sm'

const NavigationItemLink = ({
  path,
  onClick,
  title,
  isExternal = false,
}: {
  isExternal?: boolean
  path: string
  onClick?: () => void
  title: string
}) => {
  return isExternal ? (
    <a
      className={linkClassNames}
      href={path}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  ) : (
    <Link href={path} onClick={onClick} shallow>
      <span className={linkClassNames}>{title}</span>
    </Link>
  )
}

export default NavigationItemLink
