import Link from 'next/link'

const linkClassNames =
  'px-4 py-1 font-medium text-th-fgd-2 block md:hover:text-th-fgd-1 default-transition text-sm'

const NavigationItemLink = ({
  path,
  title,
  isExternal = false,
}: {
  isExternal?: boolean
  path: string
  title: string
}) => {
  return isExternal ? (
    <a className={linkClassNames} href={path}>
      {title}
    </a>
  ) : (
    <Link href={path} shallow>
      <span className={linkClassNames}>{title}</span>
    </Link>
  )
}

export default NavigationItemLink
