import { FunctionComponent, ReactNode } from 'react'

interface ButtonLinkProps {
  path: string
  className?: string
  secondary?: boolean
  linkText: string | ReactNode
  size?: 'large' | 'medium' | 'small'
  target?: '_blank'
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  linkText,
  path,
  className,
  secondary,
  size,
  target,
}) => {
  return (
    <a
      className={`flex w-max items-center justify-center rounded-md ${
        secondary
          ? 'border border-th-button md:hover:border-th-button-hover'
          : 'bg-th-button md:hover:bg-th-button-hover'
      } ${
        size === 'small'
          ? 'h-8 px-3 text-xs'
          : size === 'large'
            ? 'h-12 px-6'
            : 'h-10 px-4 text-sm'
      } default-transition font-display focus:outline-none text-th-fgd-1 whitespace-nowrap ${className}`}
      href={path}
      rel="noopener noreferrer"
      target={target ? target : undefined}
    >
      {linkText}
    </a>
  )
}

export default ButtonLink
